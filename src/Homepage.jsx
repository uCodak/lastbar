import Navbar from "./components/Navbar";
import CountDown from "./components/CountDown";
import {
  SquareArrowOutUpRight,
  Database,
  Quote,
  ArrowRight,
} from "lucide-react";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

function Homepage() {
  const cards = [
    {
      GridText:
        "I was skeptical at first, but now I can't imagine working without it. . This was the first thing that made rules stick. I st ",
      Name: "Priya Sharma",
      Status: "Verified Buyer",
      Date: "February 10, 2025",
    },
    {
      GridText:
        "Clean design, fast performance, and a joy to use every single day.is built for people like us. The audio files were clutch, and the .  ",
      Name: "Lena Fischer",
      Status: "Pro Member",
      Date: "March 20, 2025",
    },
    {
      GridText:
        "I hit a wall in July and felt like I forgot everything. I bought this 9 days before the exam. The Rapid Recall outlines are literal lifesavers. The ",
      Name: "Bailey",
      Status: "Repeater",
      Date: "February 10, 2025",
    },
    {
      GridText:
        "Failing by one point broke me. I knew the law but couldn’t recall fast enough. These forced recall under pressure. That missing point? ",
      Name: "Lena Fischer",
      Status: "Pro Member",
      Date: "March 20, 2025",
    },
  ];
  // Duplicate for seamless infinite loop
  const allCards = [...cards, ...cards];
  return (
    <div>
      <Navbar />
      <CountDown />
      {/*background section*/}
      <div className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex items-center justify-center font-sans selection:bg-[#EC3057]/30 p-6">
        <div className="w-full ">
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
          <div className="flex justify-center w-full mb-8">
            <div className="relative z-10 group w-full max-w-xl transition-all duration-500 hover:-translate-y-2">
              {/* EXTERIOR PINK GLOW (Visible on hover) */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#EC3057] to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

              {/* MAIN CARD BODY */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F0F12]/80 p-3 md:p-6 text-center backdrop-blur-3xl w-full">
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
                <div className="relative z-10 flex flex-col items-center w-full">
                  {/* TOP BADGE */}
                  <div className="mb-8 flex items-center gap-2 rounded-full border border-[#EC3057]/30 bg-[#EC3057]/10 px-5 py-1.5 transition-colors group-hover:border-[#EC3057]/60">
                    <Database
                      size={14}
                      className="text-[#EC3057] animate-pulse"
                    />
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#EC3057] uppercase jetbrain">
                      EXAM PACKAGE
                    </span>
                  </div>

                  {/* HEADER */}
                  <h2 className="mb-6 text-3xl md:text-4xl font-black tracking-tighter text-white leading-[1.1]">
                    JULY 2026 EXAM
                    <span className="bg-gradient-to-r from-white via-white/80 to-gray-600 bg-clip-text text-transparent">
                      HOMESTRETCH PACKAGE
                    </span>
                  </h2>

                  {/* DESCRIPTION (Professional Spacing) */}
                  <p className="mb-10 text-sm md:text-base leading-relaxed text-gray-400 font-medium max-w-[90%] mx-auto">
                    Prebuilt frameworks for the highest priority, most tested,
                    most testable issues across all MEE and MBE subjects, with
                    exam tips and tricks derived from analysis of top-scoring
                    model answers and grading rubrics from the last 10 years.
                  </p>

                  {/* CTA BUTTON */}
                  <button className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-10 py-4 text-sm font-bold text-white transition-all hover:border-[#EC3057]/50 hover:bg-[#EC3057]/10 active:scale-95">
                    <span className="relative z-10 jetbrain  text-[#EC3057]">
                      Click here to access the package
                    </span>
                    <SquareArrowOutUpRight
                      size={18}
                      className="relative z-10 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1  text-[#EC3057]"
                    />

                    {/* BUTTON SHINE EFFECT */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="border border-white/20 mb-10"></p>
          {/*moving cards */}
          <div className="mb-7">
            <div className="w-[90%] mx-auto  text-white">
              <h1 className="text-[#71717B] mb-4 jetbrain text-center">
                Field Reports
              </h1>
              <h2 className=" text-3xl md:text-6xl font-black gap-0 text-center mb-4 ">
                THIS SYSTEM WORK <br />
                <span className="text-[#F66F82]"> UNDER REAL CONDITIONS.</span>
              </h2>
            </div>
            <div
              style={{
                fontFamily: "'Segoe UI', sans-serif",

                minHeight: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Viewport */}
              <div
                style={{
                  width: "100%",
                  overflow: "hidden",
                  padding: "16px 0",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                  maskImage:
                    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
              >
                {/* Track */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    width: "max-content",
                    animation: "scroll-left 22s linear infinite",
                  }}
                >
                  {allCards.map((card, i) => (
                    <div
                      key={i}
                      className="w-[50%] mx-auto  group relative w-full max-w-xl mx-auto transition-all duration-500 hover:-translate-y-2 text-white"
                    >
                      {/* 1. The Outer Glow */}
                      <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r from-[#EC3057] to-[#4F46E5] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
                      {/* 2. THE NEW GRADIENT BORDER LAYER */}
                      {/* This p-[1px] creates the thin border effect when the gradient background is revealed */}
                      <div className="relative rounded-[2rem] p-[1px] transition-all duration-500 bg-white/10 group-hover:bg-gradient-to-br group-hover:from-[#EC3057] group-hover:to-transparent">
                        {/* 3. The Main Card Container */}
                        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[#0F0F12] p-8 text-center backdrop-blur-3xl">
                          {/* 4. The Moving Object */}
                          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                            <svg
                              className="h-full w-full"
                              viewBox="0 0 400 400"
                            >
                              <circle
                                cx="200"
                                cy="200"
                                r="150"
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
                                  dur="20s"
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
                                strokeDasharray="5 15"
                                opacity="0.5"
                              >
                                <animateTransform
                                  attributeName="transform"
                                  type="rotate"
                                  from="360 200 200"
                                  to="0 200 200"
                                  dur="15s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </svg>
                          </div>
                          {/* 5. Content Layer */}
                          <div className="relative z-10">
                            {/* Quote Badge */}
                            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[#EC3057]/30 bg-[#EC3057]/10 px-4 py-1">
                              <Quote
                                size={14}
                                className="text-[#EC3057] animate-pulse"
                              />
                            </div>
                            {/* Description */}
                            <p className="mb-8 text-sm leading-relaxed text-gray-400 font-medium">
                              {card.GridText}
                            </p>
                            <p className="border border-white/20"></p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <span>{card.Name}</span>
                                <span className="text-[#71717B] jetbrain">
                                  {card.Status}
                                </span>
                              </div>
                              <span className="jetbrain text-[#F66F82] ">
                                {card.Date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
            </div>
            <div className="mt-4 jetbrain text-[#F66F82] flex items-center justify-center gap-3 mb-5 ">
              <p className=" ">Click here to access the package</p>
              <SquareArrowOutUpRight />
            </div>
            <p className="text-center jetbrain text-[#71717B]">
              Action Over Motion...
            </p>
          </div>
          {/**buttons */}
          <div className="flex  flex-col md:flex-row justify-center gap-3 md:gap-7 mb-5 md:mb-10">
            <button className="text-white">
              <span className="flex gap-3 bg-[#9F1239] px-6 py-3">
                <span className="font-medium">START NEW DIAGNOSTICS</span>
                <span>
                  <ArrowRight />
                </span>
              </span>
            </button>
            <button className="text-white  border border-white/20">
              <span className="flex gap-3 bg-black px-6 py-3">
                <span className="font-medium">BUILD YOUR SCHEDULE</span>
              </span>
            </button>
          </div>
          {/** */}
          <div className="mb-10 md:mb-30">
            <div className=" flex items-center justify-center gap-6 mb-4 md:mb-10">
              <div className="text-[#54545B] jetbrain flex items-center gap-3">
                <FaXTwitter size={24} />
                <p>LIVE SIGNAL</p>
              </div>
              <p className="text-[#54545B]">|</p>
              <div className="flex gap-2 text-[#54545B]">
                <FaDiscord size={24} />
                <p>FIELD NOTES</p>
              </div>
            </div>
            <div>
              <p className="text-[#54545B] jetbrain flex justify-center">
                ACTION OVER MOTION.
              </p>
            </div>
          </div>
        </div>
      </div>
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
        </div>
      </div>
    </div>
  );
}
export default Homepage;
