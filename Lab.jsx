import { labNotes } from "../data/content";
import { PageWrap, PageTitle, SectionLabel, Card, StatusBadge, Label, BodyText, Bullet, MetaLine } from "../components/UI";

function LabCard({ project }) {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, color: "#2a2a2a" }}>{project.title}</div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#8a8a8a" }}>{project.date || project.startDate}</div>
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", color: "#8a8a8a", marginBottom: "14px" }}>
        Status: {project.status}{project.lastUpdated ? ` • Last updated: ${project.lastUpdated}` : ""}
      </div>

      {project.overview && (
        <>
          <Label>Overview</Label>
          <BodyText style={{ marginBottom: "12px" }}>{project.overview}</BodyText>
        </>
      )}

      {project.technicalDetails?.length > 0 && (
        <>
          <Label>Technical Details</Label>
          {project.technicalDetails.map((d, i) => <Bullet key={i}>{d}</Bullet>)}
        </>
      )}

      {project.keySpecs?.length > 0 && (
        <>
          <Label>Key Specs</Label>
          {project.keySpecs.map((s, i) => <Bullet key={i}>{s}</Bullet>)}
        </>
      )}

      {project.currentResults && (
        <>
          <Label>Current Results</Label>
          <BodyText>{project.currentResults}</BodyText>
        </>
      )}

      {project.lessonsLearned?.length > 0 && (
        <>
          <Label>Lessons Learned</Label>
          {project.lessonsLearned.map((l, i) => <Bullet key={i}>{l}</Bullet>)}
        </>
      )}

      {project.nextSteps?.length > 0 && (
        <>
          <Label>Next Steps</Label>
          {project.nextSteps.map((s, i) => <Bullet key={i}>{s}</Bullet>)}
        </>
      )}
    </Card>
  );
}

export default function Lab() {
  return (
    <PageWrap>
      <PageTitle title="Lab Notes" subtitle="Detailed records of ongoing and archived projects." />

      <SectionLabel>Active</SectionLabel>
      {labNotes.active.map((p, i) => <LabCard key={i} project={p} />)}

      <SectionLabel>Completed</SectionLabel>
      {labNotes.completed.map((p, i) => <LabCard key={i} project={p} />)}
    </PageWrap>
  );
}
