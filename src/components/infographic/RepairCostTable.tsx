import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RepairCostRow {
  type: string;
  cost: string;
  context: string;
}

const REPAIR_COSTS: RepairCostRow[] = [
  {
    type: "Screen Repair",
    cost: "$200 Avg",
    context: "Varies by OLED/LCD technology",
  },
  {
    type: "Battery Replacement",
    cost: "$50 – $100",
    context: "Cheapest life-extension option",
  },
  {
    type: "Back Glass",
    cost: "$150+",
    context: "Labor intensive repair",
  },
  {
    type: "Charging Port",
    cost: "$75 – $150",
    context: "Common wear-and-tear issue",
  },
];

export const RepairCostTable = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="repair-costs">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 
          id="repair-costs" 
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"
        >
          What Repairs Commonly Cost
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Industry average pricing from third-party repair benchmarks. Actual costs vary by device model and damage severity.
        </p>
        
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-semibold text-foreground">Repair Type</TableHead>
                <TableHead className="font-semibold text-foreground">Estimated Cost</TableHead>
                <TableHead className="font-semibold text-foreground">Context</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {REPAIR_COSTS.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.type}</TableCell>
                  <TableCell className="font-bold text-primary">{row.cost}</TableCell>
                  <TableCell className="text-muted-foreground">{row.context}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4 italic">
          <strong>Note:</strong> These figures represent industry averages from sources like iFixit and Consumer Reports. 
          Actual repair cost varies by device model, damage severity, and parts availability.
        </p>
      </div>
    </section>
  );
};
