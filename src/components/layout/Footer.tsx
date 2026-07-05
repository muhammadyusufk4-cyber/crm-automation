import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { footerNav } from "@/data/nav";
import { Mail } from "lucide-react";
import { LinkedInIcon, XIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-muted/40">
      <Container className="py-16">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-border-subtle pb-12 lg:flex-row lg:items-center">
          <div className="max-w-lg">
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Ready to stop doing this manually?
            </h3>
            <p className="mt-3 text-foreground/60">
              Book a 30-minute strategy call and we&apos;ll map out exactly where automation
              would save your team the most time.
            </p>
          </div>
          <Button href="/contact" size="lg" showArrow>
            Book a Strategy Call
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-violet text-sm text-white">
                C
              </span>
              Converge
            </Link>
            <p className="mt-4 max-w-xs text-sm text-foreground/60">
              The revenue automation partner for teams who&apos;d rather build systems than
              hire more admin.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-8 items-center justify-center rounded-full border border-border-subtle text-foreground/60 hover:text-foreground"
              >
                <LinkedInIcon className="size-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex size-8 items-center justify-center rounded-full border border-border-subtle text-foreground/60 hover:text-foreground"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href="mailto:hello@converge.ai"
                aria-label="Email"
                className="flex size-8 items-center justify-center rounded-full border border-border-subtle text-foreground/60 hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/60 hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Platforms</h4>
            <ul className="mt-4 space-y-3">
              {footerNav.platforms.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/60 hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-foreground/60 hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Converge. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-foreground/50 hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
