import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Phone Repair Pages
import SamsungRepair from "./pages/repair/SamsungRepair";
import GooglePixelRepair from "./pages/repair/GooglePixelRepair";
import MotorolaRepair from "./pages/repair/MotorolaRepair";
import OnePlusRepair from "./pages/repair/OnePlusRepair";
import LGRepair from "./pages/repair/LGRepair";
import HuaweiRepair from "./pages/repair/HuaweiRepair";
import XiaomiRepair from "./pages/repair/XiaomiRepair";
import OppoRepair from "./pages/repair/OppoRepair";
import NothingRepair from "./pages/repair/NothingRepair";
import InfinixRepair from "./pages/repair/InfinixRepair";
import TCLRepair from "./pages/repair/TCLRepair";
import ZTERepair from "./pages/repair/ZTERepair";
import BlackberryRepair from "./pages/repair/BlackberryRepair";
import SonyXperiaRepair from "./pages/repair/SonyXperiaRepair";
import VivoRepair from "./pages/repair/VivoRepair";

// Tablet Repair Pages
import SamsungGalaxyTabRepair from "./pages/repair/SamsungGalaxyTabRepair";

// Wearable Repair Pages
import AppleWatchRepair from "./pages/repair/AppleWatchRepair";

// MP3 Player Repair Pages
import IPodRepair from "./pages/repair/iPodRepair";

// Laptop Repair Pages
import MacBookRepair from "./pages/repair/MacBookRepair";
import SurfaceRepair from "./pages/repair/SurfaceRepair";

// Console Repair Pages
import NintendoSwitchRepair from "./pages/repair/NintendoSwitchRepair";
import PS5Repair from "./pages/repair/PS5Repair";
import PS4Repair from "./pages/repair/PS4Repair";
import XboxRepair from "./pages/repair/XboxRepair";
import SteamDeckRepair from "./pages/repair/SteamDeckRepair";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Phone Repair Pages */}
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
            
            {/* Wearable Repair Pages */}
            <Route path="/repair/apple-watch" element={<AppleWatchRepair />} />
            
            {/* MP3 Player Repair Pages */}
            <Route path="/repair/ipod" element={<IPodRepair />} />
            
            {/* Laptop Repair Pages */}
            <Route path="/repair/macbook" element={<MacBookRepair />} />
            <Route path="/repair/surface" element={<SurfaceRepair />} />
            
            {/* Console Repair Pages */}
            <Route path="/repair/nintendo-switch" element={<NintendoSwitchRepair />} />
            <Route path="/repair/ps5" element={<PS5Repair />} />
            <Route path="/repair/ps4" element={<PS4Repair />} />
            <Route path="/repair/xbox" element={<XboxRepair />} />
            <Route path="/repair/steam-deck" element={<SteamDeckRepair />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
