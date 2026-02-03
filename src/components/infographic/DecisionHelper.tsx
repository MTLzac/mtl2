import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { RotateCcw } from "lucide-react";
import { QuickGuide } from "./QuickGuide";

type DeviceAge = "under2" | "2to4" | "over4" | null;
type IssueType = "screen" | "battery" | "backglass" | "other" | null;
type PowersOn = "yes" | "no" | null;

type Recommendation = "repair" | "depends" | "alternative";

interface RecommendationContent {
  title: string;
  explanation: string;
  rationale: string;
  actionLabel?: string;
  actionLink?: string;
}

const RECOMMENDATIONS: Record<Recommendation, RecommendationContent> = {
  repair: {
    title: "Repair often makes sense",
    explanation: "Based on your inputs, repairing this device is likely a practical choice.",
    rationale: "Industry data shows 45% of consumers prefer repair, and devices under 2 years old typically retain enough value to justify common repairs like screen or battery replacement.",
    actionLabel: "Get a Repair Quote",
    actionLink: "/contact",
  },
  depends: {
    title: "Repair may make sense depending on cost",
    explanation: "The decision depends on the specific repair cost relative to device value.",
    rationale: "For devices 2-4 years old, repairs like screen or battery replacement are often worthwhile if the cost is less than 50% of replacement value. Get a quote before deciding.",
    actionLabel: "Get a Repair Quote",
    actionLink: "/contact",
  },
  alternative: {
    title: "Data recovery and trade-in may be smarter",
    explanation: "Given the device age or condition, alternatives to repair may be more practical.",
    rationale: "For older devices or those that don't power on, repair costs often approach or exceed device value. Recovering important data and exploring trade-in options may be the better path.",
    actionLabel: "Explore Trade-In",
    actionLink: "/trade-in",
  }
};

export const DecisionHelper = () => {
  const [deviceAge, setDeviceAge] = useState<DeviceAge>(null);
  const [issueType, setIssueType] = useState<IssueType>(null);
  const [powersOn, setPowersOn] = useState<PowersOn>(null);
  const [showResult, setShowResult] = useState(false);

  const getRecommendation = (): Recommendation => {
    if (powersOn === "no") {
      return "alternative";
    }
    
    if (deviceAge === "over4") {
      return "alternative";
    }
    
    if (deviceAge === "under2" && powersOn === "yes") {
      return "repair";
    }
    
    if (deviceAge === "2to4" && (issueType === "screen" || issueType === "battery" || issueType === "backglass")) {
      return "depends";
    }
    
    if (deviceAge === "2to4" && issueType === "other") {
      return "alternative";
    }
    
    return "depends";
  };

  const canShowResult = deviceAge && issueType && powersOn;
  const recommendation = canShowResult ? RECOMMENDATIONS[getRecommendation()] : null;

  const handleReset = () => {
    setDeviceAge(null);
    setIssueType(null);
    setPowersOn(null);
    setShowResult(false);
  };

  return (
    <section className="py-12 md:py-16" aria-labelledby="decision-helper">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Brand accent left border to make this section pop */}
        <div className="border-l-4 border-primary pl-6">
          <h2 
            id="decision-helper" 
            className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4"
          >
            Interactive Decision Helper
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Answer three quick questions to get a general recommendation. This is educational guidance, 
            not a guarantee—every situation is different.
          </p>

          {/* Quick Guide */}
          <QuickGuide />

          <div className="bg-card rounded-lg border border-border p-6 md:p-8 space-y-8">
            {/* Question 1: Device Age */}
            <div>
              <h3 className="font-medium text-foreground mb-4">
                How old is your device?
              </h3>
              <RadioGroup
                value={deviceAge || ""}
                onValueChange={(value) => {
                  setDeviceAge(value as DeviceAge);
                  setShowResult(false);
                }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="under2" id="age-under2" />
                  <Label htmlFor="age-under2" className="cursor-pointer">Less than 2 years</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2to4" id="age-2to4" />
                  <Label htmlFor="age-2to4" className="cursor-pointer">2–4 years</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over4" id="age-over4" />
                  <Label htmlFor="age-over4" className="cursor-pointer">4+ years</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 2: Issue Type */}
            <div>
              <h3 className="font-medium text-foreground mb-4">
                What's the issue?
              </h3>
              <RadioGroup
                value={issueType || ""}
                onValueChange={(value) => {
                  setIssueType(value as IssueType);
                  setShowResult(false);
                }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="screen" id="issue-screen" />
                  <Label htmlFor="issue-screen" className="cursor-pointer">Screen</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="battery" id="issue-battery" />
                  <Label htmlFor="issue-battery" className="cursor-pointer">Battery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="backglass" id="issue-backglass" />
                  <Label htmlFor="issue-backglass" className="cursor-pointer">Back glass</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="issue-other" />
                  <Label htmlFor="issue-other" className="cursor-pointer">Other</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 3: Powers On */}
            <div>
              <h3 className="font-medium text-foreground mb-4">
                Does the device power on?
              </h3>
              <RadioGroup
                value={powersOn || ""}
                onValueChange={(value) => {
                  setPowersOn(value as PowersOn);
                  setShowResult(false);
                }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="power-yes" />
                  <Label htmlFor="power-yes" className="cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="power-no" />
                  <Label htmlFor="power-no" className="cursor-pointer">No</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              <Button
                onClick={() => setShowResult(true)}
                disabled={!canShowResult}
                className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                See Recommendation
              </Button>
              <Button
                variant="ghost"
                onClick={handleReset}
                className="flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>

            {/* Result - Using neutral background with brand accent */}
            {showResult && recommendation && (
              <div className="mt-6 p-6 bg-secondary rounded-lg border border-primary/20">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {recommendation.title}
                </h4>
                <p className="text-muted-foreground mb-4">
                  {recommendation.explanation}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  <strong>Why:</strong> {recommendation.rationale}
                </p>
                
                {recommendation.actionLabel && recommendation.actionLink && (
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={recommendation.actionLink}>
                      {recommendation.actionLabel}
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Decision Logic Documentation */}
        <details className="mt-6 text-sm text-muted-foreground">
          <summary className="cursor-pointer hover:text-foreground">
            View decision logic
          </summary>
          <pre className="mt-3 p-4 bg-muted rounded-lg overflow-x-auto text-xs">
{`Decision Logic:

IF powers_on = NO
  → "Data recovery and trade-in may be smarter"

IF device_age >= 4 years
  → "Data recovery and trade-in may be smarter"

IF device_age < 2 years AND powers_on = YES
  → "Repair often makes sense"

IF device_age = 2-4 years AND issue = screen|battery|back glass
  → "Repair may make sense depending on cost"

IF device_age = 2-4 years AND issue = other
  → "Data recovery and trade-in may be smarter"

DEFAULT
  → "Repair may make sense depending on cost"`}
          </pre>
        </details>
      </div>
    </section>
  );
};
