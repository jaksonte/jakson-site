import { thoughtGarden } from "../data/content";
import { PageWrap, PageTitle, BodyText, MetaLine } from "../components/UI";

export default function Garden() {
  return (
    <PageWrap>
      <PageTitle title="Thought Garden" subtitle="Brief reflections and observations. Not polished, just preserved." />

      {thoughtGarden.map((t, i) => (
        <div key={i} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: i < thoughtGarden.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
          <MetaLine>{t.date}</MetaLine>
          <BodyText>{t.text}</BodyText>
        </div>
      ))}
    </PageWrap>
  );
}
