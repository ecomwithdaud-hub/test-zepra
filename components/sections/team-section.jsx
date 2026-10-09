import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { TeamCard } from "@/components/shared/team-card";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/site";

export function TeamSection({ showHeader = true, showCta = false }) {
  return (
    <section className="section-shell">
      <div className="container">
        {showHeader ? (
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Leadership & Departments"
              title="A professional team structure designed for real agency execution."
              description="Zepra Tech is organized like a serious digital company, with clear leadership, delivery ownership, and growth-focused departments working together under one coordinated process."
            />
            {showCta ? (
              <Button asChild variant="outline" size="lg">
                <Link href="/team">
                  View the full team page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={`${member.role}-${member.name}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
