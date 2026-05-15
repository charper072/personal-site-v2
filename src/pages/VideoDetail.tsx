import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";
import { videos } from "@/data/mockData";

const VideoDetail = () => {
  const { slug } = useParams();
  const video = videos.find((v) => v.slug === slug);

  if (!video) return <div className="min-h-screen bg-background pt-28 px-6 text-foreground font-body">Video not found.</div>;

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/videos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 font-body text-sm">
          <ArrowLeft size={16} /> Back to Videos
        </Link>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="aspect-video rounded-lg overflow-hidden relative bg-secondary grain-overlay">
            <img src={video.image} alt={video.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-foreground/10 backdrop-blur-sm border-2 border-foreground/80 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Play size={32} className="text-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-10">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3 tracking-tight">{video.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground font-body text-sm mb-4">
            <span>{video.type}</span>
            <span>{video.duration}</span>
          </div>
          <div className="h-[1px] bg-border mb-6" />
          <p className="font-body text-muted-foreground leading-relaxed">
            Experience the visual storytelling of Harper. This {video.type.toLowerCase()} captures the raw energy and emotion of our creative process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
