import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui-custom/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, blogPostingSchema } from "@/lib/schema";
import { blogPosts, getPostBySlug } from "@/content/blog";
import { WhatsAppLink } from "@/components/ui-custom/whatsapp-link";
import { WhatsAppIcon } from "@/components/ui-custom/brand-icons";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [{ url: post.coverImage }],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="pt-28">
        <div className="container-luxe max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
              &larr; The Journal
            </Link>
          </nav>

          <Reveal>
            <div className="flex items-center gap-2 font-accent text-xs uppercase tracking-[0.14em] text-gold-deep">
              <span>{post.category}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 text-balance font-heading text-4xl sm:text-5xl font-medium leading-[1.1] text-foreground">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="container-luxe mt-10 max-w-4xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>

        <div className="container-luxe max-w-3xl py-16">
          <div className="flex flex-col gap-6">
            {post.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="mt-4 font-heading text-2xl text-foreground">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {block}
                </p>
              )
            )}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center">
            <h2 className="font-heading text-2xl text-foreground">
              Ready to experience it for yourself?
            </h2>
            <WhatsAppLink className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-accent text-xs uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90">
              <WhatsAppIcon className="size-4" />
              Book Your Session
            </WhatsAppLink>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-20">
          <div className="container-luxe max-w-4xl">
            <h2 className="font-heading text-2xl text-foreground">Read Next</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-card p-4"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base leading-snug text-foreground group-hover:text-primary">
                      {p.title}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs text-primary">
                      Read more <ArrowRight className="size-3" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
