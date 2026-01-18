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
    id: "richard-silva",
    name: "Richard",
    specialty: "Abstract & Contemporary",
    portrait: "/richard-perfil.jpg",
    featuredImage: "/artwork-featured.jpg",
    shortBio:
      "Exploring the boundaries of perception through bold color and organic form.",
    fullBio: [
      "Abstract art for me is a universal language that transcends cultural and linguistic barriers. Each work is a conversation between color, form, and emotion.",
      "My creative process is intuitive: I begin without a defined plan, letting the materials guide me. I use mixed techniques, from acrylics to industrial textures, creating layers of meaning.",
      "With studies in Barcelona and Berlin, my work has been recognized in contemporary art biennials. I seek to provoke, question, and above all, generate an immediate emotional connection.",
    ],
    artistStatement: {
      question: "How do you know when a work is done?",
      answer: [
        "Such an insightful question.",
        "It is hard, is probably the hardest thing to know. It's like a bell curve and you reach the highest point and if you keep working then it goes away.",
        "It's instinct, training, years, time, skill, intuition and feeling, and looking and being present as it happens, and recognizing when something in you goes 'stop'. It's when you are gonna do something and you don't want, and you ask yourself 'why am I not putting the next stroke'.",
      ],
    },
    location: "Barcelona, Spain",
    experience: 18,
    worksCreated: 250,
    exhibitions: 60,
    email: "richard@artista.com",
    instagram: "@richardsilva.art",
    categories: ["Abstract", "Contemporary", "Expressionism"],
    artworks: [
      {
        id: 3,
        title: "Chromatic Study",
        category: "Contemporary",
        dimensions: "80 x 120 cm",
        year: 2024,
        image: "/richard/IMG_3412.jpg",
        description:
          "An exploration of color relationships and spatial tension.",
        available: true,
      },
      {
        id: 4,
        title: "Ethereal Forms",
        category: "Abstract",
        dimensions: "90 x 120 cm",
        year: 2024,
        image: "/richard/IMG_3414.jpg",
        description:
          "Delicate interplay of transparency and opacity creating depth.",
        available: true,
      },
      {
        id: 5,
        title: "Resonance",
        category: "Expressionism",
        dimensions: "100 x 150 cm",
        year: 2024,
        image: "/richard/IMG_3415.jpg",
        description: "Expressive brushwork capturing emotional resonance.",
        available: false,
      },
      {
        id: 6,
        title: "Synthesis",
        category: "Contemporary",
        dimensions: "80 x 100 cm",
        year: 2024,
        image: "/richard/IMG_3416.jpg",
        description:
          "A synthesis of classical techniques with contemporary vision.",
        available: true,
      },
      {
        id: 7,
        title: "Emergence",
        category: "Abstract",
        dimensions: "120 x 150 cm",
        year: 2024,
        image: "/richard/IMG_3417.jpg",
        description:
          "Forms emerging from the canvas, questioning the boundary between presence and absence.",
        available: true,
      },
    ],
  },
  {
    id: "dave-morrison",
    name: "Dave",
    specialty: "Cosmic Landscapes & Surrealism",
    portrait: "/dave/ShoalBay2 copy.jpg",
    featuredImage: "/dave/Cosmic Tie. copy.jpg",
    shortBio:
      "Painting the cosmos within, where inner landscapes meet celestial wonder.",
    fullBio: [
      "My art exists at the intersection of the microscopic and the infinite. I paint what I see when I close my eyes — vast cosmic expanses that mirror the neural networks of our minds.",
      "Each canvas is a meditation on connection: the threads that bind stars to atoms, dreams to reality. I work with acrylics and mixed media, building layers upon layers to create depth that invites contemplation.",
      "Trained in both traditional techniques and digital art, I bring a unique perspective that honors the old masters while reaching for new dimensions.",
    ],
    artistStatement: {
      question: "What draws you to cosmic imagery?",
      answer: [
        "There's something profound about the universe's indifference to our existence, yet here we are, tiny beings trying to capture infinity on a canvas.",
        "When I paint a nebula or a strange cosmic tie, I'm really painting what it feels like to be human — small but wondering, temporary but reaching for something eternal.",
        "The cosmos doesn't know we're looking at it, but that makes the looking all the more meaningful.",
      ],
    },
    location: "Melbourne, Australia",
    experience: 15,
    worksCreated: 180,
    exhibitions: 42,
    email: "dave@artista.com",
    instagram: "@davemorrison.art",
    categories: ["Cosmic", "Surrealism", "Landscapes"],
    artworks: [
      {
        id: 10,
        title: "Cosmic Tie",
        category: "Cosmic",
        dimensions: "100 x 140 cm",
        year: 2024,
        image: "/dave/Cosmic Tie. copy.jpg",
        description:
          "A meditative piece exploring the threads that connect celestial bodies across the void.",
        available: true,
      },
      {
        id: 11,
        title: "Shoal Bay Dreams",
        category: "Landscapes",
        dimensions: "90 x 120 cm",
        year: 2024,
        image: "/dave/ShoalBay2 copy.jpg",
        description: "Where ocean meets sky, reality blurs into dream.",
        available: true,
      },
      {
        id: 12,
        title: "A Different Machine",
        category: "Surrealism",
        dimensions: "80 x 100 cm",
        year: 2024,
        image: "/dave/A Different Machine copy.jpg",
        description: "An exploration of consciousness as organic machinery.",
        available: false,
      },
      {
        id: 13,
        title: "Ethereal Detail",
        category: "Cosmic",
        dimensions: "60 x 80 cm",
        year: 2024,
        image: "/dave/Detail copy. copy.jpg",
        description:
          "A close study of cosmic formations, finding beauty in the details of the infinite.",
        available: true,
      },
      {
        id: 14,
        title: "Weird Beauty",
        category: "Surrealism",
        dimensions: "70 x 90 cm",
        year: 2024,
        image: "/dave/weird copy.jpg",
        description:
          "Embracing the strange and finding beauty in the unexpected.",
        available: true,
      },
    ],
  },
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find((artist) => artist.id === id);
};
