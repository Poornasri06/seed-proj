import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

const LEADS_PATH = path.join(process.cwd(), 'data', 'leads.json');

async function readLeads(): Promise<any[]> {
  try {
    const raw = await fs.readFile(LEADS_PATH, 'utf8');
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const required = ['fullName', 'phone', 'email', 'serviceType', 'details'];
  for (const f of required) {
    if (!body?.[f] || String(body[f]).trim().length === 0) {
      return NextResponse.json({ error: `Missing field: ${f}` }, { status: 400 });
    }
  }

  const lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...body,
  };

  try {
    const existing = await readLeads();
    existing.push(lead);
    await fs.mkdir(path.dirname(LEADS_PATH), { recursive: true });
    await fs.writeFile(LEADS_PATH, JSON.stringify(existing, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to persist lead', err);
  }

  const webhook = process.env.NOTIFICATION_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error('Webhook delivery failed', err);
    }
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
