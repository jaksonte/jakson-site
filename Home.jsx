import { profile, currently, projects, thoughts, about } from "../data/content";
import { PageWrap, SectionLabel, Card, StatusBadge, Label, BodyText, Bullet, MetaLine } from "../components/UI";

export default function Home() {
  return (
    <PageWrap>
      {/* Profile */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px", marginTop: "12px" }}>
        <div style={{
          width: "56px", height: "56px", borderRadius: "50%",
          background: profile.avatar ? `url(${profile.avatar}) center/cover` : "#d0dce8",
          border: "2px solid rgba(0,0,0,0.08)",
          flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "22px", color: "#8a8a8a",
        }}>
          {!profile.avatar && "👤"}
        </div>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", fontWeight: 600, color: "#2a2a2a" }}>{profile.name}</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#5a5a5a" }}>{profile.title}</div>
        </div>
      </div>

      {/* Currently */}
      <SectionLabel>Currently</SectionLabel>
      <Card>
        <Label>Working on</Label>
        <BodyText>{currently.workingOn}</BodyText>
        <Label>Reading</Label>
        <BodyText>{currently.reading}</BodyText>
        <Label>Watching</Label>
        <BodyText>{currently.watching}</BodyText>
        <Label>Listening to</Label>
        <BodyText>{currently.listeningTo}</BodyText>
        <Label>Location</Label>
        <BodyText>{profile.location}</BodyText>
      </Card>

      {/* Projects */}
      <SectionLabel>Projects</SectionLabel>
      {projects.map((p, i) => (
        <Card key={i}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#2a2a2a" }}>{p.title}</div>
            <StatusBadge status={p.status} />
          </div>
          <MetaLine>{p.date}</MetaLine>
          <BodyText style={{ marginBottom: "8px" }}>{p.description}</BodyText>
          {p.bullets.map((b, j) => <Bullet key={j}>{b}</Bullet>)}
        </Card>
      ))}
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#8a8a8a", margin: "8px 0 0 2px" }}>
        More projects documented in lab notebook vol. 3-7
      </div>

      {/* Thoughts */}
      <SectionLabel>Thoughts</SectionLabel>
      {thoughts.map((t, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <MetaLine>{t.date}</MetaLine>
          <BodyText>{t.text}</BodyText>
        </div>
      ))}

      {/* About */}
      <SectionLabel>About</SectionLabel>
      <BodyText>{about}</BodyText>
    </PageWrap>
  );
}
