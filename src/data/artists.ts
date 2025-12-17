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

export interface Artist {
  id: string;
  name: string;
  specialty: string;
  portrait: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  experience: number;
  worksCreated: number;
  exhibitions: number;
  email: string;
  instagram: string;
  categories: string[];
  artworks: Artwork[];
}

export const artists: Artist[] = [
  {
    id: "elena-vega",
    name: "Elena Vega",
    specialty: "Paisajes & Naturalismo",
    portrait: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    shortBio: "Capturando la esencia de la naturaleza a través de pinceladas que danzan con la luz.",
    fullBio: [
      "Desde mi infancia en la costa mediterránea, la naturaleza ha sido mi mayor maestra. Cada amanecer, cada ola, cada hoja movida por el viento me susurra historias que traduzco al lienzo.",
      "Mi trabajo se centra en capturar esos momentos efímeros donde la luz transforma el paisaje ordinario en algo mágico. Trabajo principalmente con óleos, buscando texturas que inviten al espectador a sumergirse en la escena.",
      "Formada en la Academia de Bellas Artes de Valencia, he expuesto en galerías de toda Europa, siempre con el mismo objetivo: reconectar a las personas con la belleza natural que nos rodea."
    ],
    location: "Valencia, España",
    experience: 12,
    worksCreated: 180,
    exhibitions: 35,
    email: "elena@artista.com",
    instagram: "@elenavega.art",
    categories: ["Paisajes", "Marinas", "Naturaleza"],
    artworks: [
      {
        id: 1,
        title: "Amanecer en la Costa",
        category: "Marinas",
        dimensions: "100 x 80 cm",
        year: 2024,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        description: "Una interpretación vibrante del amanecer mediterráneo, donde el cielo se funde con el mar.",
        available: true,
      },
      {
        id: 2,
        title: "Montañas del Norte",
        category: "Paisajes",
        dimensions: "150 x 100 cm",
        year: 2023,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
        description: "Majestuosidad de los picos nevados capturada en tonos fríos.",
        available: true,
      },
      {
        id: 3,
        title: "Mar en Calma",
        category: "Marinas",
        dimensions: "180 x 90 cm",
        year: 2023,
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
        description: "Serenidad del océano al atardecer, donde el horizonte se desdibuja.",
        available: true,
      },
      {
        id: 4,
        title: "Bosque Otoñal",
        category: "Naturaleza",
        dimensions: "120 x 90 cm",
        year: 2024,
        image: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800&q=80",
        description: "Los colores del otoño en su máximo esplendor.",
        available: false,
      },
    ],
  },
  {
    id: "marco-silva",
    name: "Marco Silva",
    specialty: "Arte Abstracto & Contemporáneo",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    shortBio: "Explorando las fronteras de la percepción a través del color y la forma.",
    fullBio: [
      "El arte abstracto para mí es un lenguaje universal que trasciende las barreras culturales y lingüísticas. Cada obra es una conversación entre el color, la forma y la emoción.",
      "Mi proceso creativo es intuitivo: comienzo sin un plan definido, dejando que los materiales me guíen. Utilizo técnicas mixtas, desde acrílicos hasta texturas industriales, creando capas de significado.",
      "Con estudios en Barcelona y Berlín, mi trabajo ha sido reconocido en bienales de arte contemporáneo. Busco provocar, cuestionar y, sobre todo, generar una conexión emocional inmediata."
    ],
    location: "Barcelona, España",
    experience: 18,
    worksCreated: 250,
    exhibitions: 60,
    email: "marco@artista.com",
    instagram: "@marcosilva.art",
    categories: ["Abstracto", "Contemporáneo", "Expresionismo"],
    artworks: [
      {
        id: 5,
        title: "Fragmentos del Alma",
        category: "Abstracto",
        dimensions: "120 x 100 cm",
        year: 2024,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
        description: "Exploración de las emociones humanas a través de formas geométricas.",
        available: true,
      },
      {
        id: 6,
        title: "Caos Ordenado",
        category: "Abstracto",
        dimensions: "140 x 120 cm",
        year: 2024,
        image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
        description: "Una danza de colores y texturas que desafía la percepción.",
        available: true,
      },
      {
        id: 7,
        title: "Texturas Urbanas",
        category: "Contemporáneo",
        dimensions: "90 x 90 cm",
        year: 2024,
        image: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=800&q=80",
        description: "La ciudad como lienzo: muros, grafitis y el paso del tiempo.",
        available: true,
      },
      {
        id: 8,
        title: "Geometría Emocional",
        category: "Expresionismo",
        dimensions: "110 x 110 cm",
        year: 2024,
        image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
        description: "Intersección de formas puras que evocan estados de ánimo.",
        available: false,
      },
    ],
  },
  {
    id: "lucia-mendez",
    name: "Lucía Méndez",
    specialty: "Surrealismo & Figurativo",
    portrait: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    shortBio: "Tejiendo sueños y realidades en lienzos que desafían lo posible.",
    fullBio: [
      "El surrealismo me permite explorar los rincones más profundos de la psique humana. Mis obras son ventanas a mundos donde lo imposible se vuelve tangible.",
      "Combino técnicas figurativas clásicas con elementos oníricos, creando escenas que invitan a la contemplación y la interpretación personal. Cada espectador encuentra su propia historia.",
      "Graduada de la Real Academia de Bellas Artes de San Fernando, mi trabajo ha sido comparado con los grandes maestros surrealistas, aunque siempre busco una voz propia y contemporánea."
    ],
    location: "Madrid, España",
    experience: 15,
    worksCreated: 200,
    exhibitions: 45,
    email: "lucia@artista.com",
    instagram: "@luciamendez.art",
    categories: ["Surrealismo", "Figurativo", "Retratos"],
    artworks: [
      {
        id: 9,
        title: "Sueño Surrealista",
        category: "Surrealismo",
        dimensions: "100 x 120 cm",
        year: 2024,
        image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
        description: "Viaje onírico donde la realidad se distorsiona.",
        available: true,
      },
      {
        id: 10,
        title: "Retrato de Elena",
        category: "Retratos",
        dimensions: "60 x 80 cm",
        year: 2023,
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
        description: "Estudio de la luz natural sobre el rostro humano.",
        available: false,
      },
      {
        id: 11,
        title: "El Violinista",
        category: "Figurativo",
        dimensions: "80 x 100 cm",
        year: 2023,
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
        description: "Homenaje a los músicos callejeros.",
        available: true,
      },
      {
        id: 12,
        title: "Relojes Derretidos",
        category: "Surrealismo",
        dimensions: "70 x 90 cm",
        year: 2023,
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80",
        description: "Reflexión sobre la relatividad del tiempo.",
        available: true,
      },
    ],
  },
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};