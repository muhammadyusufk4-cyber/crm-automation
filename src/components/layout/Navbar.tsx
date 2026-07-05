"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { mainNav } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const plainLinks = mainNav.filter((n) => n.label !== "Services" && n.label !== "Industries");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b border-border" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
            C
          </span>
          Converge
        </Link>

        <NavigationMenu viewport={false} className="hidden lg:flex" delayDuration={80}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[min(90vw,720px)] p-4">
                  <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                    {services.map((s) => (
                      <NavigationMenuLink key={s.slug} asChild>
                        <Link href={`/services/${s.slug}`} className="flex items-start gap-3 !p-3">
                          <Icon name={s.icon} className="mt-0.5 size-4 text-primary" />
                          <span className="font-medium">{s.shortName}</span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                    <NavigationMenuLink asChild>
                      <Link
                        href="/services"
                        className="col-span-full mt-2 flex items-center justify-between border-t border-border !p-3 pt-4 font-medium text-primary"
                      >
                        View all services →
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[min(90vw,720px)] p-4">
                  <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                    {industries.map((i) => (
                      <NavigationMenuLink key={i.slug} asChild>
                        <Link href={`/industries/${i.slug}`} className="flex items-start gap-3 !p-3">
                          <Icon name={i.icon} className="mt-0.5 size-4 text-accent" />
                          <span className="font-medium">{i.name}</span>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries"
                        className="col-span-full mt-2 flex items-center justify-between border-t border-border !p-3 pt-4 font-medium text-primary"
                      >
                        View all industries →
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {plainLinks.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild className="h-9 px-2.5 font-medium">
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Toggle menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {mainNav.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-3">
                    <Link href="/contact">Book a Strategy Call</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
