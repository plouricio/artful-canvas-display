import { useParams, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Instagram } from "lucide-react";
import { getArtistById } from "@/data/artists";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryFilter from "@/components/CategoryFilter";
import ArtworkCard from "@/components/ArtworkCard";

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || "");
  const [activeCategory, setActiveCategory] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl font-bold mb-4">Artist not found</h1>
          <Link to="/" className="text-primary hover:underline font-body">
            Back to home
          </Link>
        </motion.div>
      </div>
    );
  }

  const categories = ["All", ...artist.categories];
  const filteredArtworks =
    activeCategory === "All"
      ? artist.artworks
      : artist.artworks.filter((art) => art.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section with Parallax */}
        <section
          ref={heroRef}
          className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-card to-background overflow-hidden"
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Decorative orbs */}
          <motion.div
            style={{ y: imageY }}
            className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-radial from-primary/5 to-transparent blur-3xl pointer-events-none"
          />

          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-12 group"
              >
                <motion.span
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all"
                  whileHover={{ x: -3 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </motion.span>
                Back to Artists
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Portrait with parallax */}
              <motion.div style={{ y: imageY }} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[4/5] overflow-hidden bg-muted"
                >
                  <img
                    src={artist.portrait}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
                </motion.div>

                {/* Decorative frame offset */}
                <motion.div
                  initial={{ opacity: 0, x: 10, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10"
                />
              </motion.div>

              {/* Info with staggered animation */}
              <motion.div style={{ y: contentY }} className="lg:py-8">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block font-display text-sm uppercase tracking-[0.2em] text-primary mb-4"
                >
                  {artist.specialty}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.95]"
                >
                  {artist.name}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="space-y-5 font-body text-lg text-muted-foreground mb-10 leading-relaxed"
                >
                  {artist.fullBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="grid grid-cols-3 gap-6 py-8 border-y border-border"
                >
                  {[
                    { value: artist.experience, label: "Years" },
                    { value: artist.worksCreated, label: "Works" },
                    { value: artist.exhibitions, label: "Exhibitions" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="text-center">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                        className="font-display text-3xl md:text-4xl font-bold text-primary block mb-1"
                      >
                        {stat.value}+
                      </motion.span>
                      <span className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-wrap gap-6 mt-8"
                >
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-body">{artist.location}</span>
                  </div>
                  <a
                    href={`mailto:${artist.email}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="font-body">{artist.email}</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                    <span className="font-body">{artist.instagram}</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Artist Statement Section */}
        {artist.artistStatement && (
          <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[20rem] leading-none font-display text-primary/5 pointer-events-none select-none">
              "
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-6 block"
                >
                  Artist Reflections
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display text-2xl md:text-4xl font-bold mb-12 italic leading-snug"
                >
                  "{artist.artistStatement.question}"
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  {artist.artistStatement.answer.map((paragraph, index) => (
                    <p key={index} className="italic">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-10"
                >
                  <span className="font-display text-sm uppercase tracking-[0.2em] text-primary">
                    — {artist.name}
                  </span>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        <section className="py-24 md:py-32 relative">
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl md:text-6xl font-bold mb-6"
              >
                Gallery
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
              >
                Explore {artist.name}'s collection of works
              </motion.p>
            </div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </motion.div>

            {/* Artworks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {filteredArtworks.map((artwork, index) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  artist={{ name: artist.name, email: artist.email }}
                  index={index}
                />
              ))}
            </div>

            {filteredArtworks.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted-foreground font-body text-lg py-20"
              >
                No works available in this category.
              </motion.p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistDetail;
