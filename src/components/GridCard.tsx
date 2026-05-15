import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface GridCardProps {
  to: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  index: number;
  extra?: React.ReactNode;
}

const GridCard = ({ to, image, title, subtitle, description, index, extra }: GridCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Link to={to} className="group block">
      <div className="aspect-square rounded-lg overflow-hidden mb-5 relative grain-overlay">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-500" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500" />
      </div>
      <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-2">{subtitle}</p>
      <h3 className="font-display text-3xl text-foreground mb-2 group-hover:text-muted-foreground transition-colors tracking-tight">{title}</h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>
      {extra}
    </Link>
  </motion.div>
);

export default GridCard;
