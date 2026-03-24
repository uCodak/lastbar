import React from "react";
import { Database, SquareArrowOutUpRight } from "lucide-react";

const Test = () => {
  return (
    /* --- 1. FULL PAGE WRAPPER & BACKGROUND --- */
    <div className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex items-center justify-center font-sans selection:bg-[#EC3057]/30 p-6">
      <div>
        {/* NOISE TEXTURE LAYER */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* GRID LAYER (Fades at edges) */}
        <div className="absolute inset-0 z-[2] opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* MESH GLOW ORBS */}
        <div className="absolute inset-0 z-[0]">
          <div
            className="absolute top-[-5%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#EC3057] opacity-[0.07] blur-[140px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div className="absolute bottom-[-10%] right-[-5%] h-[700px] w-[700px] rounded-full bg-[#4F46E5] opacity-[0.05] blur-[160px]" />
        </div>

        <div className="w-[90%] mx-auto py-35 text-white">
          <h1 className="text-[#EC3057] mb-4 jetbrain text-center">
            --System Initialization
          </h1>
          <h2 className=" text-3xl md:text-6xl font-black gap-0 text-center mb-4 ">
            YOU DON'T NEED TO{" "}
            <span className="text-[#71717B]"> RE-LEARN THE LAW.</span>
            <br /> YOU NEED TO{" "}
            <span className="text-[#F66F82]"> FIX YOUR SYSTEM.</span>
          </h2>
          <p className="text-[#71717B] text-2xl font-medium w-[70%] mx-auto text-center mb-5">
            The industry treats repeaters like cash cows. They sell you
            "motion." I design paths for "action."
            <span className="text-white">
              I am not a bar prep company. I am a Systems Architect.
            </span>
          </p>
        </div>

        {/* --- 2. THE FUTURISTIC CARD --- */}
        <div className="flex justify-center">
          <div className="relative z-10 group w-full max-w-xl transition-all duration-500 hover:-translate-y-2">
            {/* EXTERIOR PINK GLOW (Visible on hover) */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#EC3057] to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

            {/* MAIN CARD BODY */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F0F12]/80 p-8 md:p-12 text-center backdrop-blur-3xl">
              {/* THE MOVING GEOMETRIC OBJECT (Inside Background) */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
                <svg
                  className="h-[120%] w-[120%] opacity-40"
                  viewBox="0 0 400 400"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#EC3057"
                    strokeWidth="0.5"
                    strokeDasharray="10 20"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 200 200"
                      to="360 200 200"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="200"
                    cy="200"
                    r="100"
                    fill="none"
                    stroke="#EC3057"
                    strokeWidth="1"
                    strokeDasharray="4 12"
                    opacity="0.3"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="360 200 200"
                      to="0 200 200"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>

              {/* CONTENT LAYER */}
              <div className="relative z-10 flex flex-col items-center">
                {/* TOP BADGE */}
                <div className="mb-8 flex items-center gap-2 rounded-full border border-[#EC3057]/30 bg-[#EC3057]/10 px-5 py-1.5 transition-colors group-hover:border-[#EC3057]/60">
                  <Database
                    size={14}
                    className="text-[#EC3057] animate-pulse"
                  />
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#EC3057] uppercase">
                    Digital Protocol July '26
                  </span>
                </div>

                {/* HEADER */}
                <h2 className="mb-6 text-3xl md:text-4xl font-black tracking-tighter text-white leading-[1.1]">
                  JULY 2026 <br />
                  <span className="bg-gradient-to-r from-white via-white/80 to-gray-600 bg-clip-text text-transparent">
                    HOMESTRETCH
                  </span>
                </h2>

                {/* DESCRIPTION (Professional Spacing) */}
                <p className="mb-10 text-sm md:text-base leading-relaxed text-gray-400 font-medium max-w-[90%] mx-auto">
                  Prebuilt frameworks for high-priority MEE and MBE subjects,
                  featuring exam tips derived from a 10-year analysis of
                  top-scoring model answers and grading rubrics.
                </p>

                {/* CTA BUTTON */}
                <button className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-10 py-4 text-sm font-bold text-white transition-all hover:border-[#EC3057]/50 hover:bg-[#EC3057]/10 active:scale-95">
                  <span className="relative z-10">INITIALIZE ACCESS</span>
                  <SquareArrowOutUpRight
                    size={18}
                    className="relative z-10 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                  />

                  {/* BUTTON SHINE EFFECT */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
