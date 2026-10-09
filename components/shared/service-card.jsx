import {
  ArrowUpRight,
  Bot,
  CircleDollarSign,
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

export function ServiceCard({ service, agencyLabel = "Agency service" }) {
  const Icon = serviceIconMap[service.icon] || Globe;
  const href = service.href || `/services/${service.slug}`;

  return (
    <Link
      href={href}
      aria-label={`View ${service.title} details`}
      className="group block h-full rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
    >
      <Card className="card-shine relative h-full overflow-hidden border-slate-200/80 bg-white/90 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/20 group-hover:shadow-premium">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-glow">
              <Icon className="h-6 w-6" />
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:border-brand-cyan/40 group-hover:text-brand-cyan">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <Badge variant="secondary" className="w-fit bg-slate-100/90">
            {agencyLabel}
          </Badge>
          <CardTitle className="pt-1 text-2xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[15px] leading-7 text-brand-slate">
            {service.summary || service.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-brand-cyan">
            View details
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
