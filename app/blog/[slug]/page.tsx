import { notFound } from 'next/navigation';
import Image from 'next/image';
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
    <div className="bg-[#0b0f19] min-h-screen text-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6">
            {post.category} <span className="text-white/30 mx-2">·</span> {formatDate(post.publishedAt)}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      {post.image && (
        <div className="container mx-auto px-6 lg:px-12 mb-16 flex justify-center">
          <img 
            src={`/seedv3${post.image}`} 
            alt={post.title} 
            className="w-full max-w-4xl h-auto rounded-sm"
          />
        </div>
      )}

      <Section className="pt-0">
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-serif prose-headings:font-bold prose-a:text-gold hover:prose-a:text-white prose-a:transition-colors">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '<br/><br/>') }} />
          ) : (
            <p className="text-slate-400 italic">Full article content is not available yet.</p>
          )}
        </div>
      </Section>
    </div>
  );
}
