"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/Container";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, CalendarCheck2, MessageSquareText, PhoneMissed, Receipt } from "lucide-react";

const flowNodes = [
  { icon: PhoneMissed, label: "Missed Call Comes In" },
  { icon: MessageSquareText, label: "AI Agent Texts Back" },
  { icon: CalendarCheck2, label: "Job Gets Booked" },
  { icon: Receipt, label: "Invoice Sent & Paid" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <Spotlight className="-top-32 left-0 md:left-40 md:-top-20" fill="var(--primary)" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Revenue &amp; Operations Automation Partner</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 max-w-4xl text-4xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Every missed call has a cost.
            <br />
            <span className="text-gradient">We build the system that answers it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-foreground/60 text-balance"
          >
            Your crew shouldn&apos;t lose the afternoon to paperwork. Converge automates
            follow-up, scheduling, and invoicing so your team spends its hours on the
            job — not the phone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Book a Strategy Call <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-xs uppercase tracking-widest text-foreground/40"
          >
            Built for HVAC, plumbing, auto, dental, and med-spa teams who&apos;d rather build
            systems than hire more admin
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass rounded-2xl border border-border p-3 shadow-2xl sm:p-4">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-foreground/40">dispatch.converge.ai</span>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-4">
                {flowNodes.map((node, i) => (
                  <div key={node.label} className="relative flex flex-col items-center gap-3 text-center">
                    {i < flowNodes.length - 1 && (
                      <div className="absolute left-1/2 top-6 hidden h-px w-full bg-gradient-to-r from-primary/40 to-accent/40 sm:block" />
                    )}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                      className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-muted"
                    >
                      <node.icon className="size-5 text-primary" />
                    </motion.div>
                    <span className="text-xs font-medium text-foreground/70 sm:text-sm">
                      {node.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
