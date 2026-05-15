import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { releases } from "@/data/mockData";

const platforms = [
  { name: "Apple Music", url: "#" },
  { name: "Spotify", url: "#" },
  { name: "Bandcamp", url: "#" },
  { name: "SoundCloud", url: "#" },
  { name: "YouTube Music", url: "#" },
];

const MusicDetail = () => {
  const { slug } = useParams();
  const release = releases.find((r) => r.slug === slug);

  if (!release) return <div className="min-h-screen bg-background pt-28 px-6 text-foreground font-body">Release not found.</div>;

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/music" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-body text-sm">
          <ArrowLeft size={16} /> Back to Music
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="aspect-square rounded-lg overflow-hidden grain-overlay">
              <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start space-y-10">
            <div>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-3 tracking-tight">{release.title}</h1>
              <p className="font-body text-muted-foreground text-lg">{release.type} · {release.year}</p>
            </div>
            <div className="h-[1px] bg-border" />
            <p className="font-body text-muted-foreground leading-relaxed">{release.description}</p>

            <div>
              <h2 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-5">Listen</h2>
              <div className="space-y-3">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    className="flex items-center justify-between glass-card-hover rounded-lg p-4 group border-l-2 border-transparent hover:border-foreground/30 transition-all"
                  >
                    <span className="font-body text-foreground font-medium">{p.name}</span>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicDetail;
