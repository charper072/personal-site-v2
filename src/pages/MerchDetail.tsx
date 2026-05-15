import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { merchItems } from "@/data/mockData";

const purchaseLinks = [
  { name: "Bandcamp", url: "#" },
  { name: "Official Store", url: "#" },
];

const MerchDetail = () => {
  const { slug } = useParams();
  const item = merchItems.find((m) => m.slug === slug);

  if (!item) return <div className="min-h-screen bg-background pt-28 px-6 text-foreground font-body">Product not found.</div>;

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/merch" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-body text-sm">
          <ArrowLeft size={16} /> Back to Merch
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="aspect-square rounded-lg overflow-hidden grain-overlay">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <div className="lg:sticky lg:top-28 lg:self-start space-y-10">
            <div>
              <span className="inline-block glass-card text-muted-foreground font-body text-xs font-semibold px-3 py-1 rounded-full mb-4">{item.category}</span>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mb-3 tracking-tight">{item.title}</h1>
              <p className="font-display text-foreground text-2xl">{item.price}</p>
            </div>
            <div className="h-[1px] bg-border" />
            <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>

            <div>
              <h2 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-5">Purchase</h2>
              <div className="space-y-3">
                {purchaseLinks.map((p) => (
                  <a key={p.name} href={p.url} className="flex items-center justify-between glass-card-hover rounded-lg p-4 group border-l-2 border-transparent hover:border-foreground/30 transition-all">
                    <span className="font-body text-foreground font-medium">{p.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-body text-muted-foreground text-sm font-semibold">{item.price}</span>
                      <ExternalLink size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
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

export default MerchDetail;
