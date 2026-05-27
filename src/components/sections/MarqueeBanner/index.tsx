"use client";

const gradientText: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontSize: "30px",
  fontWeight: "700",
  background: "linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  whiteSpace: "nowrap",
  flexShrink: 0,
  display: "inline-block",
};

const regularText: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontSize: "30px",
  fontWeight: "700",
  color: "#03121A",
  whiteSpace: "nowrap",
  flexShrink: 0,
  display: "inline-block",
};

const vectorFilter: React.CSSProperties = {
  flexShrink: 0,
  display: "inline-block",
  filter: "brightness(0) saturate(100%) invert(5%) sepia(50%) saturate(800%) hue-rotate(165deg)",
};

const waveStyle: React.CSSProperties = {
  flexShrink: 0,
  display: "inline-block",
};

function Strip() {
  return (
    <>
      <img src="/images/icons/Vector.png" alt="*" width="24" height="24" style={vectorFilter} />
      <span style={gradientText}>N7</span>
      <img src="/images/icons/Vector.png" alt="*" width="24" height="24" style={vectorFilter} />
      <span style={regularText}>Say</span>
      <img src="/images/icons/hand-wave-animation-Y3i4NmO8TS.svg" alt="👋" width="34" height="34" className="wave-icon" />
      <span style={regularText}>to the new way of banking</span>

      <img src="/images/icons/Vector.png" alt="*" width="24" height="24" style={vectorFilter} />
      <span style={gradientText}>CB7</span>
      <img src="/images/icons/Vector.png" alt="*" width="24" height="24" style={vectorFilter} />
      <span style={regularText}>Say</span>
      <img src="/images/icons/hand-wave-animation-Y3i4NmO8TS.svg" alt="👋" width="34" height="34" className="wave-icon" />
      <span style={regularText}>to the new way of banking</span>
    </>
  );
}

export function MarqueeBanner() {
  return (
    <section
      style={{ width: "100%", background: "#FFFFFF", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", overflow: "hidden", padding: "20px 0" }}
    >
      <style>{`
        @keyframes marquee-x {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes wave-hand {
          0%   { transform: rotate(0deg); }
          15%  { transform: rotate(20deg); }
          30%  { transform: rotate(-10deg); }
          45%  { transform: rotate(20deg); }
          60%  { transform: rotate(-5deg); }
          75%  { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
        .marquee-wrap {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          white-space: nowrap;
          animation: marquee-x 32s linear infinite;
          will-change: transform;
        }
        .wave-icon {
          display: inline-block;
          flex-shrink: 0;
          transform-origin: 70% 80%;
          animation: wave-hand 2s ease-in-out infinite;
        }
      `}</style>

      <div className="marquee-wrap">
        <Strip />
        
        <Strip />
      </div>
    </section>
  );
}
