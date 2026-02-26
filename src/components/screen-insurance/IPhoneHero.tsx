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
      className={`w-12 h-12 rounded-[13px] ${color} flex items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.3)] relative overflow-hidden transition-all active:scale-90 cursor-pointer`}
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
    const expandTimer = setTimeout(() => setIsNotchExpanded(true), 1000);
    const collapseTimer = setTimeout(() => setIsNotchExpanded(false), 4000);
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center relative py-10">
      {/* Shadow beneath phone */}
      <div className="absolute bottom-4 w-4/5 h-10 bg-black/10 blur-[40px] rounded-[100%] scale-x-75" />

      {/* Phone chassis */}
      <div className="relative w-[260px] sm:w-[300px] aspect-[37/76] rounded-[60px] p-[2.5px] bg-gradient-to-b from-[#4a4458] via-[#1e1a26] to-[#0f0d14] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),_0_0_0_1px_rgba(255,255,255,0.05)]">
        {/* Chamfered edge highlight */}
        <div className="absolute inset-0 rounded-[60px] border-[0.5px] border-white/20 pointer-events-none z-40" />

        {/* Inner bezel */}
        <div className="w-full h-full bg-black rounded-[58px] p-[10px] relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-[3px] border border-white/10 rounded-[50px] pointer-events-none z-30" />

          {/* Screen */}
          <div className="relative w-full h-full rounded-[48px] overflow-hidden bg-black flex flex-col shadow-[0_0_2px_rgba(255,255,255,0.1)]">
            {/* Wallpaper */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a263d] via-[#12101a] to-black" />
            <div className="absolute top-[-10%] right-[-10%] w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,0,50,0.1)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-20" />

            {/* Dynamic Island */}
            <div className="mt-4 flex justify-center w-full px-4 z-50 h-8 relative">
              <motion.div
                initial={false}
                animate={{
                  width: isNotchExpanded ? "100%" : "110px",
                  height: isNotchExpanded ? "82px" : "34px",
                  y: isNotchExpanded ? 6 : 0,
                }}
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                className={`relative bg-black rounded-[40px] flex items-center overflow-hidden cursor-pointer shadow-2xl ${
                  isNotchExpanded
                    ? "p-3 border-[0.5px] border-white/10 backdrop-blur-3xl bg-black/95"
                    : ""
                }`}
                onClick={() => setIsNotchExpanded(!isNotchExpanded)}
              >
                <AnimatePresence mode="wait">
                  {isNotchExpanded ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      className="flex items-center w-full gap-4"
                    >
                      <div className="w-12 h-12 bg-[#31d158] rounded-[14px] flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                        <MessageCircle
                          className="text-white fill-white"
                          size={24}
                        />
                      </div>
                      <div className="flex flex-col">
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
                      <div className="w-3 h-3 rounded-full bg-[#050505] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-500/10 blur-[0.5px] rounded-full" />
                      </div>
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
              <div className="mt-auto mb-3 mx-1 h-[80px] bg-white/10 backdrop-blur-3xl rounded-[34px] flex items-center justify-around px-4 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                <div className="w-[54px] h-[54px] bg-[#31d158] rounded-[15px] flex items-center justify-center shadow-lg relative overflow-hidden active:scale-90 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                  <Phone size={26} className="text-white fill-white" />
                </div>
                <div className="w-[54px] h-[54px] bg-[#007AFF] rounded-[15px] flex items-center justify-center shadow-lg relative overflow-hidden active:scale-90 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                  <MessageSquare size={26} className="text-white fill-white" />
                </div>
                <div className="w-[54px] h-[54px] bg-white rounded-[15px] flex items-center justify-center shadow-md border border-slate-100 active:scale-90 transition-transform">
                  <Compass size={26} className="text-[#007AFF]" />
                </div>
                <div className="w-[54px] h-[54px] bg-gradient-to-br from-pink-500 to-red-500 rounded-[15px] flex items-center justify-center shadow-lg relative overflow-hidden active:scale-90 transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                  <Music size={26} className="text-white" />
                </div>
              </div>
              {/* Home indicator */}
              <div className="h-1.5 w-36 bg-white/25 rounded-full self-center mb-1" />
            </div>
          </div>
        </div>

        {/* Physical buttons */}
        <div className="absolute left-[-2.5px] top-[100px] w-[3.5px] h-7 bg-gradient-to-r from-[#1a1725] to-[#2d2a45] rounded-l-sm border-l border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
        <div className="absolute left-[-3.5px] top-[145px] w-[4px] h-12 bg-gradient-to-r from-[#1a1725] to-[#2d2a45] rounded-l-md border-l border-white/20 shadow-[-2px_5px_10px_rgba(0,0,0,0.3)]" />
        <div className="absolute left-[-3.5px] top-[210px] w-[4px] h-12 bg-gradient-to-r from-[#1a1725] to-[#2d2a45] rounded-l-md border-l border-white/20 shadow-[-2px_5px_10px_rgba(0,0,0,0.3)]" />
        <div className="absolute right-[-3.5px] top-[185px] w-[4px] h-20 bg-gradient-to-l from-[#1a1725] to-[#2d2a45] rounded-r-md border-r border-white/20 shadow-[2px_5px_10px_rgba(0,0,0,0.3)]" />

        {/* Antenna lines */}
        <div className="absolute top-12 left-0 w-full h-[1.5px] bg-black/40" />
        <div className="absolute bottom-12 left-0 w-full h-[1.5px] bg-black/40" />
      </div>
    </div>
  );
}
