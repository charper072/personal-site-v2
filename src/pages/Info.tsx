import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { bandBio, bandMembers } from "@/data/mockData";
import bandPortrait from "@/assets/band-portrait.jpg";

const Info = () => (
  <div className="min-h-screen bg-background pt-28 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 tracking-tight">INFO</h1>
      <div className="h-[2px] bg-border w-16 mb-14" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <p className="font-body text-muted-foreground leading-relaxed text-lg">{bandBio}</p>

          <div>
            <h2 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-5">Members</h2>
            <div className="space-y-3">
              {bandMembers.map((m) => (
                <div key={m.name} className="flex items-baseline gap-3">
                  <span className="font-body text-foreground font-medium">{m.name}</span>
                  <span className="font-body text-muted-foreground text-sm">— {m.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-border" />

          <div className="glass-card rounded-lg p-6 space-y-4">
            <h2 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">Contact</h2>
            <a href="mailto:management@shrineband.com" className="flex items-center gap-3 font-body text-foreground hover:text-muted-foreground transition-colors">
              <Mail size={18} /> management@shrineband.com
            </a>
            <a href="mailto:press@shrineband.com" className="flex items-center gap-3 font-body text-foreground hover:text-muted-foreground transition-colors">
              <Mail size={18} /> press@shrineband.com
            </a>
          </div>

          <div>
            <h2 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-5">Follow</h2>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full glass-card-hover flex items-center justify-center text-foreground"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:sticky lg:top-28"
        >
          <div className="aspect-[3/4] rounded-lg overflow-hidden grain-overlay">
            <img src={bandPortrait} alt="Shrine band photo" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Info;
