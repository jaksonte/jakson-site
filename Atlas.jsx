import { atlas } from "../data/content";
import { PageWrap, PageTitle, SectionLabel, Card, BodyText, MetaLine } from "../components/UI";

// Convert lat/lng to SVG coordinates on a simple equirectangular projection
function latLngToXY(lat, lng, width = 760, height = 320) {
  const x = ((lng + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
}

const CONTINENTS = [
  // North America
  "M 120,60 L 100,90 L 80,110 L 90,140 L 120,155 L 150,160 L 175,155 L 185,130 L 190,100 L 175,70 L 155,50 Z",
  // South America
  "M 150,175 L 135,200 L 130,240 L 145,275 L 165,285 L 180,270 L 190,240 L 185,205 L 170,180 Z",
  // Europe
  "M 350,55 L 335,70 L 345,90 L 365,95 L 385,85 L 390,65 L 375,50 Z",
  // Africa
  "M 355,105 L 340,130 L 340,170 L 355,205 L 375,215 L 395,210 L 410,185 L 415,150 L 405,115 L 385,100 Z",
  // Asia
  "M 395,45 L 420,40 L 480,50 L 530,60 L 560,80 L 565,110 L 545,130 L 500,140 L 465,130 L 430,115 L 400,90 L 385,65 Z",
  // Australia
  "M 530,190 L 515,210 L 520,235 L 545,245 L 570,240 L 580,220 L 570,200 L 550,190 Z",
];

export default function AtlasPage() {
  return (
    <PageWrap>
      <PageTitle title="Atlas" subtitle="Places where these notes were written." />

      {/* Map */}
      <div style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "6px",
        overflow: "hidden",
        marginBottom: "32px",
      }}>
        <svg viewBox="0 0 760 320" style={{ width: "100%", display: "block", background: "#f5f0e8" }}>
          {/* Ocean texture */}
          <defs>
            <pattern id="oceanGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(184,212,232,0.5)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="760" height="320" fill="url(#oceanGrid)" />

          {/* Continents */}
          {CONTINENTS.map((d, i) => (
            <path key={i} d={d} fill="#e0d8c8" stroke="#c8bea8" strokeWidth="1" />
          ))}

          {/* Location pins */}
          {atlas.entries.map((entry, i) => {
            const { x, y } = latLngToXY(entry.coords.lat, entry.coords.lng);
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="5" fill="#c9a88f" stroke="#fff" strokeWidth="1.5" opacity="0.9" />
                <circle cx={x} cy={y} r="10" fill="#c9a88f" opacity="0.2" />
              </g>
            );
          })}
        </svg>
        <div style={{
          textAlign: "center",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "10px",
          color: "#8a8a8a",
          padding: "8px",
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}>
          Not to scale — drawn from memory
        </div>
      </div>

      <SectionLabel>Entries</SectionLabel>
      {atlas.entries.map((entry, i) => (
        <Card key={i}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#2a2a2a" }}>{entry.location}</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#8a8a8a" }}>{entry.date}</div>
          </div>
          <BodyText style={{ marginTop: "6px" }}>{entry.description}</BodyText>
        </Card>
      ))}
    </PageWrap>
  );
}
