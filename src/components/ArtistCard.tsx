import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Artist } from "@/data/artists";

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

const ArtistCard = ({ artist, index }: ArtistCardProps) => {
  return (
    <Link
      to={`/artista/${artist.id}`}
      className="group block relative overflow-hidden animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={artist.portrait}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <span className="font-display text-xs uppercase tracking-widest text-primary mb-2 block">
          {artist.specialty}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-background mb-3">
          {artist.name}
        </h3>
        <p className="font-body text-background/80 mb-4 line-clamp-2">
          {artist.shortBio}
        </p>
        <div className="flex items-center gap-2 text-background font-display text-sm uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Ver Galería
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;