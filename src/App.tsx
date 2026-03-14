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

// Lazy-loaded Repair Hub
const RepairHub = lazy(() => import("./pages/repair/RepairHub"));

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
const ConsoleRepairHub = lazy(() => import("./pages/repair/ConsoleRepairHub"));
const NintendoSwitchRepair = lazy(() => import("./pages/repair/NintendoSwitchRepair"));
const PS5Repair = lazy(() => import("./pages/repair/PS5Repair"));
const PS4Repair = lazy(() => import("./pages/repair/PS4Repair"));
const XboxRepair = lazy(() => import("./pages/repair/XboxRepair"));
const SteamDeckRepair = lazy(() => import("./pages/repair/SteamDeckRepair"));
const ControllerRepair = lazy(() => import("./pages/repair/ControllerRepair"));

// Lazy-loaded B2B / Business Page
const BusinessRepair = lazy(() => import("./pages/BusinessRepair"));

// Lazy-loaded Trade-In Page
const TradeIn = lazy(() => import("./pages/TradeIn"));

// Lazy-loaded Screen Quality Page
const ScreenQuality = lazy(() => import("./pages/ScreenQuality"));

// Lazy-loaded Screen Insurance Page
const ScreenInsurance = lazy(() => import("./pages/ScreenInsurance"));

// Lazy-loaded Contact Page
const Contact = lazy(() => import("./pages/Contact"));

// Lazy-loaded Draft Pages
const PDPv2Draft = lazy(() => import("./pages/draft/PDPv2Draft"));
const SamsungRepairDraft = lazy(() => import("./pages/draft/SamsungRepairDraft"));

// Lazy-loaded Location Pages
const WinnipegLocation = lazy(() => import("./pages/location/WinnipegLocation"));
const ThompsonLocation = lazy(() => import("./pages/location/ThompsonLocation"));
// Lazy-loaded Informational Pages
const RepairPricing = lazy(() => import("./pages/RepairPricing"));
const RepairOrReplace = lazy(() => import("./pages/RepairOrReplace"));

// Lazy-loaded Embed Pages
const RepairStatsEmbed = lazy(() => import("./pages/embed/RepairStatsEmbed"));

// Lazy-loaded Device Hub Pages
const DeviceHubIndex = lazy(() => import("./pages/device/DeviceHubIndex"));
const IPhoneXRDevice = lazy(() => import("./pages/device/iPhoneXR"));
const IPhoneXSDevice = lazy(() => import("./pages/device/iPhoneXS"));
const IPhoneXSMaxDevice = lazy(() => import("./pages/device/iPhoneXSMax"));
const IPhone11Device = lazy(() => import("./pages/device/iPhone11"));
const IPhone11ProDevice = lazy(() => import("./pages/device/iPhone11Pro"));

// Lazy-loaded Service Area Pages
const ServiceAreasIndex = lazy(() => import("./pages/service-area/ServiceAreasIndex"));
const SteinbachServiceArea = lazy(() => import("./pages/service-area/SteinbachServiceArea"));
const PortageLaPrairieServiceArea = lazy(() => import("./pages/service-area/PortageLaPrairieServiceArea"));
const BrandonServiceArea = lazy(() => import("./pages/service-area/BrandonServiceArea"));
const SelkirkServiceArea = lazy(() => import("./pages/service-area/SelkirkServiceArea"));
 const ThePasServiceArea = lazy(() => import("./pages/service-area/ThePasServiceArea"));

// Lazy-loaded Article Pages
const PhoneNotCharging = lazy(() => import("./pages/phone-problems/PhoneNotCharging"));
const IPhoneNotCharging = lazy(() => import("./pages/phone-problems/IPhoneNotCharging"));
const SamsungNotCharging = lazy(() => import("./pages/phone-problems/SamsungNotCharging"));
const ChargingPortDamage = lazy(() => import("./pages/phone-problems/ChargingPortDamage"));
const SlowCharging = lazy(() => import("./pages/phone-problems/SlowCharging"));

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
              
              {/* Repair Hub Page */}
              <Route path="/repairs" element={<RepairHub />} />
              
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
              <Route path="/consoles" element={<ConsoleRepairHub />} />
              <Route path="/repair/nintendo-switch" element={<NintendoSwitchRepair />} />
              <Route path="/repair/ps5" element={<PS5Repair />} />
              <Route path="/repair/playstation-5" element={<PS5Repair />} />
              <Route path="/repair/ps4" element={<PS4Repair />} />
              <Route path="/repair/playstation-4" element={<PS4Repair />} />
              <Route path="/repair/xbox" element={<XboxRepair />} />
              <Route path="/repair/steam-deck" element={<SteamDeckRepair />} />
              <Route path="/repair/controller-repair-winnipeg" element={<ControllerRepair />} />

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

              {/* Screen Insurance Page */}
              <Route path="/screen-insurance" element={<ScreenInsurance />} />
              
              {/* Contact Page */}
              <Route path="/contact" element={<Contact />} />

              {/* Location Pages */}
              <Route path="/location/winnipeg" element={<WinnipegLocation />} />
              <Route path="/location/thompson" element={<ThompsonLocation />} />
              {/* Legacy location routes */}
              <Route path="/locations/winnipeg" element={<WinnipegLocation />} />
              <Route path="/locations/thompson" element={<ThompsonLocation />} />

              {/* Informational Pages */}
              <Route path="/repair-pricing" element={<RepairPricing />} />
              <Route path="/repair-or-replace-device-canada" element={<RepairOrReplace />} />

              {/* Embed Pages */}
              <Route path="/embed/repair-or-replace-stats" element={<RepairStatsEmbed />} />

              {/* Device Hub Pages */}
              <Route path="/devices" element={<DeviceHubIndex />} />
              <Route path="/devices/iphone-xr" element={<IPhoneXRDevice />} />
              <Route path="/devices/iphone-xs" element={<IPhoneXSDevice />} />
              <Route path="/devices/iphone-xs-max" element={<IPhoneXSMaxDevice />} />
              <Route path="/devices/iphone-11" element={<IPhone11Device />} />
              <Route path="/devices/iphone-11-pro" element={<IPhone11ProDevice />} />

              {/* Service Area Pages */}
              <Route path="/service-areas" element={<ServiceAreasIndex />} />
              <Route path="/service-area/steinbach" element={<SteinbachServiceArea />} />
              <Route path="/service-area/portage-la-prairie" element={<PortageLaPrairieServiceArea />} />
              <Route path="/service-area/brandon" element={<BrandonServiceArea />} />
              <Route path="/service-area/selkirk" element={<SelkirkServiceArea />} />
               <Route path="/service-area/the-pas" element={<ThePasServiceArea />} />
              {/* Legacy redirect */}
              <Route path="/location/brandon" element={<BrandonServiceArea />} />

              {/* Article Pages */}
              <Route path="/phone-problems/phone-not-charging" element={<PhoneNotCharging />} />
              <Route path="/phone-problems/phone-not-charging/iphone" element={<IPhoneNotCharging />} />
              <Route path="/phone-problems/phone-not-charging/samsung" element={<SamsungNotCharging />} />
              <Route path="/phone-problems/phone-not-charging/charging-port" element={<ChargingPortDamage />} />

              {/* Draft Pages - Hidden from production */}
              <Route path="/pdp-v2-draft" element={<PDPv2Draft />} />
              <Route path="/samsung-repair-draft" element={<SamsungRepairDraft />} />
              
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
