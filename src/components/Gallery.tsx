import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ArtworkCard, { Artwork } from "./ArtworkCard";

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Amanecer en la Costa",
    category: "Paisajes",
    dimensions: "100 x 80 cm",
    year: 2024,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    description: "Una interpretación vibrante del amanecer mediterráneo, donde el cielo se funde con el mar en una sinfonía de naranjas y azules.",
    available: true,
  },
  {
    id: 2,
    title: "Fragmentos del Alma",
    category: "Abstracto",
    dimensions: "120 x 100 cm",
    year: 2024,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    description: "Exploración de las emociones humanas a través de formas geométricas y colores intensos que convergen en el centro del lienzo.",
    available: true,
  },
  {
    id: 3,
    title: "Retrato de Elena",
    category: "Retratos",
    dimensions: "60 x 80 cm",
    year: 2023,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    description: "Estudio de la luz natural sobre el rostro humano, capturando la esencia de la melancolía y la esperanza.",
    available: false,
  },
  {
    id: 4,
    title: "Naturaleza Silente",
    category: "Naturaleza Muerta",
    dimensions: "50 x 60 cm",
    year: 2024,
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80",
    description: "Composición clásica reinterpretada con un enfoque contemporáneo, jugando con sombras dramáticas.",
    available: true,
  },
  {
    id: 5,
    title: "Montañas del Norte",
    category: "Paisajes",
    dimensions: "150 x 100 cm",
    year: 2023,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    description: "Majestuosidad de los picos nevados capturada en tonos fríos que contrastan con la calidez del primer plano.",
    available: true,
  },
  {
    id: 6,
    title: "Caos Ordenado",
    category: "Abstracto",
    dimensions: "140 x 120 cm",
    year: 2024,
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    description: "Una danza de colores y texturas que desafía la percepción del espectador.",
    available: true,
  },
  {
    id: 7,
    title: "El Violinista",
    category: "Figurativo",
    dimensions: "80 x 100 cm",
    year: 2023,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    description: "Homenaje a los músicos callejeros, capturando el movimiento y la pasión de la interpretación.",
    available: false,
  },
  {
    id: 8,
    title: "Texturas Urbanas",
    category: "Contemporáneo",
    dimensions: "90 x 90 cm",
    year: 2024,
    image: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=800&q=80",
    description: "La ciudad como lienzo: muros, grafitis y el paso del tiempo como elementos artísticos.",
    available: true,
  },
  {
    id: 9,
    title: "Sueño Surrealista",
    category: "Surrealismo",
    dimensions: "100 x 120 cm",
    year: 2024,
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    description: "Viaje onírico donde la realidad se distorsiona y los objetos flotan en un espacio atemporal.",
    available: true,
  },
  {
    id: 10,
    title: "Mar en Calma",
    category: "Paisajes",
    dimensions: "180 x 90 cm",
    year: 2023,
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    description: "Serenidad del océano al atardecer, donde el horizonte se desdibuja en tonos pastel.",
    available: true,
  },
  {
    id: 11,
    title: "Geometría Emocional",
    category: "Abstracto",
    dimensions: "110 x 110 cm",
    year: 2024,
    image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    description: "Intersección de formas puras que evocan estados de ánimo cambiantes.",
    available: true,
  },
  {
    id: 12,
    title: "Relojes Derretidos",
    category: "Surrealismo",
    dimensions: "70 x 90 cm",
    year: 2023,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
    description: "Reflexión sobre la relatividad del tiempo inspirada en los grandes maestros surrealistas.",
    available: false,
  },
];

const categories = ["Todos", "Paisajes", "Abstracto", "Retratos", "Naturaleza Muerta", "Figurativo", "Contemporáneo", "Surrealismo"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredArtworks = activeCategory === "Todos" 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Galería
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora mi colección de obras organizadas por estilo y técnica. 
            Cada pieza es única y está disponible para coleccionistas.
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
            <div 
              key={artwork.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArtworkCard artwork={artwork} />
            </div>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <p className="text-center text-muted-foreground font-body text-lg py-20">
            No hay obras disponibles en esta categoría por el momento.
          </p>
        )}
      </div>
    </section>
  );
};

export default Gallery;