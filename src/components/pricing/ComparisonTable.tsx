import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { REPAIR_COMPARISONS } from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

export const ComparisonTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Common Repairs & What Changes the Cost
              </h2>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="gap-2">
                  {isOpen ? "Hide" : "Show"} Comparison Table
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="space-y-6">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-hidden rounded-lg border border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Repair Type</TableHead>
                      <TableHead className="font-semibold">Typical Range (CAD)</TableHead>
                      <TableHead className="font-semibold">What Changes the Cost</TableHead>
                      <TableHead className="font-semibold">Turnaround</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {REPAIR_COMPARISONS.map((repair) => (
                      <TableRow key={repair.repairType}>
                        <TableCell className="font-medium">
                          {repair.repairType}
                        </TableCell>
                        <TableCell className="text-foreground font-medium">
                          {repair.typicalRange}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {repair.costDriver}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {repair.turnaround}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="grid gap-4 md:hidden">
                {REPAIR_COMPARISONS.map((repair) => (
                  <Card key={repair.repairType} className="border-border/50">
                    <CardContent className="p-4 space-y-3">
                      <h3 className="font-semibold text-foreground">
                        {repair.repairType}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between gap-3">
                          <span className="text-muted-foreground">Typical range:</span>
                          <span className="text-right text-foreground font-medium">
                            {repair.typicalRange}
                          </span>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span className="text-muted-foreground">Cost driver:</span>
                          <span className="text-right text-foreground">
                            {repair.costDriver}
                          </span>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span className="text-muted-foreground">Turnaround:</span>
                          <span className="text-right text-foreground">
                            {repair.turnaround}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-sm text-muted-foreground italic">
                Items marked "Quote required" vary too widely to publish a useful range. Use the Get Repair Quote button for an exact answer in 1–2 business hours on any device.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};
