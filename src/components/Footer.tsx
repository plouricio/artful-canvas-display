import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 md:py-20 bg-card border-t border-border/50 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-block font-accent text-xl md:text-2xl text-foreground hover:text-primary transition-colors"
            >
              Dos Kunst
            </Link>
            <p className="font-body text-sm text-muted-foreground mt-3 max-w-xs">
              A contemporary art collective showcasing exceptional talent from around the world.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <p className="font-body text-sm text-muted-foreground">
              © {currentYear} Dos Kunst
            </p>
            <p className="font-body text-xs text-muted-foreground/60 mt-2">
              Each piece is unique and original
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-start md:justify-end gap-8"
          >
            {["Instagram", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="group inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {social}
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Back to top hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-wider text-muted-foreground/60 hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
