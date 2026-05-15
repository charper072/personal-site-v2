import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { tourDates } from "@/data/mockData";

const statusStyles = {
  available: "bg-primary text-primary-foreground hover:bg-foreground/90",
  "sold-out": "bg-destructive/20 text-destructive border border-destructive/30 cursor-default",
  presale: "bg-status-presale/20 text-status-presale border border-status-presale/30",
};

const statusLabels = {
  available: "Tickets",
  "sold-out": "Sold Out",
  presale: "Presale",
};

const Tour = () => (
  <div className="min-h-screen bg-background pt-28 pb-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 tracking-tight">TOUR</h1>
      <div className="h-[2px] bg-border w-16 mb-14" />
      <div className="space-y-4">
        {tourDates.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`flex flex-col md:flex-row md:items-center md:justify-between glass-card-hover rounded-lg p-6 ${
              t.status === "sold-out" ? "opacity-50" : ""
            }`}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
              <div className="font-display text-4xl text-foreground">{t.day}</div>
              <div className="font-body text-muted-foreground text-xs uppercase tracking-[0.2em]">{t.month}</div>
            </div>
            <div className="flex-grow">
              <p className="font-body text-muted-foreground text-xs uppercase tracking-[0.2em] mb-1">
                {t.city}, {t.state}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-1 tracking-tight">{t.eventName}</h3>
              <p className="font-body text-muted-foreground text-sm">{t.venue}</p>
            </div>
            <div className="flex-shrink-0 mt-4 md:mt-0">
              <span
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-semibold text-sm transition-colors ${statusStyles[t.status]}`}
              >
                {statusLabels[t.status]}
                {t.status !== "sold-out" && <ExternalLink size={14} />}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Tour;
