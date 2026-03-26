"use client";
import { useEffect, useRef } from "react";
import { Search, Pencil, Check } from "lucide-react";

const steps = [
  {
    tag: "STEP 01",
    side: "left",
    title: "Audit Your Failure",
    text: "We dissect every failed attempt. Not to revisit pain — to find the exact friction points killing your score.",
    status: "Diagnostic complete",
    icon: <Search size={18} />,
  },
  {
    tag: "STEP 02",
    side: "right",
    title: "Build Your Protocol",
    text: "A custom day-by-day system built around your life, your weak subjects, and your test date.",
    status: "Protocol assigned",
    icon: <Pencil size={18} />,
  },
  {
    tag: "STEP 03",
    side: "left",
    title: "Execute & Pass",
    text: "Weekly check-ins, live adjustments, and accountability until you walk out for the last time.",
    status: "Mission active",
    icon: <Check size={18} />,
  },
];

export default function Test() {
  const lineRef = useRef(null);
  const iconRefs = useRef([]);
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      const rect = timelineRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const raw =
        (winH * 0.6 - rect.top) / (winH * 0.6 + rect.height - winH * 0.4);
      const progress = Math.min(1, Math.max(0, raw));
      lineRef.current.style.height = progress * 100 + "%";

      steps.forEach((_, i) => {
        const active = progress >= i / (steps.length - 0.6);
        iconRefs.current[i]?.classList.toggle("lit", active);
        cardRefs.current[i]?.classList.toggle("lit", active);
        dotRefs.current[i]?.classList.toggle("lit", active);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <p className="text-center text-xs tracking-[0.2em] text-[#555] font-mono mb-3">
        -- THE PROTOCOL
      </p>
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-20">
        HOW IT WORKS
      </h2>

      <div ref={timelineRef} className="relative max-w-4xl mx-auto">
        {/* track */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#1e1e1e] -translate-x-1/2" />
        {/* fill */}
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 w-[2px] h-0 bg-gradient-to-b from-[#9F1239] to-pink-500 -translate-x-1/2 z-10 transition-[height] duration-100"
        />

        {steps.map((s, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center mb-20 last:mb-0 min-h-[120px]"
          >
            {/* left slot */}
            <div className="w-[45%] flex justify-end pr-12">
              {s.side === "left" && (
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="card-box max-w-xs w-full bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 opacity-0 translate-y-6 transition-all duration-500 [&.lit]:opacity-100 [&.lit]:translate-y-0 [&.lit]:border-[#9F1239]"
                >
                  <p className="text-[11px] font-mono tracking-widest text-[#9F1239] mb-2">
                    {s.tag}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {s.text}
                  </p>
                  <hr className="border-[#1e1e1e] my-3 [.lit_&]:border-[#2a0010]" />
                  <p className="text-[11px] font-mono text-[#444] flex items-center gap-2 [.lit_&]:text-[#9F1239]">
                    <span className="hidden w-1.5 h-1.5 rounded-full bg-[#9F1239] [.lit_&]:inline-block animate-ping" />
                    {s.status}
                  </p>
                </div>
              )}
            </div>

            {/* center icon */}
            <div className="absolute left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
              <div
                ref={(el) => (iconRefs.current[i] = el)}
                className="w-12 h-12 rounded-full border-2 border-[#2a2a2a] bg-[#111] flex items-center justify-content text-[#555] transition-all duration-500 [&.lit]:border-[#9F1239] [&.lit]:bg-[#1a0008] [&.lit]:scale-110 [&.lit]:shadow-[0_0_20px_4px_rgba(159,18,57,0.4)] [&.lit]:text-pink-400"
              >
                {s.icon}
              </div>
              <div
                ref={(el) => (dotRefs.current[i] = el)}
                className="w-2 h-2 rounded-full bg-[#222] transition-colors duration-300 [&.lit]:bg-pink-500"
              />
            </div>

            {/* right slot */}
            <div className="w-[45%] flex justify-start pl-12">
              {s.side === "right" && (
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="card-box max-w-xs w-full bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 opacity-0 translate-y-6 transition-all duration-500 [&.lit]:opacity-100 [&.lit]:translate-y-0 [&.lit]:border-[#9F1239]"
                >
                  <p className="text-[11px] font-mono tracking-widest text-[#9F1239] mb-2">
                    {s.tag}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">
                    {s.text}
                  </p>
                  <hr className="border-[#1e1e1e] my-3" />
                  <p className="text-[11px] font-mono text-[#444] flex items-center gap-2">
                    <span className="hidden w-1.5 h-1.5 rounded-full bg-[#9F1239] animate-ping" />
                    {s.status}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
