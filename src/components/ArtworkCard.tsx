import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

export interface Artwork {
  id: number;
  title: string;
  category: string;
  dimensions: string;
  year: number;
  image: string;
  description: string;
  available: boolean;
}

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group cursor-pointer animate-scale-in"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          {!artwork.available && (
            <div className="absolute top-4 right-4 bg-foreground text-background px-3 py-1 font-display text-xs uppercase tracking-wider">
              Vendido
            </div>
          )}
        </div>
        <h3 className="font-display text-lg font-medium mb-1 group-hover:text-primary transition-colors">
          {artwork.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground">
          {artwork.dimensions} · {artwork.year}
        </p>
      </div>

      {/* Modal / Lightbox */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsModalOpen(false)}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          <div 
            className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="font-display text-sm uppercase tracking-widest text-primary mb-4">
                {artwork.category}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {artwork.title}
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6">
                {artwork.description}
              </p>
              
              <div className="space-y-2 font-body text-muted-foreground border-t border-border pt-6">
                <p><span className="text-foreground">Dimensiones:</span> {artwork.dimensions}</p>
                <p><span className="text-foreground">Año:</span> {artwork.year}</p>
                <p>
                  <span className="text-foreground">Estado:</span>{" "}
                  <span className={artwork.available ? "text-sage" : "text-primary"}>
                    {artwork.available ? "Disponible" : "Vendido"}
                  </span>
                </p>
              </div>

              {artwork.available && (
                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-display text-sm uppercase tracking-wider hover:bg-primary transition-colors"
                >
                  Consultar Disponibilidad
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtworkCard;