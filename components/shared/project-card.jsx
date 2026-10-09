import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }) {
  return (
    <Card className="card-shine group h-full overflow-hidden border-slate-200/80 bg-white/90 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-premium">
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="secondary" className="bg-primary/[0.08] text-primary">
            {project.category}
          </Badge>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <p className="text-[15px] leading-7 text-brand-slate">{project.summary}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-[22px] border border-primary/10 bg-primary/5 p-4 text-sm leading-6 text-slate-700">
          {project.outcome}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-slate-100">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
