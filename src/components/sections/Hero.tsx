"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Mail, MessageSquare, Zap } from "lucide-react";

const flowNodes = [
  { icon: Zap, label: "New Lead Captured", color: "text-electric" },
  { icon: MessageSquare, label: "AI Qualifies & Responds", color: "text-violet" },
  { icon: Mail, label: "Follow-up Sequence Starts", color: "text-electric" },
  { icon: CheckCircle2, label: "Rep Notified — Ready to Close", color: "text-violet" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] size-[600px] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px] dark:bg-electric/10" />
      <div className="pointer-events-none absolute right-[-10%] top-[20%] size-[400px] rounded-full bg-violet/20 blur-[120px] dark:bg-violet/10" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Revenue Automation Partner</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 max-w-4xl text-4xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Your CRM should work for you.
            <br />
            <span className="text-gradient">Not the other way around.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-foreground/60 text-balance"
          >
            We automate CRM workflows with AI agents, integrations, and custom automation
            so your sales team spends less time on admin and more time closing deals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg" showArrow>
              Book a Strategy Call
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Case Studies
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-xs uppercase tracking-widest text-foreground/40"
          >
            Trusted by RevOps &amp; sales leaders at growing B2B teams
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass rounded-2xl border border-border-subtle p-3 shadow-2xl sm:p-4">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-foreground/40">pipeline.converge.ai</span>
            </div>
            <div className="rounded-xl border border-border-subtle bg-surface p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-4">
                {flowNodes.map((node, i) => (
                  <div key={node.label} className="relative flex flex-col items-center gap-3 text-center">
                    {i < flowNodes.length - 1 && (
                      <div className="absolute left-1/2 top-6 hidden h-px w-full bg-gradient-to-r from-electric/40 to-violet/40 sm:block" />
                    )}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                      className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border-subtle bg-surface-muted"
                    >
                      <node.icon className={`size-5 ${node.color}`} />
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
