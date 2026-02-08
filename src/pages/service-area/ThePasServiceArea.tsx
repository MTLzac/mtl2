 import { Helmet } from "react-helmet-async";
 import { Link } from "react-router-dom";
 import { Phone, ExternalLink, MapPin, Smartphone, Tablet, Gamepad2, ClipboardList, Package, Wrench, Truck } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import { Header } from "@/components/layout/Header";
 import { Footer } from "@/components/layout/Footer";
 import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
 
 const REPAIR_WIDGET_URL = "https://shop.mobiletechlab.ca/pages/repair2";
 const PHONE_NUMBER = "+12045009757";
 const PHONE_FORMATTED = "(204) 500-9757";
 
 const mailInSteps = [
   {
     icon: ClipboardList,
     step: 1,
     title: "Request a Quote",
     description: "Tell us about your device and what's wrong online or by phone.",
   },
   {
     icon: Package,
     step: 2,
     title: "Get Your Prepaid Label",
     description: "We email you a prepaid shipping label for Canada Post.",
   },
   {
     icon: Wrench,
     step: 3,
     title: "We Repair It",
     description: "Send your device securely to our Winnipeg repair lab.",
   },
   {
     icon: Truck,
     step: 4,
     title: "Get It Back",
     description: "We repair your device, bill you, and send it back promptly.",
   },
 ];
 
 const deviceCategories = [
   {
     icon: Smartphone,
     title: "iPhones",
     link: "/repair/iphone",
   },
   {
     icon: Smartphone,
     title: "Samsung & Android",
     link: "/repair/samsung",
   },
   {
     icon: Tablet,
     title: "Tablets & iPads",
     link: "/repair/ipad",
   },
   {
     icon: Gamepad2,
     title: "Game Consoles",
     link: "/repair/ps5",
   },
 ];
 
 const breadcrumbs = [
   { name: "Home", url: "https://mobiletechlab.ca/" },
   { name: "Service Areas", url: "https://mobiletechlab.ca/service-areas" },
   { name: "The Pas", url: "https://mobiletechlab.ca/service-area/the-pas" },
 ];
 
 const ThePasServiceArea = () => {
   return (
     <>
       <Helmet>
         <title>Phone Repair in The Pas, MB | Mobile Tech Lab (via Thompson or Mail-In)</title>
         <meta
           name="description"
           content="Need phone repair in The Pas? Visit our Thompson location during your trip or use our fast prepaid mail-in service. Trusted by Manitobans for expert device repair."
         />
         <link rel="canonical" href="https://mobiletechlab.ca/service-area/the-pas" />
 
         {/* LocalBusiness Schema with areaServed */}
         <script type="application/ld+json">
           {JSON.stringify({
             "@context": "https://schema.org",
             "@type": "LocalBusiness",
             name: "Mobile Tech Lab",
             description:
               "Professional phone, tablet, and console repair for The Pas, Manitoba. Visit our Thompson location or use our fast mail-in service.",
             url: "https://mobiletechlab.ca",
             telephone: "+1-204-500-9757",
             areaServed: [
               {
                 "@type": "City",
                 name: "The Pas",
                 containedInPlace: {
                   "@type": "AdministrativeArea",
                   name: "Manitoba",
                 },
               },
             ],
             priceRange: "$$",
           })}
         </script>
       </Helmet>
 
       <BreadcrumbSchema items={breadcrumbs} />
 
       <Header />
 
       <main className="min-h-screen bg-background">
         {/* Hero Section */}
         <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
           <div className="container mx-auto px-4">
             <div className="mx-auto max-w-3xl text-center">
               <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                 Phone Repair in The Pas, MB – Fast In-Person or Mail-In Service
               </h1>
               <p className="text-lg text-muted-foreground">
                 Mobile Tech Lab proudly serves The Pas, MB with two convenient repair options.
                 Many customers from The Pas stop by our Thompson location while in town for
                 work, errands, or shopping. Prefer not to make the trip? We also offer a fast,
                 secure mail-in phone repair service with a prepaid shipping label.
               </p>
             </div>
           </div>
         </section>
 
         {/* In-Person Thompson Section */}
         <section className="py-12 md:py-16">
           <div className="container mx-auto px-4">
             <div className="mx-auto max-w-3xl">
               <div className="mb-6 flex items-center gap-3">
                 <div className="rounded-full bg-primary/10 p-3">
                   <MapPin className="h-6 w-6 text-primary" />
                 </div>
                 <h2 className="text-2xl font-bold md:text-3xl">
                   In-Person Repair When You're Headed to Thompson
                 </h2>
               </div>
                <p className="mb-6 text-muted-foreground">
                  If you're planning a trip to Thompson for work, shopping, or errands, consider
                  bundling your device repair into the visit. Many customers from{" "}
                  <a href="https://townofthepas.ca/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Pas</a>{" "}
                  and surrounding communities do exactly that—drop off your phone in the morning and
                  pick it up the same day. Same-day repairs are often possible when parts are in
                  stock.
                </p>
               <Button asChild>
                 <Link to="/location/thompson">
                   Check our Thompson store hours and location here
                   <ExternalLink className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
             </div>
           </div>
         </section>
 
         {/* Mail-In Section */}
         <section className="bg-muted/30 py-12 md:py-16">
           <div className="container mx-auto px-4">
             <div className="mb-10 text-center">
               <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                 Mail-In Phone Repair from The Pas
               </h2>
               <p className="mx-auto max-w-2xl text-muted-foreground">
                 Don't want to make the drive? Our mail-in service is fast, secure, and
                 convenient. Most Manitoba shipments arrive within 1–2 business days.
               </p>
             </div>
 
             <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
               {mailInSteps.map((step) => (
                 <Card
                   key={step.step}
                   className="relative border-border/50 pt-4 text-center transition-all hover:border-primary/50 hover:shadow-lg"
                 >
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                     Step {step.step}
                   </div>
                   <CardContent className="p-6">
                     <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
                       <step.icon className="h-6 w-6" />
                     </div>
                     <h3 className="mb-2 font-semibold">{step.title}</h3>
                     <p className="text-sm text-muted-foreground">{step.description}</p>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
         </section>
 
         {/* Devices We Repair Section */}
         <section className="py-12 md:py-16">
           <div className="container mx-auto px-4">
             <div className="mb-8 text-center">
               <h2 className="mb-3 text-2xl font-bold md:text-3xl">What Devices Do We Repair?</h2>
               <p className="mx-auto max-w-2xl text-muted-foreground">
                 We fix a wide range of devices—phones, tablets, laptops, and gaming consoles.
               </p>
             </div>
 
             <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
               {deviceCategories.map((category) => (
                 <Link
                   key={category.title}
                   to={category.link}
                   className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg"
                 >
                   <div className="mb-3 rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                     <category.icon className="h-6 w-6" />
                   </div>
                   <span className="font-medium group-hover:text-primary">{category.title}</span>
                 </Link>
               ))}
             </div>
           </div>
         </section>
 
         {/* CTA Section */}
         <section className="bg-primary/5 py-12 md:py-16">
           <div className="container mx-auto px-4">
             <div className="mx-auto max-w-2xl text-center">
               <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                 Ready to Get Your Device Fixed?
               </h2>
               <p className="mb-6 text-muted-foreground">
                 Whether you visit our Thompson store or use our mail-in service, we're here to
                 help. Get a free quote today.
               </p>
               <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                 <Button size="lg" asChild>
                   <a href={`tel:${PHONE_NUMBER}`}>
                     <Phone className="mr-2 h-5 w-5" />
                     Call {PHONE_FORMATTED}
                   </a>
                 </Button>
                 <Button size="lg" variant="outline" asChild>
                   <a href={REPAIR_WIDGET_URL} target="_blank" rel="noopener noreferrer">
                     Get a Quote Online
                     <ExternalLink className="ml-2 h-4 w-4" />
                   </a>
                 </Button>
               </div>
             </div>
           </div>
         </section>
       </main>
 
       <Footer />
     </>
   );
 };
 
 export default ThePasServiceArea;