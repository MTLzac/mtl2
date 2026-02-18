import { LucideIcon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CommonIssue {
  icon: LucideIcon;
  title: string;
  symptoms: string[];
  solution: string;
  ctaText: string;
  ctaHref?: string;
  image?: string;
  imageAlt?: string;
}

interface CommonIssuesSectionProps {
  issues: CommonIssue[];
}

export const CommonIssuesSection = ({ issues }: CommonIssuesSectionProps) => {
  return (
    <section id="common-issues" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Common Issues We Fix
        </h2>
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {issues.map((issue, index) => (
            <div
              key={issue.title}
              className={`rounded-xl border border-border p-6 md:p-8 ${
                index % 2 === 0 ? "bg-secondary/30" : "bg-card"
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                {issue.image && (
                  <div className="shrink-0 overflow-hidden rounded-lg md:w-64">
                    <img
                      src={issue.image}
                      alt={issue.imageAlt || issue.title}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {!issue.image && (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <issue.icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold">{issue.title}</h3>
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">
                      Symptoms
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {issue.symptoms.map((symptom) => (
                        <li
                          key={symptom}
                          className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                        >
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-muted-foreground">{issue.solution}</p>
                  <Button asChild variant="soft" className="mt-2">
                    <a href="https://mobiletechlab.ca/contact">
                      {issue.ctaText}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
