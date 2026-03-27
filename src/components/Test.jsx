import { useEffect, useRef, useState } from "react";
import { FileSearch, ShieldCheck, Zap, Globe } from "lucide-react";

const items = [
  {
    icon: <FileSearch size={28} />,
    title: "Document Analysis",
    description:
      "Scan and extract key insights from any document instantly with precision.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Protocol",
    description:
      "End-to-end encryption ensuring your data stays protected at every layer.",
  },
  {
    icon: <Zap size={28} />,
    title: "Fast Execution",
    description:
      "Lightning-fast processing pipeline built for real-time performance.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Reach",
    description:
      "Deploy anywhere in the world with multi-region support out of the box.",
  },
];
function BlinkingLabel({ inView }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] hidden sm:block"
        style={{ animation: inView ? "blink 2s infinite" : "none" }}
      />
      <p className="jetbrain text-sm text-white">PHASE_01_INITIATED</p>
    </div>
  );
}
function Row({ item, index }) {
  const rowRef = useRef(null);
  const [inView, setInView] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  const cardClass = `
    border border-white/20 rounded-xl p-8 flex items-center gap-6 bg-white/5 relative group
    shadow-sm hover:shadow-[0_20px_40px_rgba(159,18,57,0.12)]
    hover:border-rose-900/25 transition-all duration-500
    ${inView ? "-translate-y-1.5 scale-[1.02] shadow-[0_20px_40px_rgba(159,18,57,0.12)]" : "translate-y-0 scale-100"}
  `;

  const card = (
    <div className={cardClass}>
      <p
        className={`
          absolute top-10 text-[#9F1239] flex items-center gap-2 px-4 py-2.5 z-50 w-fit mb-4 rounded-xl
          bg-zinc-200 origin-left transition-all duration-300
          ${isEven ? "-right-10" : "-left-10"}
          ${
            inView
              ? "bg-[#9F1239] -rotate-3 scale-110 text-[#ffffff]"
              : "bg-zinc-200 rotate-0 scale-100 text-[#9F1239]"
          }
        `}
      >
        <span
          className={`text-xl transition duration-300 ${inView ? "brightness-[10]" : "brightness-100"}`}
        >
          {item.icon}
        </span>
      </p>
      <div>
        <h2 className="text-white font-semibold text-lg mb-1">{item.title}</h2>
        <p className="text-white/50 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
      <BlinkingLabel inView={inView} />
    </div>
  );

  return (
    <div ref={rowRef} className="grid grid-cols-2 mb-8">
      {isEven ? (
        <>
          {card}
          <div />
        </>
      ) : (
        <>
          <div />
          {card}
        </>
      )}
    </div>
  );
}

export default function Test() {
  return (
    <div className="bg-black py-16 px-6">
      {items.map((item, index) => (
        <Row key={index} item={item} index={index} />
      ))}
    </div>
  );
}
