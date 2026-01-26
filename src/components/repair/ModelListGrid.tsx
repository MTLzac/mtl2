import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Tablet, TabletSmartphone, Monitor, Layers, ChevronDown, ChevronUp } from "lucide-react";

export interface ModelCategory {
  title: string;
  models: string[];
  description: string;
}

interface ModelListGridProps {
  deviceName: string;
  models: string[];
  description?: string;
  categories?: ModelCategory[];
  initialVisibleCount?: number;
}

const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";

const CATEGORY_ICONS = [Tablet, TabletSmartphone, Monitor, Layers];

export const ModelListGrid = ({ 
  deviceName, 
  models, 
  description, 
  categories,
  initialVisibleCount = 12 
}: ModelListGridProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // If categories are provided, render the card-based layout
  if (categories && categories.length > 0) {
    return (
      <section id="models" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              All {deviceName} Models We Repair in Winnipeg
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We specialize in the unique architecture of each {deviceName} generation
            </p>
          </div>
          
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
            {categories.map((category, index) => {
              const IconComponent = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
              return (
                <Card 
                  key={index} 
                  className="group border-border/50 bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <CardHeader className="pb-3 text-center">
                    <div className="mb-2 inline-flex rounded-full bg-primary/10 p-3 text-primary mx-auto">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-center">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {category.models.slice(0, 3).map((model, modelIndex) => (
                        <Badge 
                          key={modelIndex} 
                          variant="secondary" 
                          className="text-xs font-normal"
                        >
                          {model}
                        </Badge>
                      ))}
                      {category.models.length > 3 && (
                        <Badge variant="outline" className="text-xs font-normal">
                          +{category.models.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Collapsible badge-based layout
  const visibleModels = isExpanded ? models : models.slice(0, initialVisibleCount);
  const hasMoreModels = models.length > initialVisibleCount;
  const hiddenCount = models.length - initialVisibleCount;

  return (
    <section id="models" className="py-16 md:py-20">
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
            {visibleModels.map((model, index) => (
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
          
          {hasMoreModels && (
            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Show {hiddenCount} More Models
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
