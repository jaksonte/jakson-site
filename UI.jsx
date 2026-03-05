// Shared layout & UI components

export const PageWrap = ({ children }) => (
  <div style={{ maxWidth: "640px", margin: "0 auto", padding: "48px 24px 80px" }}>
    {children}
  </div>
);

export const PageTitle = ({ title, subtitle, meta }) => (
  <div style={{ marginBottom: "40px" }}>
    <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: "22px", fontWeight: 600, color: "#2a2a2a", margin: "0 0 4px" }}>{title}</h1>
    {subtitle && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#5a5a5a", margin: 0 }}>{subtitle}</p>}
    {meta && <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#8a8a8a", margin: "4px 0 0" }}>{meta}</p>}
  </div>
);

export const SectionLabel = ({ children }) => (
  <div style={{
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#8a8a8a",
    margin: "36px 0 12px",
    paddingBottom: "8px",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  }}>{children}</div>
);

export const Card = ({ children, style = {} }) => (
  <div style={{
    background: "#fff",
    borderRadius: "6px",
    border: "1px solid rgba(0,0,0,0.08)",
    padding: "16px 20px",
    marginBottom: "12px",
    ...style,
  }}>{children}</div>
);

export const StatusBadge = ({ status }) => {
  const colors = {
    ACTIVE: { bg: "#e8f4e8", color: "#3a7a3a" },
    COMPLETE: { bg: "#e8eef8", color: "#3a5a8a" },
    ARCHIVED: { bg: "#f0f0f2", color: "#6a6a7a" },
  };
  const c = colors[status] || colors.ARCHIVED;
  return (
    <span style={{
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: "9px",
      fontWeight: 500,
      letterSpacing: "0.08em",
      padding: "2px 7px",
      borderRadius: "3px",
      background: c.bg,
      color: c.color,
      textTransform: "uppercase",
    }}>{status}</span>
  );
};

export const MetaLine = ({ children }) => (
  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#8a8a8a", marginBottom: "6px" }}>{children}</div>
);

export const Label = ({ children }) => (
  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", color: "#8a8a8a", letterSpacing: "0.05em", marginBottom: "2px", marginTop: "12px" }}>{children}</div>
);

export const BodyText = ({ children, style = {} }) => (
  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", color: "#2a2a2a", lineHeight: 1.65, margin: "4px 0 0", ...style }}>{children}</p>
);

export const Bullet = ({ children }) => (
  <div style={{ display: "flex", gap: "8px", margin: "3px 0" }}>
    <span style={{ color: "#8a8a8a", fontFamily: "'IBM Plex Mono', monospace", fontSize: "13px" }}>—</span>
    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", color: "#5a5a5a", lineHeight: 1.6 }}>{children}</span>
  </div>
);

export const Divider = () => (
  <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", margin: "28px 0" }} />
);
