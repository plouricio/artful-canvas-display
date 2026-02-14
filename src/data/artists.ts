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
  artistStatement?: {
    question: string;
    answer: string[];
  };
  location: string;
  experience: number;
  worksCreated: number;
  exhibitions: number;
  email: string;
  instagram: string;
  categories: string[];
  artworks: Artwork[];
  featuredImage?: string;
}

export const artists: Artist[] = [
  {
    id: "richard",
    name: "Richard",
    specialty: "Abstract & Contemporary",
    portrait: "/richard-perfil.jpg",
    featuredImage: "/artwork-featured.jpg",
    shortBio: "",
    fullBio: [],
    artistStatement: {
      question: "How do you know when a work is done?",
      answer: [
        "Such an insightful question.",
        "It is hard, can be the hardest thing to know. It's like a bell curve, you reach the highest point and if you keep working then you can lose that.",
        "It's instinct, years of practice, intuition, looking. Being present as it happens and recognising when something in you, or the piece goes 'stop'. When you're about to keep going you're aware of something stopping you from adding anything more.",
      ],
    },
    location: "Auckland N.Z.",
    experience: 18,
    worksCreated: 250,
    exhibitions: 60,
    email: "richard@artista.com",
    instagram: "@richard.art",
    categories: ["Abstract", "Contemporary"],
    artworks: [
      {
        id: 3,
        title: "Gulf Study",
        category: "Contemporary",
        dimensions: "49 x 34cm",
        year: 2008,
        image: "/richard/IMG_3412.jpg",
        description: "Watercolour on paper.",
        available: true,
      },
      {
        id: 4,
        title: "Seascape I",
        category: "Contemporary",
        dimensions: "40 x 30cm",
        year: 2008,
        image: "/richard/IMG_3414.jpg",
        description: "Acrylic on board.",
        available: true,
      },
      {
        id: 5,
        title: "C.C. III",
        category: "Abstract",
        dimensions: "43 x 29cm",
        year: 2008,
        image: "/richard/IMG_3415.jpg",
        description: "Acrylic on canvas.",
        available: true,
      },
      {
        id: 6,
        title: "Osmosis",
        category: "Contemporary",
        dimensions: "56 x 38cm",
        year: 2008,
        image: "/richard/IMG_3416.jpg",
        description: "Watercolour/acrylic on paper.",
        available: true,
      },
      {
        id: 7,
        title: "Winter Light",
        category: "Contemporary",
        dimensions: "41 x 29.5cm",
        year: 2007,
        image: "/richard/IMG_3417.jpg",
        description: "Oil pastel on paper.",
        available: true,
      },
    ],
  },
  {
    id: "dave",
    name: "Dave",
    specialty: "Landscapes, surrealism... and abstractions",
    portrait: "/dave/ShoalBay2 copy.jpg",
    featuredImage: "/dave/ShoalBay2 copy.jpg",
    shortBio:
      "Following the mood and the muse to known and unknown territories.",
    fullBio: [],
    artistStatement: {
      question: "What draws you on? 'What's the journey?",
      answer: [
        "Exploring the surreal, the whimsical and the subversive - and their inherent vicissitudes.",
        "Following light and dark, and whatever might lie between - always moving pigment as pigment might decide.",
        "I follow no unyielding, rigid path - as one artist succinctly said I paint where I stand.",
      ],
    },
    location: "Auckland N.Z.",
    experience: 15,
    worksCreated: 180,
    exhibitions: 42,
    email: "dave@artista.com",
    instagram: "@dave.art",
    categories: ["Cosmic", "Surrealism", "Landscapes"],
    artworks: [
      {
        id: 10,
        title: "Cosmic Tie",
        category: "Cosmic",
        dimensions: "100 x 140 cm",
        year: 2024,
        image: "/dave/Cosmic Tie. copy.jpg",
        description: "Acrylics on canvas",
        available: true,
      },
      {
        id: 11,
        title: "Shoal Bay Dreams",
        category: "Landscapes",
        dimensions: "90 x 120 cm",
        year: 2024,
        image: "/dave/ShoalBay2 copy.jpg",
        description: "Watercolours",
        available: true,
      },
      {
        id: 12,
        title: "A Different Machine",
        category: "Surrealism",
        dimensions: "80 x 100 cm",
        year: 2024,
        image: "/dave/A Different Machine copy.jpg",
        description: "Acrylics on canvas",
        available: false,
      },
      {
        id: 13,
        title: "Power of perception",
        category: "Cosmic",
        dimensions: "60 x 80 cm",
        year: 2024,
        image: "/dave/Power of perception.jpg",
        description: "Acrylics on panel",
        available: true,
      },
      {
        id: 14,
        title: "Weird",
        category: "Surrealism",
        dimensions: "70 x 90 cm",
        year: 2024,
        image: "/dave/weird.jpg",
        description:
          "Embracing the strange and finding beauty in the unexpected.",
        available: false,
      },
      {
        id: 15,
        title: "Binary",
        category: "Abstract",
        dimensions: "60 x 80 cm",
        year: 2024,
        image: "/dave/Binary-B_W.JPG",
        description: "Black/White.   Watercolours",
        available: true,
      },
      {
        id: 16,
        title: "Golden Isles",
        category: "Landscapes",
        dimensions: "80 x 100 cm",
        year: 2024,
        image: "/dave/Golden Isles.JPG",
        description: "Acrylics on canvas",
        available: false,
      },
      {
        id: 17,
        title: "Into The Fields Of The Hypnagogic...",
        category: "Surrealism",
        dimensions: "90 x 120 cm",
        year: 2024,
        image: "/dave/Into The Fields Of The Hypnagogic....jpg",
        description: "Alkyds",
        available: true,
      },
      {
        id: 18,
        title: "Jimbei's Flowers",
        category: "Surrealism",
        dimensions: "70 x 90 cm",
        year: 2024,
        image: "/dave/Jimbei'sFlowers2.jpg",
        description: "Watercolours and gouache",
        available: false,
      },
      {
        id: 19,
        title: "The Juggler's Act",
        category: "Surrealism",
        dimensions: "80 x 100 cm",
        year: 2024,
        image: "/dave/The Juggler's Act copy.jpg",
        description: "Acrylics on canvas",
        available: true,
      },
    ],
  },
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find((artist) => artist.id === id);
};
