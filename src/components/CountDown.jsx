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
    progress,
    now,
  } = data;
  return (
    <div className="mt-15">
      <div className="flex flex-col items-center gap-4 py-6 px-4 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] hidden sm:block"
            style={{ boxShadow: "0 0 6px #FF2D55" }}
          />
          <p className="text-[#71717B] text-xs tracking-widest uppercase">
            Countdown to the
            <span className="text-[#A1A1AA] font-medium mx-1">
              July 2026 Bar Exam
            </span>
          </p>
          <span className="text-[#3F3F46] hidden sm:block text-xs">|</span>
          <span className="text-[#52525B] text-xs">
            {now.toLocaleDateString()}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-stretch gap-1.5 sm:gap-2 justify-center w-full">
          {/* Months — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-lg px-3 py-2.5 flex-1">
            <span
              className="text-2xl font-semibold text-[#FF2D55]"
              style={{ textShadow: "0 0 10px #FF2D5570" }}
            >
              {months}
            </span>
            <span className="text-[#3F3F46] text-[10px] uppercase tracking-widest mt-0.5">
              Months
            </span>
            <span className="text-[#3F3F46] text-[10px]">{remDays}d left</span>
          </div>

          {/* Weeks — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-lg px-3 py-2.5 flex-1">
            <span
              className="text-2xl font-semibold text-[#F43F6E]"
              style={{ textShadow: "0 0 8px #F43F6E50" }}
            >
              {totalWeeks}
            </span>
            <span className="text-[#3F3F46] text-[10px] uppercase tracking-widest mt-0.5">
              Weeks
            </span>
            <span className="text-[#3F3F46] text-[10px]">
              {remDaysAfterWeeks}d left
            </span>
          </div>

          {/* Days — always visible */}
          <div className="flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-lg px-4 py-2.5 w-full sm:w-auto sm:flex-1">
            <span className="text-3xl sm:text-2xl font-semibold text-[#E879A0]">
              {totalDays.toLocaleString()}
            </span>
            <span className="text-[#3F3F46] text-[10px] uppercase tracking-widest mt-0.5">
              Days
            </span>

            {/* Mobile-only sub info */}
            <div className="flex sm:hidden items-center gap-4 mt-2 pt-2 border-t border-[#27272A] w-full justify-center">
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium text-[#FF2D55]">
                  {months}m {remDays}d
                </span>
                <span className="text-[#3F3F46] text-[10px]">Months</span>
              </div>
              <span className="text-[#27272A] text-xs">|</span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium text-[#F43F6E]">
                  {totalWeeks}w {remDaysAfterWeeks}d
                </span>
                <span className="text-[#3F3F46] text-[10px]">Weeks</span>
              </div>
              <span className="text-[#27272A] text-xs">|</span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium text-[#C084A8]">
                  {totalHours.toLocaleString()}h
                </span>
                <span className="text-[#3F3F46] text-[10px]">Hours</span>
              </div>
              <span className="text-[#27272A] text-xs">|</span>
              <div className="flex flex-col items-center">
                <span className="text-xs font-medium text-[#9F6E9A]">
                  {totalMinutes.toLocaleString()}m
                </span>
                <span className="text-[#3F3F46] text-[10px]">Mins</span>
              </div>
            </div>
          </div>

          {/* Hours — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-lg px-3 py-2.5 flex-1">
            <span className="text-2xl font-semibold text-[#C084A8]">
              {totalHours.toLocaleString()}
            </span>
            <span className="text-[#3F3F46] text-[10px] uppercase tracking-widest mt-0.5">
              Hours
            </span>
          </div>

          {/* Minutes — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-lg px-3 py-2.5 flex-1">
            <span className="text-2xl font-semibold text-[#9F6E9A]">
              {totalMinutes.toLocaleString()}
            </span>
            <span className="text-[#3F3F46] text-[10px] uppercase tracking-widest mt-0.5">
              Mins
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex flex-col gap-1">
          <div className="w-full h-1 bg-[#27272A] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress.toFixed(1)}%`,
                background:
                  "linear-gradient(to right, #FF2D55, #F43F6E, #C084A8)",
                boxShadow: "0 0 6px #FF2D5550",
              }}
            />
          </div>
          <div className="flex justify-between text-[#3F3F46] text-[10px]">
            <span>Jan 2026</span>
            <span className="text-[#FF2D55]">{progress.toFixed(1)}%</span>
            <span>Jul 2026</span>
          </div>
        </div>
      </div>
      <p className="border border-[#FF2D5530]"></p>
    </div>
  );
}
export default CountDown;
