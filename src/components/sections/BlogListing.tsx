"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { blogCategories, blogPosts } from "@/data/blog-posts";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function BlogListing() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="flex flex-wrap justify-center gap-2">
          {["All", ...blogCategories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "border-electric bg-electric text-white"
                  : "border-border-subtle bg-surface text-foreground/70 hover:bg-surface-muted",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:border-electric/40 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-electric">
                      {post.category}
                    </span>
                    <ArrowUpRight className="size-4 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-electric" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium leading-snug">{post.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{post.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs text-foreground/45">
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-foreground/50">No posts in this category yet.</p>
        )}
      </Container>
    </section>
  );
}
