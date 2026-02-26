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
} from "lucide-react";

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
      <Icon size={24} className="text-white drop-shadow-md" />
    </div>
    <span className="text-[10px] text-white/90 font-semibold tracking-tight">
      {name}
    </span>
  </div>
);

export function IPhoneHero() {
  const [isNotchExpanded, setIsNotchExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsNotchExpanded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative py-10 w-full">
      {/* Contact shadow */}
      <div className="absolute bottom-4 w-64 h-8 bg-black/10 blur-[40px] rounded-[100%] pointer-events-none" />

      {/* CHASSIS */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[37/76] rounded-[60px] p-[3px] bg-gradient-to-b from-[#4a4458] via-[#1e1a26] to-[#0f0d14] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
      >
        {/* Edge highlight */}
        <div className="absolute inset-0 rounded-[60px] border-[0.5px] border-white/20 pointer-events-none z-40" />

        {/* Inner display assembly */}
        <div className="w-full h-full bg-black rounded-[57px] p-[10px] relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] flex flex-col">
          <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-black flex flex-col">
            {/* Wallpaper */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a263d] via-[#12101a] to-black" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none z-20" />

            {/* Dynamic Island */}
            <div className="mt-4 flex justify-center w-full px-4 z-50 h-8 relative">
              <motion.div
                initial={false}
                animate={{
                  width: isNotchExpanded ? "100%" : "110px",
                  height: isNotchExpanded ? "80px" : "34px",
                  y: isNotchExpanded ? 4 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`bg-black rounded-[40px] flex items-center overflow-hidden shadow-2xl ${
                  isNotchExpanded
                    ? "p-3 border-[0.5px] border-white/10 backdrop-blur-3xl bg-black/90"
                    : ""
                }`}
              >
                <AnimatePresence mode="wait">
                  {isNotchExpanded ? (
                    <motion.div
                      key="exp"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center w-full gap-3"
                    >
                      <div className="w-11 h-11 bg-[#31d158] rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                        <MessageCircle className="text-white fill-white" size={24} />
                      </div>
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-none mb-1">
                          iMessage
                        </span>
                        <span className="text-[14px] text-white font-bold leading-tight">
                          Mobile Tech Lab
                        </span>
                        <p className="text-[12px] text-white/80 leading-tight">
                          Your screen is now 100% protected! ✅
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
                <AppIcon
                  name="Instagram"
                  color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
                  icon={Instagram}
                />
                <AppIcon
                  name="TikTok"
                  color="bg-black border border-white/20"
                  icon={Music}
                />
                <AppIcon name="Maps" color="bg-[#1cb3ff]" icon={MapIcon} />
                <AppIcon
                  name="Safari"
                  color="bg-gradient-to-b from-[#3498db] to-[#2980b9]"
                  icon={Compass}
                />
                <AppIcon name="Camera" color="bg-[#2c2c2e]" icon={Camera} />
                <AppIcon
                  name="Mail"
                  color="bg-gradient-to-b from-[#1c92d2] to-[#f2fcfe]"
                  icon={Mail}
                />
                <AppIcon
                  name="MTL"
                  color="bg-red-600 shadow-red-500/30"
                  icon={ShieldCheck}
                />
              </div>

              {/* Dock */}
              <div className="mt-auto mb-3 mx-1 h-[78px] bg-white/10 backdrop-blur-2xl rounded-[32px] flex items-center justify-around px-4 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                <div className="w-[50px] h-[50px] bg-[#31d158] rounded-[14px] flex items-center justify-center shadow-lg">
                  <Phone size={24} className="text-white fill-white" />
                </div>
                <div className="w-[50px] h-[50px] bg-[#007AFF] rounded-[14px] flex items-center justify-center shadow-lg">
                  <MessageSquare size={24} className="text-white fill-white" />
                </div>
                <div className="w-[50px] h-[50px] bg-white rounded-[14px] flex items-center justify-center border border-slate-100">
                  <Compass size={24} className="text-[#007AFF]" />
                </div>
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-pink-500 to-red-500 rounded-[14px] flex items-center justify-center shadow-lg">
                  <Music size={24} className="text-white" />
                </div>
              </div>
              {/* Home indicator */}
              <div className="h-1.5 w-32 bg-white/25 rounded-full self-center mb-1" />
            </div>
          </div>
        </div>

        {/* Physical buttons */}
        <div className="absolute left-[-2.5px] top-[100px] w-[3px] h-7 bg-[#2a2635] rounded-l-sm border-l border-white/10" />
        <div className="absolute left-[-3.5px] top-[145px] w-[4px] h-12 bg-[#2a2635] rounded-l-md border-l border-white/20" />
        <div className="absolute left-[-3.5px] top-[210px] w-[4px] h-12 bg-[#2a2635] rounded-l-md border-l border-white/20" />
        <div className="absolute right-[-3.5px] top-[185px] w-[4px] h-20 bg-[#2a2635] rounded-r-md border-r border-white/20" />
      </motion.div>
    </div>
  );
}
