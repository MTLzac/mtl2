 import { Search, Wrench, HardDrive, DollarSign, ArrowRight, Phone } from "lucide-react";
 import { Card, CardContent } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import damagedXr from "@/assets/trade-in/bent-xr-damaged.png";
 // TODO: Replace with actual recovered image once re-uploaded
 import recoveredXr from "@/assets/trade-in/bent-xr-damaged.png";
 
 const QUOTE_URL = "https://shop.mobiletechlab.ca/pages/repair2";
 
 const steps = [
   {
     icon: Search,
     title: "Assessed the Damage",
     description: "Inspected the bent frame and shattered display to determine if data recovery was possible.",
   },
   {
     icon: Wrench,
     title: "Installed a Temp Screen",
     description: "Fitted a working screen temporarily to power on the device and access the data.",
   },
   {
     icon: HardDrive,
     title: "Backed Up Everything",
     description: "Transferred photos, contacts, and files to a secure backup before any further processing.",
   },
   {
     icon: DollarSign,
     title: "Paid Out & Recycled",
     description: "Confirmed trade-in eligibility, paid the customer same-day, and responsibly recycled the parts.",
   },
 ];
 
 export const TradeInCaseStudy = () => {
   return (
     <section className="py-16 md:py-20 bg-muted/30">
       <div className="container mx-auto px-4">
         {/* Header */}
         <div className="mb-10 text-center">
           <Badge variant="outline" className="mb-4 border-primary/40 bg-primary/10 text-primary">
             Real Customer Story
           </Badge>
           <h2 className="mb-4 text-3xl font-bold md:text-4xl">
             Data Rescued, Device Bought — Even in This Condition
           </h2>
           <p className="mx-auto max-w-2xl text-muted-foreground">
             This iPhone XR came to us completely bent and shattered—front and back. The customer just wanted their photos and contacts recovered, not a full repair. Here's how we helped.
           </p>
         </div>
 
         {/* Before/After Images */}
         <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-2">
           <figure className="group">
             <Card className="overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
               <div className="relative">
                 <Badge className="absolute left-3 top-3 z-10 bg-destructive text-destructive-foreground">
                   Before
                 </Badge>
                 <img
                   src={damagedXr}
                   alt="Severely bent and shattered iPhone XR on Mobile Tech Lab's glass display counter"
                   className="aspect-[4/5] w-full object-cover"
                 />
               </div>
               <CardContent className="p-4">
                 <figcaption className="text-sm text-muted-foreground">
                   Device arrived with a completely bent frame and shattered display — seemed beyond repair.
                 </figcaption>
               </CardContent>
             </Card>
           </figure>
 
           <figure className="group">
             <Card className="overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
               <div className="relative">
                 <Badge className="absolute left-3 top-3 z-10 bg-primary text-primary-foreground">
                   After
                 </Badge>
                 <img
                   src={recoveredXr}
                   alt="Same iPhone XR with temporary screen installed on workbench, powered on after successful data recovery"
                   className="aspect-[4/5] w-full object-cover"
                 />
               </div>
               <CardContent className="p-4">
                 <figcaption className="text-sm text-muted-foreground">
                   Temporary screen installed, device powered on, and all data successfully backed up at our workstation.
                 </figcaption>
               </CardContent>
             </Card>
           </figure>
         </div>
 
         {/* How We Did It Steps */}
         <div className="mx-auto max-w-4xl">
           <h3 className="mb-6 text-center text-xl font-semibold">How We Did It</h3>
           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
             {steps.map((step, index) => (
               <Card key={index} className="border-border/50 bg-card text-center">
                 <CardContent className="p-5">
                   <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                     {index + 1}
                   </div>
                   <div className="mx-auto mb-3 inline-flex rounded-full bg-primary/10 p-2 text-primary">
                     <step.icon className="h-5 w-5" />
                   </div>
                   <h4 className="mb-2 font-semibold text-sm">{step.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed">
                     {step.description}
                   </p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>
 
         {/* CTA Block */}
         <Card className="mx-auto mt-10 max-w-2xl border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
           <CardContent className="p-6 text-center md:p-8">
             <h3 className="mb-2 text-lg font-semibold">
               Think your device is too damaged to sell?
             </h3>
             <p className="mb-6 text-muted-foreground">
               You might be surprised. Get a free quote and find out what your device is worth.
             </p>
             <div className="flex flex-col justify-center gap-3 sm:flex-row">
               <Button className="gradient-primary" asChild>
                 <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                   Get a Quote
                   <ArrowRight className="ml-2 h-4 w-4" />
                 </a>
               </Button>
               <Button variant="outline" asChild>
                 <a href="tel:+12048691044">
                   <Phone className="mr-2 h-4 w-4" />
                   Call Us
                 </a>
               </Button>
             </div>
           </CardContent>
         </Card>
       </div>
     </section>
   );
 };