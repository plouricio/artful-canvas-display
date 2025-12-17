import { artists } from "@/data/artists";
import ArtistCard from "./ArtistCard";

const ArtistsSection = () => {
  return (
    <section id="artists" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
            Colectivo Artístico
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Nuestros Artistas
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres visiones únicas, un mismo compromiso con la excelencia. 
            Descubre el universo creativo de cada artista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {artists.map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;