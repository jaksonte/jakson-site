import { useState } from "react";
import Home from "./pages/Home";
import Current from "./pages/Current";
import Lab from "./pages/Lab";
import Garden from "./pages/Garden";
import AtlasPage from "./pages/Atlas";
import Index from "./pages/Index";
import FieldLogs from "./pages/FieldLogs";

const NAV = [
  { key: "home", label: "Home" },
  { key: "current", label: "Current" },
  { key: "lab", label: "Lab" },
  { key: "garden", label: "Garden" },
  { key: "atlas", label: "Atlas" },
  { key: "index", label: "Index" },
  { key: "fieldlogs", label: "Field Logs" },
];

const PAGES = {
  home: Home,
  current: Current,
  lab: Lab,
  garden: Garden,
  atlas: AtlasPage,
  index: Index,
  fieldlogs: FieldLogs,
};

export default function App() {
  const [page, setPage] = useState("home");
  const Page = PAGES[page];

  return (
    <div style={{ minHeight: "100vh", background: "#e8f1f8", fontFamily: "'Inter', sans-serif" }}>
      {/* Graph paper grid */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }} />

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "center", gap: "24px",
        padding: "10px 0",
        background: "rgba(232,241,248,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        {NAV.map(({ key, label }) => (
          <button key={key} onClick={() => setPage(key)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: page === key ? "#2a2a2a" : "#8a8a8a",
            fontWeight: page === key ? 600 : 400,
            borderBottom: page === key ? "1.5px solid #2a2a2a" : "1.5px solid transparent",
            paddingBottom: "1px",
            transition: "color 0.15s",
          }}>{label}</button>
        ))}
      </nav>

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 1, paddingTop: "48px" }}>
        <Page />
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "40px 0 24px",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "11px", color: "#8a8a8a",
        position: "relative", zIndex: 1,
      }}>
        Made with — by Jakson
      </div>
    </div>
  );
}
