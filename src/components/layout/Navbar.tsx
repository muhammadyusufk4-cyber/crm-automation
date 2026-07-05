"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { mainNav } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<"services" | "industries" | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setMegaOpen(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b border-border-subtle" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-violet text-sm text-white">
            S
          </span>
          SummitOps
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setMegaOpen(null)}>
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen("services")}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground">
              Services <ChevronDown className="size-3.5" />
            </button>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen("industries")}
          >
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground">
              Industries <ChevronDown className="size-3.5" />
            </button>
          </div>
          {mainNav
            .filter((n) => n.label !== "Services" && n.label !== "Industries")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

          <AnimatePresence>
            {megaOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
                className="glass absolute left-1/2 top-full mt-2 w-[min(90vw,720px)] -translate-x-1/2 rounded-2xl border border-border-subtle p-6 shadow-2xl"
              >
                {megaOpen === "services" ? (
                  <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-muted"
                      >
                        <Icon name={s.icon} className="mt-0.5 size-4 text-electric" />
                        <span className="text-sm font-medium text-foreground/90">{s.shortName}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="col-span-full mt-2 flex items-center justify-between rounded-xl border-t border-border-subtle p-3 pt-4 text-sm font-medium text-electric"
                    >
                      View all services →
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                    {industries.map((i) => (
                      <Link
                        key={i.slug}
                        href={`/industries/${i.slug}`}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-muted"
                      >
                        <Icon name={i.icon} className="mt-0.5 size-4 text-violet" />
                        <span className="text-sm font-medium text-foreground/90">{i.name}</span>
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      className="col-span-full mt-2 flex items-center justify-between rounded-xl border-t border-border-subtle p-3 pt-4 text-sm font-medium text-electric"
                    >
                      View all industries →
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Book a Strategy Call
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full border border-border-subtle"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border-subtle glass lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="mt-2">
                <Button className="w-full">Book a Strategy Call</Button>
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
