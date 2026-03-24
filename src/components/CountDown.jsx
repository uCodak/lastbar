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
      <div className="w-[80%] mx-auto p-2">
        <p className="text-center">
          Countdown to the July 2026 Bar Exam | Today:{" "}
          {now.toLocaleDateString()}
        </p>
        <p>
          Months: {months}m {remDays}d &nbsp;|&nbsp; Weeks: {totalWeeks}w{" "}
          {remDaysAfterWeeks}d &nbsp;|&nbsp; Days: {totalDays} &nbsp;|&nbsp;
          Hours: {totalHours} &nbsp;|&nbsp; Mins: {totalMinutes}
        </p>
        <p>Progress: {progress.toFixed(1)}%</p>
      </div>
      <div className="bg-[url('https://images.unsplash.com/photo-1543252358-f20f9c57bafe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxibGFjayUyMGJhY2tncm91bmQlMjBncmlkJTIwYW5kJTIwbW9kZXJufGVufDB8fDB8fHww')] w-full h-250 bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}
export default CountDown;
