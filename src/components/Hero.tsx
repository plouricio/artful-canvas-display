import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { artists } from "@/data/artists";

const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const lineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToArtists = () => {
    const element = document.querySelector("#artists");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get featured images from artists
  const featuredImages = artists
    .filter((a) => a.featuredImage)
    .map((a) => a.featuredImage!);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-background"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Parallax Background Layers */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-20 left-[5%] w-[45vw] max-w-[500px] aspect-[4/5] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-sm" />
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src={featuredImages[0] || "/artwork-featured.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-sm shadow-2xl"
          />
          <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-foreground/5" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-[15%] right-[8%] w-[35vw] max-w-[400px] aspect-[3/4] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            src={featuredImages[1] || "/dave/Cosmic Tie. copy.jpg"}
            alt=""
            className="w-full h-full object-cover rounded-sm shadow-xl"
          />
          <div className="absolute inset-0 rounded-sm ring-1 ring-inset ring-foreground/5" />
        </div>
      </motion.div>

      {/* Soft gradient orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/8 via-primary/3 to-transparent blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-secondary/8 via-secondary/3 to-transparent blur-3xl pointer-events-none"
      />

      {/* Main Content */}
      <motion.div
        style={{ y: y2, opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-xs sm:text-sm md:text-base text-muted-foreground mb-8 md:mb-16 tracking-[0.2em] md:tracking-[0.3em] uppercase"
          >
            Dos Kunst Contemporary Collective
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingContainerVariants}
            className="font-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8"
          >
            <motion.span
              variants={lineVariants}
              className="block text-foreground/90 mb-4 md:mb-6"
            >
              {["Two", "Roads"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                  {i === 0 && "\u00A0"}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              variants={wordVariants}
              className="block mt-2 bg-gradient-to-r from-primary via-terracotta to-gold bg-clip-text text-transparent"
            >
              One Canvas
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 md:px-0"
          >
            From inner to outer worlds
            <span className="block mt-1">
              Discover the works of two travellers united by nonconformity.
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            onClick={scrollToArtists}
            className="group inline-flex items-center gap-4 font-display text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition-all duration-500"
          >
            <span className="relative">
              Explore the Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full" />
            </span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[20%] w-px h-[30vh] bg-gradient-to-b from-transparent via-border/30 to-transparent" />
      <div className="absolute top-[20%] right-[25%] w-px h-[25vh] bg-gradient-to-b from-transparent via-border/20 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-border to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
