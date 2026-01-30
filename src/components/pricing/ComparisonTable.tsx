import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";
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
import {
  REPAIR_COMPARISONS,
  DEVICE_TYPE_FILTERS,
  BRAND_FILTERS,
} from "@/lib/pricing-data";
import { cn } from "@/lib/utils";

export const ComparisonTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDeviceType, setSelectedDeviceType] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filteredRepairs = REPAIR_COMPARISONS.filter((repair) => {
    const matchesDevice =
      !selectedDeviceType || repair.deviceTypes.includes(selectedDeviceType);
    const matchesBrand =
      !selectedBrand || repair.brands.includes(selectedBrand);
    return matchesDevice && matchesBrand;
  });

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
              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Filter className="h-4 w-4" />
                  <span>Filter by:</span>
                </div>

                {/* Device Type Filters */}
                <div className="flex flex-wrap gap-2">
                  {DEVICE_TYPE_FILTERS.map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setSelectedDeviceType(
                          selectedDeviceType === type ? null : type
                        )
                      }
                      className={cn(
                        "rounded-full px-3 py-1 text-sm font-medium transition-colors",
                        selectedDeviceType === type
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <span className="text-muted-foreground">|</span>

                {/* Brand Filters */}
                <div className="flex flex-wrap gap-2">
                  {BRAND_FILTERS.map((brand) => (
                    <button
                      key={brand}
                      onClick={() =>
                        setSelectedBrand(selectedBrand === brand ? null : brand)
                      }
                      className={cn(
                        "rounded-full px-3 py-1 text-sm font-medium transition-colors",
                        selectedBrand === brand
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      )}
                    >
                      {brand}
                    </button>
                  ))}
                </div>

                {(selectedDeviceType || selectedBrand) && (
                  <button
                    onClick={() => {
                      setSelectedDeviceType(null);
                      setSelectedBrand(null);
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-hidden rounded-lg border border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-semibold">Repair Type</TableHead>
                      <TableHead className="font-semibold">Cost Driver</TableHead>
                      <TableHead className="font-semibold">Options Available</TableHead>
                      <TableHead className="font-semibold">Turnaround</TableHead>
                      <TableHead className="font-semibold">Warranty</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRepairs.map((repair) => (
                      <TableRow key={repair.repairType}>
                        <TableCell className="font-medium">
                          {repair.repairType}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {repair.costDriver}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {repair.tiers.join(", ")}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {repair.turnaround}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {repair.warranty}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="grid gap-4 md:hidden">
                {filteredRepairs.map((repair) => (
                  <Card key={repair.repairType} className="border-border/50">
                    <CardContent className="p-4 space-y-3">
                      <h3 className="font-semibold text-foreground">
                        {repair.repairType}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Cost driver:</span>
                          <span className="text-right text-foreground">
                            {repair.costDriver}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Options:</span>
                          <span className="text-right text-foreground">
                            {repair.tiers.join(", ")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Turnaround:</span>
                          <span className="text-right text-foreground">
                            {repair.turnaround}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Warranty:</span>
                          <span className="text-right text-foreground">
                            {repair.warranty}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredRepairs.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No repairs match the selected filters.
                </p>
              )}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};
