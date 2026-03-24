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
    <div>
      <div className="flex flex-col items-center gap-6 py-8 px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center">
          <span
            className="w-2 h-2 rounded-full bg-[#FF2D55] hidden sm:block"
            style={{ boxShadow: "0 0 8px #FF2D55" }}
          />
          <p className="text-[#A1A1AA] text-xs sm:text-sm tracking-widest uppercase">
            Countdown to the
            <span className="text-white font-semibold mx-1">
              July 2026 Bar Exam
            </span>
          </p>
          <span className="text-[#3F3F46] hidden sm:block">|</span>
          <span className="text-[#71717B] text-xs sm:text-sm">
            {now.toLocaleDateString()}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center w-full">
          {/* Months — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-3">
            <span
              className="text-4xl font-bold text-[#FF2D55]"
              style={{ textShadow: "0 0 12px #FF2D5580, 0 0 24px #FF2D5540" }}
            >
              {months}
            </span>
            <span className="text-[#52525B] text-xs uppercase tracking-widest mt-1">
              Months
            </span>
            <span className="text-[#71717B] text-xs">{remDays} days left</span>
          </div>

          <span className="text-[#27272A] text-2xl font-thin hidden sm:block">
            |
          </span>

          {/* Weeks — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-3">
            <span
              className="text-4xl font-bold text-[#F43F6E]"
              style={{ textShadow: "0 0 10px #F43F6E60" }}
            >
              {totalWeeks}
            </span>
            <span className="text-[#52525B] text-xs uppercase tracking-widest mt-1">
              Weeks
            </span>
            <span className="text-[#71717B] text-xs">
              {remDaysAfterWeeks} days left
            </span>
          </div>

          <span className="text-[#27272A] text-2xl font-thin hidden sm:block">
            |
          </span>

          {/* Days — always visible, larger on mobile */}
          <div className="flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-xl px-6 py-4 sm:px-5 sm:py-3 w-full sm:w-auto">
            <span className="text-5xl sm:text-4xl font-bold text-[#E879A0]">
              {totalDays.toLocaleString()}
            </span>
            <span className="text-[#52525B] text-xs uppercase tracking-widest mt-1">
              Days
            </span>

            {/* Mobile-only sub info */}
            <div className="flex sm:hidden items-center gap-3 mt-3 pt-3 border-t border-[#27272A] w-full justify-center">
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-[#FF2D55]">
                  {months}m {remDays}d
                </span>
                <span className="text-[#52525B] text-xs">Months</span>
              </div>
              <span className="text-[#27272A]">|</span>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-[#F43F6E]">
                  {totalWeeks}w {remDaysAfterWeeks}d
                </span>
                <span className="text-[#52525B] text-xs">Weeks</span>
              </div>
            </div>
          </div>

          <span className="text-[#27272A] text-2xl font-thin hidden sm:block">
            |
          </span>

          {/* Hours — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-3">
            <span className="text-4xl font-bold text-[#C084A8]">
              {totalHours.toLocaleString()}
            </span>
            <span className="text-[#52525B] text-xs uppercase tracking-widest mt-1">
              Hours
            </span>
          </div>

          <span className="text-[#27272A] text-2xl font-thin hidden sm:block">
            |
          </span>

          {/* Minutes — hidden on mobile */}
          <div className="hidden sm:flex flex-col items-center bg-[#18181B] border border-[#27272A] rounded-xl px-5 py-3">
            <span className="text-4xl font-bold text-[#9F6E9A]">
              {totalMinutes.toLocaleString()}
            </span>
            <span className="text-[#52525B] text-xs uppercase tracking-widest mt-1">
              Minutes
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md flex flex-col gap-1 px-2 sm:px-0">
          <div className="w-full h-1.5 bg-[#27272A] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress.toFixed(1)}%`,
                background:
                  "linear-gradient(to right, #FF2D55, #F43F6E, #C084A8)",
                boxShadow: "0 0 8px #FF2D5560",
              }}
            />
          </div>
          <div className="flex justify-between text-[#3F3F46] text-xs">
            <span>Jan 2026</span>
            <span
              className="text-[#FF2D55] font-medium"
              style={{ textShadow: "0 0 8px #FF2D5560" }}
            >
              {progress.toFixed(1)}%
            </span>
            <span>Jul 2026</span>
          </div>
        </div>
      </div>
      <p className="border border-[#FF2D55]"></p>
      {/*background section*/}
      <div className="bg-[url('https://images.unsplash.com/photo-1543252358-f20f9c57bafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxibGFjayUyMGJhY2tncm91bmQlMjBncmlkJTIwYW5kJTIwbW9kZXJufGVufDB8fDB8fHww')] w-full h-250 bg-cover bg-center bg-no-repeat">
        <p>ggdgdgdg</p>
      </div>
    </div>
  );
}
export default CountDown;
