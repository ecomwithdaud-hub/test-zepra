import {
  ArrowUpRight,
  Bot,
  CircleDollarSign,
  Cpu,
  Film,
  Globe,
  Headphones,
  MapPin,
  Megaphone,
  Palette,
  PenTool,
  Search,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/TiltCard";

export const serviceIconMap = {
  Globe,
  Bot,
  Megaphone,
  MapPin,
  CircleDollarSign,
  Search,
  PenTool,
  ShoppingCart,
  Palette,
  Film,
  Headphones,
};

const capabilityProfiles = [
  { scalability: 98, performance: 99, roi: 96 },
  { scalability: 96, performance: 97, roi: 98 },
  { scalability: 95, performance: 96, roi: 99 },
  { scalability: 94, performance: 98, roi: 95 },
];

export function ServiceCard({
  service,
  index = 0,
  agencyLabel = "Agency service",
}) {
  const Icon = serviceIconMap[service.icon] || Globe;
  const href = service.href || `/services/${service.slug}`;
  const engineStack =
    service.technologies?.slice(0, 3).join(" / ") || "Next.js / Cloud / Edge";
  const metrics = capabilityProfiles[index % capabilityProfiles.length];

  return (
    <TiltCard cursorLabel="EXPLORE" className="h-full rounded-[28px]">
      <Link
        href={href}
        data-cursor="EXPLORE"
        aria-label={`View ${service.title} details`}
        className="group block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
      >
        <Card className="card-shine relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-slate-900/80 text-white backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-slate-900/90 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-glow transition-transform duration-300 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-slate-950">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-slate-300">
                  SERVICE // {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="w-fit border-white/10 bg-white/5 text-slate-300">
                {agencyLabel}
              </Badge>
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-300">
                <Cpu className="h-3 w-3 text-cyan-400" />
                Engine: {engineStack}
              </span>
            </div>

            <CardTitle className="pt-2 text-2xl text-white group-hover:text-cyan-300 transition-colors">{service.title}</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-1 flex-col justify-between space-y-5">
            <p className="text-[15px] leading-7 text-slate-300">
              {service.summary || service.shortDescription}
            </p>

            {/* DevCrafter-Inspired Live Capability Bars */}
            <div className="space-y-2.5 rounded-2xl border border-white/10 bg-slate-950/60 p-3.5">
              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Scalability</span>
                  <span className="text-white font-mono">{metrics.scalability}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-blue to-cyan-400 transition-all duration-500"
                    style={{ width: `${metrics.scalability}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Performance</span>
                  <span className="text-white font-mono">{metrics.performance}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                    style={{ width: `${metrics.performance}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>ROI Impact</span>
                  <span className="text-white font-mono">{metrics.roi}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-500"
                    style={{ width: `${metrics.roi}%` }}
                  />
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-cyan-400 transition-colors group-hover:text-cyan-300">
              Explore Architecture & Deliverables
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </TiltCard>
  );
}
