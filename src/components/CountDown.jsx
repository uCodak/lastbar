import { useState, useEffect } from "react";

const TARGET = new Date("2026-07-01T00:00:00");

function getCountdown() {
  const now = new Date();

  const diff = TARGET - now;

  if (diff <= 0) return null;

  const totalMinutes = Math.floor(diff / 60000);
  const totalHours = Math.floor(diff / 3600000);
  const totalDays = Math.floor(diff / 86400000);
  const totalWeeks = Math.floor(totalDays / 7);
  const remDaysAfterWeeks = totalDays % 7;

  const m1 = now.getMonth(),
    y1 = now.getFullYear();
  let months = (2026 - y1) * 12 + (6 - m1);
  let remDays = 1 - now.getDate();
  if (remDays < 0) {
    months--;
    remDays += new Date(y1, m1 + 1, 0).getDate();
  }

  const start = new Date("2026-01-01T00:00:00");
  const progress = Math.max(
    0,
    Math.min(100, ((now - start) / (TARGET - start)) * 100),
  );

  return {
    months,
    remDays,
    totalWeeks,
    remDaysAfterWeeks,
    totalDays,
    totalHours,
    totalMinutes,
    progress,
    now,
  };
}

function CountDown() {
  const [data, setData] = useState(getCountdown);
  useEffect(() => {
    const id = setInterval(() => setData(getCountdown()), 10000);
    return () => clearInterval(id);
  }, []);

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "3rem", fontWeight: 500 }}>
        🎉 July 2026 is here!
      </div>
    );
  }

  const {
    months,
    remDays,
    totalWeeks,
    remDaysAfterWeeks,
    totalDays,
    totalHours,
    totalMinutes,

    now,
  } = data;
  return (
    <div className="mt-15">
      <div
        className="flex flex-col gap-3.5 py-2 px-4 max-w-lg mx-auto"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {/* LINE 1 — header */}
        <div className="flex items-center gap-2 justify-end">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] hidden sm:block"
            style={{ animation: "blink 2s infinite" }}
          />
          <p className="text-[#52525B] text-[10px] tracking-widest uppercase">
            Countdown to the{" "}
            <span className="text-[#71717A]">July 2026 Bar Exam</span>
          </p>
          <span className="text-[#3F3F46] hidden sm:block text-[10px]">|</span>
          <span className="text-[#3F3F46] text-[10px] hidden sm:block">
            {now.toLocaleDateString()}
          </span>
        </div>

        {/* LINE 2 — stats */}
        <div className="flex items-baseline justify-end gap-0">
          {/* Months — hidden on mobile */}
          <div className="hidden sm:flex items-baseline gap-1 pr-3.5 mr-3.5 border-r border-[#2A2A2E]">
            <span
              className="text-[26px] font-bold text-[#FF2D55] leading-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {months}
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#3F3F46]">
              mo
              <span className="block text-[8px] text-[#2D2D30]">
                {remDays}d
              </span>
            </span>
          </div>

          {/* Weeks — hidden on mobile */}
          <div className="hidden sm:flex items-baseline gap-1 pr-3.5 mr-3.5 border-r border-[#2A2A2E]">
            <span
              className="text-[26px] font-bold text-[#F43F6E] leading-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {totalWeeks}
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#3F3F46]">
              wk
              <span className="block text-[8px] text-[#2D2D30]">
                {remDaysAfterWeeks}d
              </span>
            </span>
          </div>

          {/* Days — always visible */}
          <div className="flex items-baseline gap-1 pr-3.5 mr-3.5 border-r border-[#2A2A2E]">
            <span
              className="text-[26px] font-bold text-[#E879A0] leading-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {totalDays.toLocaleString()}
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#3F3F46]">
              days
            </span>
          </div>

          {/* Hours — hidden on mobile */}
          <div className="hidden sm:flex items-baseline gap-1 pr-3.5 mr-3.5 border-r border-[#2A2A2E]">
            <span
              className="text-[20px] font-bold text-[#C084A8] leading-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {totalHours.toLocaleString()}
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#3F3F46]">
              hrs
            </span>
          </div>

          {/* Minutes — hidden on mobile */}
          <div className="hidden sm:flex items-baseline gap-1">
            <span
              className="text-[20px] font-bold text-[#9F6E9A] leading-none"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {totalMinutes.toLocaleString()}
            </span>
            <span className="text-[9px] tracking-widest uppercase text-[#3F3F46]">
              mins
            </span>
          </div>

          {/* Mobile-only: mo · wk · hrs · mins inline after days */}
          <div className="flex sm:hidden items-baseline gap-0">
            <div className="flex items-baseline gap-1 pl-3.5 ml-0 border-l border-[#2A2A2E]">
              <span className="text-xs font-bold text-[#FF2D55]">
                {months}m {remDays}d
              </span>
              <span className="text-[9px] text-[#3F3F46]">mo</span>
            </div>
            <span className="text-[#2A2A2E] text-[10px] mx-2">|</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-[#F43F6E]">
                {totalWeeks}w {remDaysAfterWeeks}d
              </span>
              <span className="text-[9px] text-[#3F3F46]">wk</span>
            </div>
            <span className="text-[#2A2A2E] text-[10px] mx-2">|</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-[#C084A8]">
                {totalHours.toLocaleString()}h
              </span>
              <span className="text-[9px] text-[#3F3F46]">hrs</span>
            </div>
            <span className="text-[#2A2A2E] text-[10px] mx-2">|</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-[#9F6E9A]">
                {totalMinutes.toLocaleString()}m
              </span>
              <span className="text-[9px] text-[#3F3F46]">min</span>
            </div>
          </div>
        </div>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;700&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.25} }
      `}</style>
      </div>
      <p className="border border-[#FF2D5530]"></p>
    </div>
  );
}
export default CountDown;
