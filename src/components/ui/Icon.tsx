import {
  Workflow,
  Bot,
  GitBranch,
  TrendingUp,
  Users,
  LayoutGrid,
  ArrowRightLeft,
  Layers,
  Plug,
  Compass,
  HeartPulse,
  Building2,
  UserSearch,
  Factory,
  Briefcase,
  Cpu,
  Megaphone,
  Thermometer,
  Droplet,
  Zap,
  Home,
  Wrench,
  Sparkles,
  Car,
  Flower2,
  Smile,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Bot,
  GitBranch,
  TrendingUp,
  Users,
  LayoutGrid,
  ArrowRightLeft,
  Layers,
  Plug,
  Compass,
  HeartPulse,
  Building2,
  UserSearch,
  Factory,
  Briefcase,
  Cpu,
  Megaphone,
  Thermometer,
  Droplet,
  Zap,
  Home,
  Wrench,
  Sparkles,
  Car,
  Flower2,
  Smile,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const LucideIconComponent = iconMap[name] ?? Workflow;
  return <LucideIconComponent className={cn("size-5", className)} />;
}
