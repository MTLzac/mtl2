import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Wifi, Battery, Signal } from "lucide-react";

type Stage = "pristine" | "cracked" | "alert" | "repairing" | "repaired";

export function GalaxyS24Ultra() {
  const [stage, setStage] = useState<Stage>("pristine");
  const [glint, setGlint] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage("cracked"), 1500);
    const t2 = setTimeout(() => setStage("alert"), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleRepair = () => {
    setStage("repairing");
    setGlint(true);
    setTimeout(() => {
      setStage("repaired");
      setGlint(false);
    }, 600);
  };

  const isAlert = stage === "alert";
  const isCrackedOrAlert = stage === "cracked" || stage === "alert";

  return (
    <div className="relative mx-auto" style={{ width: 260, aspectRatio: "9/19.5" }}>
      {/* S24 Ultra Frame — Titanium Gray, sharp corners */}
      <div
        className="absolute inset-0 rounded-[16px]"
        style={{
          background: "linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 40%, #1e1e1e 100%)",
          boxShadow: "0 0 0 1.5px #666, 0 0 0 3px #333, 0 20px 60px rgba(0,0,0,0.6)",
        }}
      >
        {/* Titanium texture highlight */}
        <div className="absolute inset-0 rounded-[16px] opacity-20" style={{
          background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
        }} />
        {/* Side buttons — Power/Bixby right, Volume left */}
        <div className="absolute -right-[3px] top-[25%] w-[3px] h-[38px] rounded-r-sm" style={{
          background: "linear-gradient(90deg, #555, #777, #555)",
        }} />
        <div className="absolute -left-[3px] top-[18%] w-[3px] h-[18px] rounded-l-sm" style={{
          background: "linear-gradient(90deg, #555, #777, #555)",
        }} />
        <div className="absolute -left-[3px] top-[28%] w-[3px] h-[32px] rounded-l-sm" style={{
          background: "linear-gradient(90deg, #555, #777, #555)",
        }} />
        <div className="absolute -left-[3px] top-[40%] w-[3px] h-[32px] rounded-l-sm" style={{
          background: "linear-gradient(90deg, #555, #777, #555)",
        }} />
      </div>

      {/* Edge Lighting glow — snakes around perimeter */}
      <AnimatePresence>
        {isCrackedOrAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6, 1, 0.7] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-[-2px] rounded-[18px] pointer-events-none z-10"
            style={{
              boxShadow: stage === "alert"
                ? "inset 0 0 15px rgba(255,80,0,0.4), 0 0 20px rgba(255,80,0,0.3), 0 0 40px rgba(255,50,0,0.15)"
                : "inset 0 0 8px rgba(255,80,0,0.2), 0 0 12px rgba(255,80,0,0.15)",
              border: "1.5px solid rgba(255,100,0,0.5)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Screen */}
      <div className="absolute inset-[3px] rounded-[13px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 text-white/70 text-[9px] font-medium">
          <span>12:45</span>
          <div className="flex items-center gap-1">
            <Signal size={9} />
            <Wifi size={9} />
            <Battery size={9} />
          </div>
        </div>

        {/* Camera punch-hole */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-black rounded-full border border-[#333]" />

        {/* OneUI content */}
        <div className="mt-8 px-5 space-y-3">
          <div className="text-white text-[22px] font-light leading-tight">
            <span className="text-white/50 text-[11px] font-normal block">Wednesday</span>
            January 15
          </div>
          {/* App grid */}
          <div className="grid grid-cols-4 gap-3 mt-6">
            {["#4285F4", "#EA4335", "#34A853", "#FBBC04", "#7C4DFF", "#FF6D00", "#00BCD4", "#E91E63"].map((c, i) => (
              <div key={i} className="w-9 h-9 rounded-xl mx-auto" style={{ background: c, opacity: 0.85 }} />
            ))}
          </div>
          {/* Samsung widget */}
          <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/5">
            <div className="text-white/60 text-[9px] font-medium">Weather • Winnipeg</div>
            <div className="text-white text-xl font-light mt-1">-22°C</div>
          </div>
        </div>

        {/* Variable-stroke crack overlay */}
        <AnimatePresence>
          {(isCrackedOrAlert || stage === "repairing") && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
              viewBox="0 0 260 565"
              fill="none"
            >
              {/* Impact point — central starburst */}
              <circle cx="130" cy="240" r="6" fill="white" fillOpacity="0.15" />
              <circle cx="130" cy="240" r="3" fill="white" fillOpacity="0.25" />

              {/* Main fracture — variable stroke radiating from impact */}
              <path
                d="M 130 240 L 125 200 L 118 160 L 128 120 L 115 70 L 110 30 L 105 0"
                stroke="white" strokeWidth="2" strokeOpacity="0.8" fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 130 240 L 135 290 L 120 340 L 130 400 L 118 460 L 125 520 L 120 565"
                stroke="white" strokeWidth="1.8" strokeOpacity="0.7" fill="none"
                strokeLinecap="round"
              />

              {/* Secondary fractures — thinner, radiating outward */}
              <path
                d="M 125 200 L 80 185 L 40 175 L 0 170"
                stroke="white" strokeWidth="1.2" strokeOpacity="0.5" fill="none"
              />
              <path
                d="M 128 120 L 170 110 L 210 95 L 260 85"
                stroke="white" strokeWidth="1" strokeOpacity="0.4" fill="none"
              />
              <path
                d="M 130 240 L 175 235 L 220 250 L 260 245"
                stroke="white" strokeWidth="1.3" strokeOpacity="0.5" fill="none"
              />
              <path
                d="M 130 240 L 85 255 L 45 270 L 0 280"
                stroke="white" strokeWidth="1.1" strokeOpacity="0.45" fill="none"
              />

              {/* Tertiary micro-fractures */}
              <path d="M 118 160 L 90 145 L 55 140" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" fill="none" />
              <path d="M 135 290 L 165 300 L 200 310" stroke="white" strokeWidth="0.7" strokeOpacity="0.3" fill="none" />
              <path d="M 120 340 L 80 355 L 50 365" stroke="white" strokeWidth="0.5" strokeOpacity="0.25" fill="none" />
              <path d="M 130 400 L 170 415 L 210 420" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />

              {/* Concentric stress rings around impact */}
              <circle cx="130" cy="240" r="20" stroke="white" strokeWidth="0.4" strokeOpacity="0.15" fill="none" />
              <circle cx="130" cy="240" r="40" stroke="white" strokeWidth="0.3" strokeOpacity="0.1" fill="none" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Samsung Smart Pop-up notification pill */}
        <AnimatePresence>
          {isAlert && (
            <div className="absolute top-10 inset-x-0 flex justify-center z-50 px-4">
            <motion.div
              initial={{ width: 40, opacity: 0, y: -10 }}
              animate={{ width: 230, opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="overflow-hidden"
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-[20px] border border-white/10 px-4 py-2.5 flex items-center gap-2.5 shadow-2xl">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shrink-0">
                  <span className="text-[8px] text-white font-bold">!</span>
                </div>
                <div className="min-w-0">
                  <div className="text-white text-[9px] font-bold truncate">Screen Damage Detected</div>
                  <div className="text-white/60 text-[8px] truncate">Premium Repair Available ✅</div>
                </div>
              </div>
            </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Repair button */}
        <AnimatePresence>
          {isAlert && (
            <div className="absolute bottom-[20%] inset-x-0 flex justify-center z-[80] px-6">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.8 }}
                onClick={handleRepair}
                className="px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/30 animate-bounce whitespace-nowrap"
              >
                Repair My Screen
              </motion.button>
            </div>
          )}
        </AnimatePresence>

        {/* White specular glint sweep */}
        {glint && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "250%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-40 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 60%, transparent 100%)",
              width: "40%",
            }}
          />
        )}

        {/* Success notification */}
        <AnimatePresence>
          {stage === "repaired" && (
            <div className="absolute top-10 inset-x-0 flex justify-center z-50 px-4">
            <motion.div
              initial={{ width: 40, opacity: 0, y: -10 }}
              animate={{ width: 230, opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-[20px] border border-white/10 px-4 py-2.5 flex items-center gap-2.5 shadow-2xl">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shrink-0">
                  <Check size={10} className="text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-white text-[9px] font-bold truncate">Repaired with Premium Parts</div>
                  <div className="text-white/60 text-[8px] truncate">Total cost to you: $0.00</div>
                </div>
              </div>
            </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
