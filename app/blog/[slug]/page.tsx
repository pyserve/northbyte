import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { CtaSection } from "@/components/cta-section"
import { getPost, posts } from "@/lib/blog"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Article not found" }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All insights
          </Link>
          <div className="mt-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
            <h1 className="mt-3 text-balance font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-pretty text-lg leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <CtaSection />
    </>
  )
}
