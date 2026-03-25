const cards = [
  {
    id: 1,
    title: "Design Systems",
    tag: "UI/UX",
    color: "#FF6B6B",
    emoji: "🎨",
  },
  {
    id: 2,
    title: "React Patterns",
    tag: "Frontend",
    color: "#4ECDC4",
    emoji: "⚛️",
  },
  {
    id: 3,
    title: "TypeScript",
    tag: "Language",
    color: "#FFE66D",
    emoji: "📘",
  },
  { id: 4, title: "Animations", tag: "Motion", color: "#A8E6CF", emoji: "✨" },
  { id: 5, title: "Performance", tag: "Optim.", color: "#DDA0DD", emoji: "⚡" },
  { id: 6, title: "Accessibility", tag: "A11y", color: "#F7DC6F", emoji: "♿" },
];

const Card = ({ title, tag, color, emoji }) => (
  <div
    style={{
      minWidth: "220px",
      height: "140px",
      borderRadius: "16px",
      background: `${color}22`,
      border: `1.5px solid ${color}66`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px",
      marginRight: "20px",
      boxSizing: "border-box",
      userSelect: "none",
    }}
  >
    <span style={{ fontSize: "32px" }}>{emoji}</span>
    <div>
      <div
        style={{
          fontSize: "13px",
          fontWeight: "600",
          letterSpacing: "0.08em",
          color: color,
          marginBottom: "4px",
          textTransform: "uppercase",
        }}
      >
        {tag}
      </div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#1a1a2e",
        }}
      >
        {title}
      </div>
    </div>
  </div>
);

export default function Test() {
  // Duplicate cards so the loop is seamless
  const allCards = [...cards, ...cards];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(135deg, #f0f4ff 0%, #faf0ff 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "800",
          color: "#1a1a2e",
          margin: 0,
        }}
      >
        Infinite Card Train 🚂
      </h1>

      {/* Viewport — clips the scrolling track */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          overflow: "hidden",
          padding: "16px 0",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Track — animates continuously, never pauses */}
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll-left 18s linear infinite",
          }}
        >
          {allCards.map((card, i) => (
            <Card key={i} {...card} />
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
  );
}
