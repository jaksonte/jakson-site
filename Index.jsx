import { indexPage } from "../data/content";
import { PageWrap, PageTitle, SectionLabel, BodyText, Bullet } from "../components/UI";

function ExpEntry({ item }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#2a2a2a" }}>{item.title}</div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#8a8a8a" }}>{item.dates}</div>
      </div>
      {item.company && (
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#c9a88f", margin: "2px 0 6px" }}>{item.company}</div>
      )}
      {item.description && <BodyText style={{ marginBottom: "6px" }}>{item.description}</BodyText>}
      {item.bullets?.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
    </div>
  );
}

export default function Index() {
  const d = indexPage;
  return (
    <PageWrap>
      <PageTitle title="Index" subtitle="A structured record of work and learning." />

      <SectionLabel>Experience</SectionLabel>
      {d.experience.map((e, i) => <ExpEntry key={i} item={e} />)}

      <SectionLabel>Selected Projects</SectionLabel>
      {d.selectedProjects.map((p, i) => <ExpEntry key={i} item={p} />)}

      <SectionLabel>Skills & Tools</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {[
          { label: "Hardware", items: d.skills.hardware },
          { label: "Firmware & Software", items: d.skills.firmwareAndSoftware },
          { label: "Test & Measurement", items: d.skills.testAndMeasurement },
          { label: "Fabrication", items: d.skills.fabrication },
        ].map(({ label, items }) => (
          <div key={label}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", color: "#8a8a8a", letterSpacing: "0.05em", marginBottom: "8px" }}>{label}</div>
            {items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "6px", margin: "3px 0" }}>
                <span style={{ color: "#c9a88f", fontSize: "11px" }}>•</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#5a5a5a" }}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <SectionLabel>Education</SectionLabel>
      {d.education.map((e, i) => <ExpEntry key={i} item={{ ...e, title: e.degree, company: e.school }} />)}

      <div style={{ textAlign: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#8a8a8a", marginTop: "40px" }}>
        {d.contactNote}
      </div>
    </PageWrap>
  );
}
