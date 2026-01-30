import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "@/components/PageLoader";

// Core pages - keep synchronous for instant first paint
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy-loaded Phone Repair Pages
const IPhoneRepair = lazy(() => import("./pages/repair/iPhoneRepair"));
const SamsungRepair = lazy(() => import("./pages/repair/SamsungRepair"));
const GooglePixelRepair = lazy(() => import("./pages/repair/GooglePixelRepair"));
const MotorolaRepair = lazy(() => import("./pages/repair/MotorolaRepair"));
const OnePlusRepair = lazy(() => import("./pages/repair/OnePlusRepair"));
const LGRepair = lazy(() => import("./pages/repair/LGRepair"));
const HuaweiRepair = lazy(() => import("./pages/repair/HuaweiRepair"));
const XiaomiRepair = lazy(() => import("./pages/repair/XiaomiRepair"));
const OppoRepair = lazy(() => import("./pages/repair/OppoRepair"));
const NothingRepair = lazy(() => import("./pages/repair/NothingRepair"));
const InfinixRepair = lazy(() => import("./pages/repair/InfinixRepair"));
const TCLRepair = lazy(() => import("./pages/repair/TCLRepair"));
const ZTERepair = lazy(() => import("./pages/repair/ZTERepair"));
const BlackberryRepair = lazy(() => import("./pages/repair/BlackberryRepair"));
const SonyXperiaRepair = lazy(() => import("./pages/repair/SonyXperiaRepair"));
const VivoRepair = lazy(() => import("./pages/repair/VivoRepair"));

// Lazy-loaded Tablet Repair Pages
const SamsungGalaxyTabRepair = lazy(() => import("./pages/repair/SamsungGalaxyTabRepair"));
const IPadRepair = lazy(() => import("./pages/repair/iPadRepair"));
const AmazonKindleRepair = lazy(() => import("./pages/repair/AmazonKindleRepair"));

// Lazy-loaded Wearable Repair Pages
const AppleWatchRepair = lazy(() => import("./pages/repair/AppleWatchRepair"));

// Lazy-loaded MP3 Player Repair Pages
const IPodRepair = lazy(() => import("./pages/repair/iPodRepair"));

// Lazy-loaded Laptop Repair Pages
const MacBookRepair = lazy(() => import("./pages/repair/MacBookRepair"));
const SurfaceRepair = lazy(() => import("./pages/repair/SurfaceRepair"));
const LaptopRepair = lazy(() => import("./pages/repair/LaptopRepair"));

// Lazy-loaded Service-Specific Pages
const WaterDamageRepair = lazy(() => import("./pages/repair/WaterDamageRepair"));

// Lazy-loaded Niche Repair Pages
const CatS62ChargingPortRepair = lazy(() => import("./pages/repair/CatS62ChargingPortRepair"));
const BlackMagicHDMIRepair = lazy(() => import("./pages/repair/BlackMagicHDMIRepair"));

// Lazy-loaded Console Repair Pages
const NintendoSwitchRepair = lazy(() => import("./pages/repair/NintendoSwitchRepair"));
const PS5Repair = lazy(() => import("./pages/repair/PS5Repair"));
const PS4Repair = lazy(() => import("./pages/repair/PS4Repair"));
const XboxRepair = lazy(() => import("./pages/repair/XboxRepair"));
const SteamDeckRepair = lazy(() => import("./pages/repair/SteamDeckRepair"));

// Lazy-loaded B2B / Business Page
const BusinessRepair = lazy(() => import("./pages/BusinessRepair"));

// Lazy-loaded Trade-In Page
const TradeIn = lazy(() => import("./pages/TradeIn"));

// Lazy-loaded Screen Quality Page
const ScreenQuality = lazy(() => import("./pages/ScreenQuality"));

// Lazy-loaded Contact Page
const Contact = lazy(() => import("./pages/Contact"));

// Lazy-loaded Draft Pages
const PDPv2Draft = lazy(() => import("./pages/draft/PDPv2Draft"));

// Lazy-loaded Location Pages
const BrandonRepair = lazy(() => import("./pages/location/BrandonRepair"));

// Lazy-loaded Informational Pages
const RepairPricing = lazy(() => import("./pages/RepairPricing"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Phone Repair Pages */}
              <Route path="/repair/iphone" element={<IPhoneRepair />} />
              <Route path="/repair/samsung" element={<SamsungRepair />} />
              <Route path="/repair/google-pixel" element={<GooglePixelRepair />} />
              <Route path="/repair/motorola" element={<MotorolaRepair />} />
              <Route path="/repair/oneplus" element={<OnePlusRepair />} />
              <Route path="/repair/lg" element={<LGRepair />} />
              <Route path="/repair/huawei" element={<HuaweiRepair />} />
              <Route path="/repair/xiaomi" element={<XiaomiRepair />} />
              <Route path="/repair/oppo" element={<OppoRepair />} />
              <Route path="/repair/nothing" element={<NothingRepair />} />
              <Route path="/repair/infinix" element={<InfinixRepair />} />
              <Route path="/repair/tcl" element={<TCLRepair />} />
              <Route path="/repair/zte" element={<ZTERepair />} />
              <Route path="/repair/blackberry" element={<BlackberryRepair />} />
              <Route path="/repair/sony-xperia" element={<SonyXperiaRepair />} />
              <Route path="/repair/vivo" element={<VivoRepair />} />
              
              {/* Tablet Repair Pages */}
              <Route path="/repair/samsung-galaxy-tab" element={<SamsungGalaxyTabRepair />} />
              <Route path="/repair/galaxy-tab" element={<SamsungGalaxyTabRepair />} />
              <Route path="/repair/ipad" element={<IPadRepair />} />
              <Route path="/repair/amazon-kindle-fire" element={<AmazonKindleRepair />} />

              {/* Wearable Repair Pages */}
              <Route path="/repair/apple-watch" element={<AppleWatchRepair />} />
              
              {/* MP3 Player Repair Pages */}
              <Route path="/repair/ipod" element={<IPodRepair />} />
              
              {/* Laptop Repair Pages */}
              <Route path="/repair/macbook" element={<MacBookRepair />} />
              <Route path="/repair/surface" element={<SurfaceRepair />} />
              <Route path="/repair/microsoft-surface" element={<SurfaceRepair />} />
              <Route path="/repair/laptop" element={<LaptopRepair />} />

              {/* Console Repair Pages */}
              <Route path="/repair/nintendo-switch" element={<NintendoSwitchRepair />} />
              <Route path="/repair/ps5" element={<PS5Repair />} />
              <Route path="/repair/playstation-5" element={<PS5Repair />} />
              <Route path="/repair/ps4" element={<PS4Repair />} />
              <Route path="/repair/playstation-4" element={<PS4Repair />} />
              <Route path="/repair/xbox" element={<XboxRepair />} />
              <Route path="/repair/steam-deck" element={<SteamDeckRepair />} />

              {/* Service-Specific Pages */}
              <Route path="/repair/water-damage" element={<WaterDamageRepair />} />

              {/* Niche Repair Pages */}
              <Route path="/repair/cat-s62-charging-port" element={<CatS62ChargingPortRepair />} />
              <Route path="/repair/blackmagic-hdmi" element={<BlackMagicHDMIRepair />} />

              {/* B2B / Business Page */}
              <Route path="/business" element={<BusinessRepair />} />
              <Route path="/b2b" element={<BusinessRepair />} />

              {/* Trade-In Page */}
              <Route path="/trade-in" element={<TradeIn />} />

              {/* Screen Quality Page */}
              <Route path="/screen-quality" element={<ScreenQuality />} />
              
              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />

              {/* Location Pages */}
              <Route path="/location/brandon" element={<BrandonRepair />} />

              {/* Informational Pages */}
              <Route path="/repair-pricing" element={<RepairPricing />} />

              {/* Draft Pages - Hidden from production */}
              <Route path="/pdp-v2-draft" element={<PDPv2Draft />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
