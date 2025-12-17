import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Mail, MapPin, Instagram } from "lucide-react";
import { getArtistById } from "@/data/artists";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryFilter from "@/components/CategoryFilter";
import ArtworkCard from "@/components/ArtworkCard";

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || "");
  const [activeCategory, setActiveCategory] = useState("Todos");

  if (!artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Artista no encontrado</h1>
          <Link to="/" className="text-primary hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const categories = ["Todos", ...artist.categories];
  const filteredArtworks = activeCategory === "Todos"
    ? artist.artworks
    : artist.artworks.filter(art => art.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Link>

            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Portrait */}
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={artist.portrait}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10" />
              </div>

              {/* Info */}
              <div>
                <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
                  {artist.specialty}
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                  {artist.name}
                </h1>

                <div className="space-y-4 font-body text-lg text-muted-foreground mb-8">
                  {artist.fullBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  <div className="text-center">
                    <span className="font-display text-2xl md:text-3xl font-bold text-primary block mb-1">
                      {artist.experience}+
                    </span>
                    <span className="font-body text-sm text-muted-foreground">Años</span>
                  </div>
                  <div className="text-center">
                    <span className="font-display text-2xl md:text-3xl font-bold text-primary block mb-1">
                      {artist.worksCreated}+
                    </span>
                    <span className="font-body text-sm text-muted-foreground">Obras</span>
                  </div>
                  <div className="text-center">
                    <span className="font-display text-2xl md:text-3xl font-bold text-primary block mb-1">
                      {artist.exhibitions}+
                    </span>
                    <span className="font-body text-sm text-muted-foreground">Exposiciones</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-body">{artist.location}</span>
                  </div>
                  <a href={`mailto:${artist.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="font-body">{artist.email}</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram className="w-4 h-4 text-primary" />
                    <span className="font-body">{artist.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Galería
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Explora la colección de obras de {artist.name}.
              </p>
            </div>

            <div className="mb-12">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredArtworks.map((artwork, index) => (
                <div key={artwork.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ArtworkCard artwork={artwork} />
                </div>
              ))}
            </div>

            {filteredArtworks.length === 0 && (
              <p className="text-center text-muted-foreground font-body text-lg py-20">
                No hay obras disponibles en esta categoría.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistDetail;