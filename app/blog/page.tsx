import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { posts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Practical articles on AI automation, custom software, and operational efficiency for Canadian small and mid-sized businesses.",
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas for building a leaner, smarter business"
        description="Field notes on AI automation, custom software, and the operational habits that help Canadian SMBs grow without burning out their teams."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.category}
                </span>
                <h2 className="mt-3 text-balance font-display text-xl font-semibold leading-snug text-foreground">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-foreground transition-transform group-hover:translate-x-0.5">
                    Read
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
