import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({ project }) {
  return (
    <Card className="card-shine group h-full overflow-hidden border border-white/10 bg-slate-900/85 text-white shadow-soft backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:bg-slate-900 hover:shadow-2xl">
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <Badge variant="secondary" className="border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {project.category}
          </Badge>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
        </div>
        <CardTitle className="text-2xl text-white group-hover:text-cyan-300 transition-colors">{project.title}</CardTitle>
        <p className="text-[15px] leading-7 text-slate-300">{project.summary}</p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="rounded-[22px] border border-cyan-500/20 bg-cyan-950/30 p-4 text-sm leading-6 text-cyan-200">
          {project.outcome}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="border border-white/10 bg-white/5 text-slate-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
