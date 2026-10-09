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
    <Card className="card-shine h-full border-slate-200/80 bg-white/90">
      <CardHeader className="gap-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-brand-navy to-primary text-lg font-semibold text-white shadow-glow">
            {initials}
          </div>
          <div className="space-y-2">
            <Badge variant="secondary">{member.department}</Badge>
            <div className="text-sm font-medium text-primary">{member.accent}</div>
          </div>
        </div>
        <div>
          <CardTitle>{member.name}</CardTitle>
          <p className="mt-2 text-[15px] font-medium text-slate-700">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-brand-slate">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
