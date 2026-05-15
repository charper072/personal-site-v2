import { releases } from "@/data/mockData";
import GridCard from "@/components/GridCard";

const Music = () => (
  <div className="min-h-screen bg-background pt-28 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 tracking-tight">MUSIC</h1>
      <div className="h-[2px] bg-border w-16 mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
        {releases.map((r, i) => (
          <GridCard
            key={r.slug}
            to={`/music/${r.slug}`}
            image={r.image}
            title={r.title}
            subtitle={`${r.type} · ${r.year}`}
            description={r.description}
            index={i}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Music;
