import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { artists } from "@/data/artists";
import ArtistCard from "./ArtistCard";

const ArtistsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={sectionRef}
      id="artists"
      className="relative py-32 md:py-40 bg-background overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-radial from-primary/5 to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-radial from-secondary/5 to-transparent blur-3xl pointer-events-none"
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/3 w-px h-32 bg-gradient-to-b from-border/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-24 bg-gradient-to-b from-border/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-accent text-3xl md:text-4xl lg:text-5xl mb-16 md:mb-20"
          >
            Meet the Artists
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Two unique visions, one shared commitment to excellence.
            <span className="block mt-2 text-foreground/60">
              Discover each artist's creative universe.
            </span>
          </motion.p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 max-w-5xl mx-auto">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ArtistCard artist={artist} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 md:mt-32 mx-auto max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  );
};

export default ArtistsSection;
