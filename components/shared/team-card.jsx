import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TeamCard({ member }) {
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .filter((part) => !["mr", "mrs", "ms", "miss", "dr", "eng"].includes(part.toLowerCase()))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="card-shine h-full border border-white/10 bg-slate-900/85 text-white shadow-soft backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900">
      <CardHeader className="gap-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-900 text-lg font-semibold text-cyan-300 shadow-glow">
            {initials}
          </div>
          <div className="space-y-2">
            <Badge variant="secondary" className="border border-white/10 bg-white/5 text-slate-300">{member.department}</Badge>
            <div className="text-sm font-medium text-cyan-400">{member.accent}</div>
          </div>
        </div>
        <div>
          <CardTitle className="text-white">{member.name}</CardTitle>
          <p className="mt-2 text-[15px] font-medium text-slate-300">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-slate-400">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
