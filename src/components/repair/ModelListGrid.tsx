import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface ModelListGridProps {
  deviceName: string;
  models: string[];
  description?: string;
}

export const ModelListGrid = ({ deviceName, models, description }: ModelListGridProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {deviceName} Models We Repair
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {description || `We service all ${deviceName} models. Don't see yours listed? Contact us – we can likely help!`}
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {models.map((model, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-success" />
                {model}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
