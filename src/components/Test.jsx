import React from "react";
import { Database, SquareArrowOutUpRight } from "lucide-react";

const WhiteFuturisticCard = () => {
  return (
    /* --- 1. FULL PAGE WRAPPER (White/Light Gray) --- */
    <div className="relative min-h-screen w-full bg-[#F8F9FA] overflow-hidden flex items-center justify-center font-sans selection:bg-[#EC3057]/20 p-6">
      {/* SUBTLE LIGHT GRID */}
      <div className="absolute inset-0 z-[1] opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* SOFT MESH GLOW (Light Mode version) */}
      <div className="absolute inset-0 z-[0]">
        <div className="absolute top-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#EC3057] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[700px] w-[700px] rounded-full bg-[#4F46E5] opacity-[0.03] blur-[140px]" />
      </div>

      {/* --- 2. THE FLOATING GLASS CARD --- */}
      <div className="relative z-10 group w-full max-w-xl transition-all duration-700 hover:-translate-y-3">
        {/* EXTERIOR SOFT PINK GLOW (Visible on hover) */}
        <div className="absolute -inset-2 rounded-[2.5rem] bg-[#EC3057] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.08]" />

        {/* MAIN CARD BODY (White Glassmorphism) */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-8 md:p-12 text-center backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border-b-white/20">
          {/* THE MOVING GEOMETRIC OBJECT (Clean Gray/Pink) */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
            <svg className="h-[130%] w-[130%]" viewBox="0 0 400 400">
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
                strokeDasharray="8 16"
                opacity="0.2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="40s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="200"
                cy="200"
                r="110"
                fill="none"
                stroke="#EC3057"
                strokeWidth="0.8"
                strokeDasharray="2 10"
                opacity="0.4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 200 200"
                  to="0 200 200"
                  dur="25s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 flex flex-col items-center">
            {/* TOP BADGE (High Contrast) */}
            <div className="mb-8 flex items-center gap-2 rounded-full border border-[#EC3057]/10 bg-[#EC3057]/5 px-5 py-1.5 shadow-sm">
              <Database size={14} className="text-[#EC3057]" />
              <span className="text-[10px] font-bold tracking-[0.35em] text-[#EC3057] uppercase">
                Enterprise Module // 2026
              </span>
            </div>

            {/* HEADER (Sharp Dark Gray) */}
            <h2 className="mb-6 text-3xl md:text-4xl font-black tracking-tighter text-[#1A1A1E] leading-[1.1]">
              JULY 2026 <br />
              <span className="bg-gradient-to-r from-[#1A1A1E] to-[#EC3057] bg-clip-text text-transparent">
                HOMESTRETCH
              </span>
            </h2>

            {/* DESCRIPTION (Better Readability) */}
            <p className="mb-10 text-sm md:text-base leading-relaxed text-[#4A4A4F] font-medium max-w-[90%] mx-auto">
              Prebuilt frameworks for high-priority MEE and MBE subjects,
              meticulously analyzed from 10 years of top-scoring model answers.
            </p>

            {/* CTA BUTTON (Clean & Modern) */}
            <button className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-[#1A1A1E] px-10 py-4 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#EC3057] hover:shadow-[#EC3057]/20 active:scale-95">
              <span className="relative z-10">INITIALIZE ACCESS</span>
              <SquareArrowOutUpRight
                size={18}
                className="relative z-10 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
              />

              {/* BUTTON SHINE EFFECT */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteFuturisticCard;
