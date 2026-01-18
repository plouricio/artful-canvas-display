import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Artist } from "@/data/artists";

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

const ArtistCard = ({ artist, index }: ArtistCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/artista/${artist.id}`}
        className="group block relative"
      >
        {/* Main Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Image */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={artist.featuredImage || artist.portrait}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Warm tint on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-terracotta/0 group-hover:from-primary/10 group-hover:to-terracotta/5 transition-all duration-700" />

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            {/* Specialty Tag */}
            <motion.span
              className="inline-block self-start px-3 py-1 mb-4 text-xs font-display uppercase tracking-widest bg-background/10 backdrop-blur-sm text-cream/90 border border-cream/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            >
              {artist.specialty}
            </motion.span>

            {/* Name */}
            <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-500">
              {artist.name}
            </h3>

            {/* Short Bio */}
            <p className="font-body text-cream/70 text-base md:text-lg leading-relaxed mb-6 line-clamp-2 group-hover:text-cream/90 transition-colors duration-500">
              {artist.shortBio}
            </p>

            {/* CTA with animation */}
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="font-display text-sm uppercase tracking-wider text-cream/60 group-hover:text-gold transition-colors duration-500">
                View Gallery
              </span>
              <motion.div
                className="relative w-8 h-8 rounded-full border border-cream/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowUpRight className="w-4 h-4 text-cream/60 group-hover:text-gold transition-colors duration-500" />
              </motion.div>
            </div>
          </div>

          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-cream/30 to-transparent transform origin-top-right group-hover:h-16 transition-all duration-500" />
            <div className="absolute top-0 right-0 h-px w-12 bg-gradient-to-l from-cream/30 to-transparent transform origin-top-right group-hover:w-16 transition-all duration-500" />
          </div>

          {/* Bottom line accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-700" />
        </div>

        {/* Works count - subtle detail */}
        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-body">{artist.location}</span>
          <span className="font-display text-xs tracking-wider">
            {artist.artworks.length} Works
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArtistCard;
