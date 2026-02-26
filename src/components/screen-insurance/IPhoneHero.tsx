import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ShieldCheck,
  Instagram,
  Music,
  Map as MapIcon,
  Compass,
  Camera,
  Mail,
  Phone,
  MessageSquare,
  LayoutGrid,
  Wrench,
} from "lucide-react";

type Stage = "pristine" | "cracked" | "protected" | "repaired";

const AppIcon = ({
  name,
  color,
  icon: Icon,
}: {
  name: string;
  color: string;
  icon: React.ElementType;
}) => (
  <div className="flex flex-col items-center gap-1">
    <div
      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[13px] ${color} flex items-center justify-center shadow-lg relative overflow-hidden transition-transform active:scale-90`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      <Icon size={22} className="text-white drop-shadow-md" />
    </div>
    <span className="text-[10px] text-white/90 font-semibold tracking-tight">
      {name}
    </span>
  </div>
);

export function IPhoneHero() {
  const [stage, setStage] = useState<Stage>("pristine");
  const [glint, setGlint] = useState(false);

  useEffect(() => {
    const crackTimer = setTimeout(() => setStage("cracked"), 1200);
    const protectTimer = setTimeout(() => setStage("protected"), 2200);
    return () => {
      clearTimeout(crackTimer);
      clearTimeout(protectTimer);
    };
  }, []);

  const handleRepair = () => {
    setGlint(true);
    setTimeout(() => {
      setStage("repaired");
      setGlint(false);
    }, 400);
  };

  const showCrack = stage === "cracked" || stage === "protected";
  const showNotification = stage === "protected" || stage === "repaired";

  const glowColor = (() => {
    switch (stage) {
      case "cracked":
        return "rgba(239, 68, 68, 0.15)";
      case "protected":
      case "repaired":
        return "rgba(34, 197, 94, 0.12)";
      default:
        return "rgba(100, 80, 160, 0.08)";
    }
  })();

  return (
    <div
      className="flex-1 flex items-center justify-center relative w-full max-h-[800px]"
      style={{ perspective: "1200px" }}
    >
      {/* Contact shadow */}
      <div className="absolute bottom-4 w-64 h-8 bg-black/10 blur-[40px] rounded-[100%] pointer-events-none" />

      {/* Adaptive Studio Rim Lighting */}
      <motion.div
        animate={{ backgroundColor: glowColor }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 blur-[100px] rounded-full pointer-events-none scale-125"
        style={{ opacity: 0.6 }}
      />

      {/* CHASSIS */}
      <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[37/76] rounded-[60px] p-[3px] bg-gradient-to-b from-[#4a4458] via-[#1e1a26] to-[#0f0d14] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        {/* Specular Sweep */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-[60px] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-[45] pointer-events-none"
        />

        {/* Edge highlight */}
        <div className="absolute inset-0 rounded-[60px] border-[0.5px] border-white/20 pointer-events-none z-[46]" />

        {/* Inner display assembly */}
        <div className="w-full h-full bg-black rounded-[57px] p-[10px] relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] flex flex-col">
          {/* Display Panel */}
          <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-black flex flex-col">
            {/* Wallpaper */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a263d] via-[#12101a] to-black" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none z-20" />

            {/* Repair Glint — white specular sweep on click */}
            <AnimatePresence>
              {glint && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 z-[55] bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 pointer-events-none"
                />
              )}
            </AnimatePresence>

            {/* CRACK OVERLAY — variable stroke realism */}
            <AnimatePresence>
              {showCrack && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.6 } }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 z-30 pointer-events-none"
                >
                  <svg
                    viewBox="0 0 340 700"
                    className="w-full h-full fill-none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M40,0 L110,140 L90,310 L210,440 L160,700"
                      className="stroke-white/40"
                      strokeWidth="2.0"
                      strokeLinecap="round"
                      style={{ filter: "drop-shadow(0 0 3px rgba(255,255,255,0.2))" }}
                    />
                    <path d="M0,180 L110,140 L340,90" className="stroke-white/35" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M210,440 L340,520" className="stroke-white/30" strokeWidth="1.0" />
                    <path d="M90,310 L10,380" className="stroke-white/25" strokeWidth="0.8" />
                    <path d="M110,140 L150,180 L180,140 M90,310 L120,330 L95,360 M210,440 L240,470" className="stroke-white/20" strokeWidth="0.6" />
                    <path d="M110,140 L95,115 M110,140 L135,125 M90,310 L65,285 M90,310 L115,290 M210,440 L190,420 M210,440 L230,425" className="stroke-white/10" strokeWidth="0.5" />
                    <circle cx="110" cy="140" r="6" className="stroke-white/30" strokeWidth="0.6" />
                    <circle cx="110" cy="140" r="14" className="stroke-white/15" strokeWidth="0.3" />
                    <circle cx="110" cy="140" r="2" fill="white" opacity="0.4" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            {/* REPAIR BUTTON — z-[60] */}
            <AnimatePresence>
              {stage === "protected" && (
                <div className="absolute bottom-[120px] left-0 right-0 flex justify-center z-[60]">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRepair}
                    className="bg-destructive text-white px-6 py-3 rounded-full font-bold text-sm shadow-2xl shadow-destructive/30 flex items-center gap-2 border border-white/20 whitespace-nowrap cursor-pointer"
                  >
                    <Wrench size={16} />
                    Repair My Screen
                  </motion.button>
                </div>
              )}
            </AnimatePresence>

            {/* Dynamic Island */}
            <div className="mt-4 flex justify-center w-full px-4 z-50 h-8 relative">
              <motion.div
                initial={false}
                animate={{
                  width: showNotification ? "100%" : "110px",
                  height: showNotification ? "82px" : "34px",
                  y: showNotification ? 4 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`bg-black rounded-[40px] flex items-center overflow-hidden shadow-2xl ${
                  showNotification
                    ? "p-3 border-[0.5px] border-white/10 backdrop-blur-3xl bg-black/90"
                    : ""
                }`}
              >
                <AnimatePresence mode="wait">
                  {showNotification ? (
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="flex items-center w-full gap-3"
                    >
                      <div className="w-11 h-11 bg-[#31d158] rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                        <MessageCircle className="text-white fill-white" size={24} />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-none mb-1">iMessage</span>
                        <span className="text-[14px] text-white font-bold leading-tight">Mobile Tech Lab</span>
                        <p className="text-[12px] text-white/80 leading-tight">
                          {stage === "repaired"
                            ? "Repaired! Total cost to you: $0.00 ✅"
                            : "Your screen is now 100% protected! ✅"}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-between px-4">
                      <div className="w-3 h-3 rounded-full bg-[#050505] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]" />
                      <div className="w-6 h-1.5 bg-white/5 rounded-full" />
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Home screen icons */}
            <div className="flex-1 w-full px-5 pt-12 pb-4 flex flex-col gap-8 relative z-10">
              <div className="grid grid-cols-4 gap-y-9">
                <AppIcon name="Photos" color="bg-white" icon={LayoutGrid} />
                <AppIcon name="Instagram" color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" icon={Instagram} />
                <AppIcon name="TikTok" color="bg-black border border-white/20" icon={Music} />
                <AppIcon name="Maps" color="bg-[#1cb3ff]" icon={MapIcon} />
                <AppIcon name="Safari" color="bg-gradient-to-b from-[#3498db] to-[#2980b9]" icon={Compass} />
                <AppIcon name="Camera" color="bg-[#2c2c2e]" icon={Camera} />
                <AppIcon name="Mail" color="bg-gradient-to-b from-[#1c92d2] to-[#f2fcfe]" icon={Mail} />
                <AppIcon name="MTL" color="bg-destructive shadow-red-500/30 shadow-lg" icon={ShieldCheck} />
              </div>

              {/* Dock */}
              <div className="mt-auto mb-3 mx-1 h-[78px] bg-white/10 backdrop-blur-2xl rounded-[32px] flex items-center justify-around px-4 border border-white/10 shadow-lg">
                <div className="w-[50px] h-[50px] bg-[#31d158] rounded-[14px] flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                  <Phone size={24} className="text-white fill-white" />
                </div>
                <div className="w-[50px] h-[50px] bg-[#007AFF] rounded-[14px] flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                  <MessageSquare size={24} className="text-white fill-white" />
                </div>
                <div className="w-[50px] h-[50px] bg-white rounded-[14px] flex items-center justify-center active:scale-90 transition-transform">
                  <Compass size={24} className="text-[#007AFF]" />
                </div>
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-pink-500 to-red-500 rounded-[14px] flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                  <Music size={24} className="text-white" />
                </div>
              </div>
              {/* Home indicator */}
              <div className="h-1.5 w-32 bg-white/25 rounded-full self-center mb-1" />
            </div>
          </div>
        </div>

        {/* Physical buttons */}
        <div className="absolute left-[-2.5px] top-[100px] w-[3.5px] h-7 bg-[#2a2635] rounded-l-sm border-l border-white/10" />
        <div className="absolute left-[-3.5px] top-[145px] w-[4px] h-12 bg-[#2a2635] rounded-l-md border-l border-white/20 shadow-[-2px_5px_10px_rgba(0,0,0,0.3)]" />
        <div className="absolute left-[-3.5px] top-[210px] w-[4px] h-12 bg-[#2a2635] rounded-l-md border-l border-white/20 shadow-[-2px_5px_10px_rgba(0,0,0,0.3)]" />
        <div className="absolute right-[-3.5px] top-[185px] w-[4px] h-20 bg-[#2a2635] rounded-r-md border-r border-white/20 shadow-[2px_5px_10px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}
