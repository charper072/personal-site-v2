import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="font-script text-foreground text-3xl hover:text-muted-foreground transition-colors">
        Harper
      </Link>
      <div className="flex items-center gap-5">
        {[Instagram, Twitter, Facebook].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Social link"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
      <p className="font-body text-muted-foreground text-xs tracking-wide">
        © {new Date().getFullYear()} Harper. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
