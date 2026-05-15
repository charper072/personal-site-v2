import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { videos } from "@/data/mockData";

const Videos = () => (
  <div className="min-h-screen bg-background pt-28 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 tracking-tight">VIDEOS</h1>
      <div className="h-[2px] bg-border w-16 mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <motion.div
            key={v.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link to={`/videos/${v.slug}`} className="group block">
              <div className="aspect-video rounded-lg overflow-hidden relative grain-overlay">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75" />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-sm border-2 border-foreground/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-foreground/20 transition-all duration-300">
                    <Play size={24} className="text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-background/80 text-foreground font-body text-xs px-2 py-1 rounded">
                  {v.duration}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground mt-4 tracking-tight">{v.title}</h3>
              <p className="font-body text-muted-foreground text-xs uppercase tracking-[0.2em]">{v.type}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Videos;
