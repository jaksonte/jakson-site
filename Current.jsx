import { currentPage } from "../data/content";
import { PageWrap, PageTitle, SectionLabel, Card, Label, BodyText, Bullet, MetaLine } from "../components/UI";

export default function Current() {
  const d = currentPage;
  return (
    <PageWrap>
      <PageTitle
        title="Current"
        subtitle="What's happening right now. Updated when things change."
        meta={`Last updated: ${d.lastUpdated}`}
      />

      <SectionLabel>Building</SectionLabel>
      {d.building.map((b, i) => (
        <Card key={i}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#2a2a2a", marginBottom: "6px" }}>{b.title}</div>
          <BodyText style={{ marginBottom: "10px" }}>{b.description}</BodyText>
          {b.thisWeek.length > 0 && (
            <>
              <Label>This week</Label>
              {b.thisWeek.map((w, j) => (
                <div key={j} style={{ display: "flex", gap: "8px", margin: "3px 0" }}>
                  <span style={{ color: "#c9a88f" }}>•</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", color: "#5a5a5a", lineHeight: 1.6 }}>{w}</span>
                </div>
              ))}
            </>
          )}
        </Card>
      ))}

      <SectionLabel>Learning</SectionLabel>
      {d.learning.map((l, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#2a2a2a", marginBottom: "4px" }}>{l.title}</div>
          <BodyText>{l.description}</BodyText>
        </div>
      ))}

      <SectionLabel>Thinking About</SectionLabel>
      <Card>
        {d.thinkingAbout.map((t, i) => (
          <BodyText key={i} style={{ marginBottom: i < d.thinkingAbout.length - 1 ? "12px" : 0 }}>{t}</BodyText>
        ))}
      </Card>

      <SectionLabel>Enjoying</SectionLabel>
      <Card>
        <Label>Reading</Label>
        <BodyText>{d.enjoying.reading}</BodyText>
        <Label>Watching</Label>
        <BodyText>{d.enjoying.watching}</BodyText>
        <Label>Listening to</Label>
        <BodyText>{d.enjoying.listeningTo}</BodyText>
        <Label>Eating</Label>
        <BodyText>{d.enjoying.eating}</BodyText>
        <Label>Rituals</Label>
        <BodyText>{d.enjoying.rituals}</BodyText>
      </Card>

      <SectionLabel>Tools on the Desk</SectionLabel>
      <Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 24px" }}>
          {d.toolsOnDesk.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ color: "#c9a88f", fontSize: "10px" }}>●</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#5a5a5a" }}>{t}</span>
            </div>
          ))}
        </div>
      </Card>
    </PageWrap>
  );
}
