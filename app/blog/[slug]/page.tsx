import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { fallbackPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { Section } from '@/components/ui/Section';

export function generateStaticParams() {
  return fallbackPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = fallbackPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#0b0f19] min-h-screen text-white pt-40 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-8 max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="text-gold text-xs font-bold tracking-[0.15em] uppercase hover:underline inline-flex items-center gap-2 mb-6"
          >
            ← Back to Insights & Media
          </Link>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            {post.category} <span className="text-white/30 mx-2">·</span> {formatDate(post.publishedAt)}
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {post.image && (
          <div className="max-w-4xl mx-auto mb-12 overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-[#0a1124]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto max-h-[600px] object-contain mx-auto"
            />
          </div>
        )}

        <Section className="pt-0">
          <div className="max-w-3xl mx-auto text-slate-300 font-light leading-relaxed text-base md:text-lg space-y-6">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '<br/><br/>') }} />
            ) : (
              <p className="text-slate-400 italic">Full article content is not available yet.</p>
            )}
          </div>
        </Section>

        <div className="max-w-3xl mx-auto pt-12 border-t border-white/10 mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-yellow-500 text-[#0b0f19] font-sans text-xs font-bold tracking-[0.15em] uppercase transition-colors rounded-sm"
          >
            ← Return to All Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
