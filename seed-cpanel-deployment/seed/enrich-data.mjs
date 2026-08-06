import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Enrichment map: slug -> { client, architect, services, area, sector, location, description }
const enrichment = {
  'ellington-sands-1-2': { client: 'Ellington', architect: 'BSBG', services: 'MEP/AV/ICT/Security/Home Automation Design', area: 'Plot A: 87,395 sqm · Plot B: 84,818 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'eltiera-heights': { client: 'Ellington', architect: 'BSBG', services: 'MEP/AV/ICT/Security/Home Automation Design', area: '44,875 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'eltiera-views': { client: 'Ellington', architect: 'BSBG', services: 'MEP/AV/ICT/Security/Home Automation Design', area: '111,370 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'gargash-hospital': { client: 'Ali Gargash', architect: 'Eng. Adnan Saffarini', services: 'MEP Design', area: '50 Hospital Beds', sector: 'Healthcare', location: 'Dubai, UAE' },
  'german-general-hospital': { client: 'German General Hospital', architect: 'Wörner Traxler Richter', services: 'MEP Design', area: '40,000 sqm · 100 Beds', sector: 'Healthcare', location: 'Abu Dhabi, UAE' },
  'hilton-awassa': { client: 'Sunshine Investment PLC', architect: 'JDAW Consult', services: 'MEP Design & Supervision', area: '30,000 sqm · 169 Guest Rooms', sector: 'Hospitality', location: 'Awassa, Ethiopia' },
  'holiday-inn-residences': { client: 'Kingston Holding', architect: 'EDGE Design', services: 'MEP Design & Supervision', area: '60,000 sqm · Twin Towers', sector: 'Hospitality', location: 'Dubai, UAE' },
  'hub-zero': { client: 'Meraas', architect: 'RIVA', services: 'MEP Design Services', area: '15,000 sqm', sector: 'Entertainment', location: 'Dubai, UAE' },
  'img': { client: 'IM Galadari', architect: 'FTHUSA', services: 'MEP Design & Supervision', area: '150,000 sqm', sector: 'Entertainment', location: 'Dubai, UAE' },
  'iconic-tower': { client: 'Mered', architect: 'Pininfarina', services: 'MEP Design', area: '50,947 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'jw-marriott-residences': { client: 'CG Group', architect: 'JRHP', services: 'MEP Design', area: '23,517 sqm', sector: 'Hospitality', location: 'Dubai, UAE' },
  'jumeirah-living-5-star-hotel-apartments-at-peninsula-plot-f-dubai-uae': { client: 'Select Group', architect: 'Killa Design', services: 'MEP Design', area: '27,400 sqm', sector: 'Hospitality', location: 'Dubai, UAE' },
  'kings-college': { client: 'Kings Holding', architect: 'ANC / Dubai Consultants', services: 'MEP Design & Supervision', area: '45,000 sqm', sector: 'Education', location: 'Dubai, UAE' },
  'lake-lisi-school': { client: 'Lake Lisi', architect: 'Education Design International', services: 'MEP Concept Design', area: '18,000 sqm', sector: 'Education', location: 'Tbilisi, Georgia' },
  'mandarin-jumeirah-beach-resort': { client: 'WASL', architect: 'DAR', services: 'MEP Design & Supervision', area: '45,000 sqm · 256 Rooms', sector: 'Hospitality', location: 'Dubai, UAE' },
  'mirdiff-hills': { client: 'DIRC', architect: 'Jonathan Dunn Associates, UK', services: 'MEP Design', area: '350,000 sqm', sector: 'Mixed-Use', location: 'Dubai, UAE' },
  'nmc-hospital': { client: 'New Medical Centre', architect: 'A2Z Architects', services: 'MEP Design & Supervision', area: '20,000 sqm · 70 Beds', sector: 'Healthcare', location: 'Dubai, UAE' },
  'namaste-tower': { client: 'Jaguar', architect: 'Killa Architectural Consultants', services: 'MEP Design', area: '120,000 sqm · 363 Keys', sector: 'Hospitality', location: 'Mumbai, India' },
  'national-games-stadium-trivandrum-india': { client: 'IL&FS', architect: 'Collage Designs', services: 'MEP Design & Supervision', area: '50,000 seats', sector: 'Sports', location: 'Trivandrum, India' },
  'novotel-al-barsha': { client: 'Al Ali Properties', architect: 'Khatib & Alami', services: 'MEP Design & Part-time Supervision', area: '169,000 sqm · 465 Rooms', sector: 'Hospitality', location: 'Dubai, UAE' },
  'oberoi-international-school': { client: 'Oberoi Realty', architect: 'Perkins+Will', services: 'MEP Design', area: '30,000 sqm', sector: 'Education', location: 'Mumbai, India' },
  'park-hyatt-zanzibar': { client: 'Albwardy', architect: 'WA International', services: 'MEP Design', area: '15,000 sqm · 90 Keys', sector: 'Hospitality', location: 'Zanzibar, Tanzania' },
  'playa-del-sol': { client: 'Ellington', architect: 'BSBG', services: 'MEP Design & Supervision', area: '98,296 sqm', sector: 'Residential', location: 'Ras Al Khaimah, UAE' },
  'port-de-la-mer-hotel': { client: 'ASB Hospitality', architect: 'MOMA', services: 'MEP Design Review & Site Supervision', area: '88,909 sqm · 380 Keys', sector: 'Hospitality', location: 'Dubai, UAE' },
  'portside-square': { client: 'Ellington', architect: 'XYZ Designers', services: 'MEP/AV/ICT/Home Automation & Security Design', area: '', sector: 'Residential', location: 'Dubai, UAE' },
  'preatoni-tower-residential-development': { client: 'Preatoni', architect: 'Killa Design', services: 'MEP Design', area: '43,247 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'radisson-blu': { client: 'Holiday Group', architect: 'DWP', services: 'MEP Design', area: '30,000 sqm · 148 Keys', sector: 'Hospitality', location: 'Ajman, UAE' },
  'rajiv-gandhi-int-l-cricket-stadium': { client: 'Rajiv Gandhi Intl. Cricket Stadium', architect: 'Populous / College Design', services: 'MEP Design & Client Representative', area: '25,000 seats', sector: 'Sports', location: 'Dehradun, India' },
  'en2019-residential-development-plot-s5-c09': { client: 'SAAS', architect: 'BSBG', services: 'MEP/AV/ICT/Security/Pools & Water Feature Design', area: '32,241 sqm', sector: 'Residential', location: 'Abu Dhabi, UAE' },
  'residential-at-peninsula-plot-b': { client: 'Select Group', architect: 'Killa Design', services: 'MEP Design', area: '96,486 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'rove-hotel-and-branded-apartments': { client: 'Rove Al Jada', architect: 'JRHP', services: 'MEP Design', area: '32,970 sqm · 150 Suites · 250 Apartments', sector: 'Hospitality', location: 'Sharjah, UAE' },
  'saas-st-regis': { client: 'SAAS', architect: 'BSBG / Squire & Partners', services: 'MEP Design', area: '70,000 sqm', sector: 'Residential', location: 'Abu Dhabi, UAE' },
  'saas-c11': { client: 'SAAS', architect: 'BSBG', services: 'MEP/AV/ICT/Security/Pools & Water Feature Design', area: '4,548 sqm', sector: 'Residential', location: 'Abu Dhabi, UAE' },
  'safa-school': { client: 'Safa School', architect: 'EDA / FNI', services: 'MEP Design', area: '25,000 sqm', sector: 'Education', location: 'Dubai, UAE' },
  'select-bb-towers-plot-z': { client: 'Select Group', architect: 'Killa Design', services: 'MEP Design', area: '90,374 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'sobha-hartland': { client: 'PNC Investments', architect: 'PNC Architects', services: 'MEP Design', area: '38,100 sqm', sector: 'Education', location: 'Dubai, UAE' },
  'soto-grande': { client: 'Ellington', architect: 'XYZ Designers', services: 'MEP Design', area: '', sector: 'Residential', location: 'Ras Al Khaimah, UAE' },
  'sukoon-and-museum-residential-buildings': { client: 'ARADA', architect: 'DAR Consult', services: 'MEP Design', area: '40,000 sqm', sector: 'Residential', location: 'Sharjah, UAE' },
  'sunrise-bay-tower': { client: 'EMAAR', architect: 'Perkins+Will & Rice Perry Ellis', services: 'MEP Design', area: '65,000 sqm', sector: 'Mixed-Use', location: 'Dubai, UAE' },
  'tbc-bank-headquarters': { client: 'National Housing Corporation', architect: 'UN Studio', services: 'Peer Review', area: '67,000 sqm', sector: 'Commercial', location: 'Tbilisi, Georgia' },
  'the-gate-buildings': { client: 'ARADA', architect: 'DAR Consult', services: 'MEP Design', area: '17,187 sqm', sector: 'Residential', location: 'Sharjah, UAE' },
  'the-meriva-collection': { client: 'Ellington', architect: 'XYZ', services: 'MEP/AV/ICT/Home Automation & Security Design', area: '107,290 sqm', sector: 'Mixed-Use', location: 'Dubai, UAE' },
  'uptown-mercer-house': { client: 'Ellington', architect: 'BSBG', services: 'MEP Design', area: '84,000 sqm', sector: 'Residential', location: 'Dubai, UAE' },
  'w-hotel': { client: 'OMRAN', architect: 'COWI/HKS', services: 'MEP Design', area: '40,000 sqm · 251 Rooms · 28 Suites', sector: 'Hospitality', location: 'Muscat, Oman' },
  'waldorf-astoria': { client: 'Nabni Developments', architect: 'Carlos OTT / VX Studio', services: 'MEP Design Services', area: '850,000 sqft', sector: 'Hospitality', location: 'Dubai, UAE' },
  'warsan': { client: 'Dubai Health Authority', architect: 'Al Sharawi', services: 'MEP Design', area: '30,458 sqm · 288 Rooms / 556 Beds', sector: 'Healthcare', location: 'Dubai, UAE' },
  'wedyan-the-canal': { client: 'Al Ghurair Properties', architect: 'BSBG / KKAA', services: 'MEP Design', area: '117,350 sqm', sector: 'Mixed-Use', location: 'Dubai, UAE' },
  'worli-360-west': { client: 'Oberoi Realty', architect: 'Kohn Pedersen Fox (KPF)', services: 'MEP Design Services', area: '390,000 sqm (combined)', sector: 'Mixed-Use', location: 'Mumbai, India' },
  'well-hotel': { client: 'DGCL', architect: 'AEDAS/BSBG', services: 'MEP Design', area: '115,797 sqm · 102 Keys · 15 Branded Villas', sector: 'Hospitality', location: 'Riyadh, Saudi Arabia' },
};

const filePath = join(__dirname, 'lib/data.ts');
let content = readFileSync(filePath, 'utf8');

for (const [slug, data] of Object.entries(enrichment)) {
  // Find the entry by slug and patch it
  const slugPattern = new RegExp(`("slug":\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?)(\\},\\n\\s*\\{|\\}\\n\\];)`, 'g');
  content = content.replace(slugPattern, (match, entry, closing) => {
    let updated = entry;
    const replacements = [
      ['clientSector', data.sector || data.client || 'Mixed-Use'],
      ['location', data.location],
    ];
    // Add/update fields
    if (data.sector && !updated.includes('"sector"')) {
      updated = updated.replace(/"clientSector":[^,\n]*/, `"clientSector": "${data.sector || ''}",\n    "sector": "${data.sector}"`);
    }
    if (data.location) {
      updated = updated.replace(/"location":[^,\n]*/, `"location": "${data.location}"`);
    }
    if (data.client && !updated.includes('"client"')) {
      updated = updated.replace(/"projectScale":[^,\n]*/, (m) => m + `,\n    "client": "${data.client}"`);
    }
    if (data.architect && !updated.includes('"architect"')) {
      updated = updated.replace(/"client":[^,\n]*/, (m) => m + `,\n    "architect": "${data.architect}"`);
    }
    if (data.services && !updated.includes('"services"')) {
      updated = updated.replace(/"architect":[^,\n]*/, (m) => m + `,\n    "services": "${data.services}"`);
    }
    if (data.area && !updated.includes('"area"')) {
      updated = updated.replace(/"services":[^,\n]*/, (m) => m + `,\n    "area": "${data.area}"`);
    }
    return updated + closing;
  });
}

writeFileSync(filePath, content);
console.log('✅ data.ts enriched successfully!');
