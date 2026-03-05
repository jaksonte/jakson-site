import { fieldLogs } from "../data/content";
import { PageWrap, PageTitle, BodyText, MetaLine } from "../components/UI";

export default function FieldLogs() {
  return (
    <PageWrap>
      <PageTitle title="Field Logs" subtitle="Occasional notes from life outside the workshop." />

      {fieldLogs.map((log, i) => (
        <div key={i} style={{ marginBottom: "48px" }}>
          <MetaLine>{log.date}</MetaLine>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 600, color: "#2a2a2a", margin: "2px 0 12px" }}>
            {log.title}
          </h2>
          <div style={{
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "6px",
            padding: "16px 20px",
          }}>
            {log.paragraphs.map((p, j) => (
              <p key={j} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13.5px",
                color: "#2a2a2a",
                lineHeight: 1.7,
                margin: j < log.paragraphs.length - 1 ? "0 0 14px" : 0,
              }}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </PageWrap>
  );
}
