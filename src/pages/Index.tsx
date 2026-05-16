import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Music, ShoppingBag, Play, MapPin } from "lucide-react";
import heroConcert from "@/assets/hero-concert.jpg";

const latestAdditions = [
  { icon: Music, category: "Music", title: '"Silent Thunder" Single', detail: "Released Today", cta: "Listen Now", link: "/music/silent-thunder" },
  { icon: ShoppingBag, category: "Interests", title: "Tour 2024 Black T-Shirt", detail: "Just Dropped", cta: "Shop Now", link: "/merch/tour-2024-tshirt" },
  { icon: Play, category: "Video", title: '"Midnight Echo" Live', detail: "New Upload", cta: "Watch Now", link: "/videos/midnight-echo-live" },
  { icon: MapPin, category: "Tour", title: "Brooklyn, NY · Mar 15", detail: "Tickets Available", cta: "Get Tickets", link: "/tour" },
];

const roles = ["High Point", "Electronic", "Visionary", "Brooklyn", "Live"];

const Index = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Split-screen hero */}
    <div className="relative h-screen flex">
      {/* Left: Pure black with signature */}
      <div className="hidden lg:flex w-1/2 bg-background relative items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 px-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-script text-foreground/50 text-xl mb-6 italic"
          >
            Since 2026
          </motion.p>
          <h1 className="font-script text-foreground text-[8rem] xl:text-[10rem] leading-[0.85] -rotate-6 select-none">
            Harper
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-script text-foreground/60 text-2xl mt-8 italic"
          >
            Chris A. Harper
          </motion.p>
        </motion.div>

        {/* Scattered role labels */}
        {roles.map((role, i) => (
          <motion.span
            key={role}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
            className="absolute font-body text-foreground/30 text-xs uppercase tracking-[0.3em] select-none"
            style={{
              top: `${25 + i * 13}%`,
              right: `${8 + (i % 3) * 5}%`,
              transform: `rotate(${-90 + i * 5}deg)`,
            }}
          >
            {role}
          </motion.span>
        ))}
      </div>

      {/* Right: Full-bleed photo */}
      <div className="w-full lg:w-1/2 relative">
        <motion.img
          src={heroConcert}
          alt="Harper performing live"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Mobile title overlay */}
        <div className="lg:hidden absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6"
          >
            <p className="font-script text-foreground/50 text-lg mb-2 italic">Since 2026</p>
            <h1 className="font-script text-foreground text-7xl leading-[0.85] select-none">
              Harper
            </h1>
          </motion.div>
        </div>

        {/* Band name overlay on photo - desktop */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden lg:block absolute bottom-12 right-8 text-right"
        >
          <h2 className="font-display text-foreground text-6xl xl:text-7xl tracking-tight leading-none">
            HARPER
          </h2>
        </motion.div>
      </div>
    </div>

    {/* Latest Additions - Below fold */}
    <section className="relative bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-foreground text-4xl md:text-5xl tracking-tight mb-12"
        >
          LATEST ADDITIONS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {latestAdditions.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={item.link}
                className="glass-card rounded-lg p-6 block group hover:bg-[hsl(var(--glass)/0.12)] transition-all duration-300 h-full relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-4">
                  <item.icon size={14} className="text-muted-foreground" />
                  <span className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em]">{item.category}</span>
                </div>
                <h3 className="font-display text-foreground text-xl mb-1 tracking-tight">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm mb-5">{item.detail}</p>
                <span className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-body font-semibold group-hover:bg-foreground/90 transition-colors">
                  {item.cta}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Index;
