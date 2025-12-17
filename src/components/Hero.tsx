import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.querySelector("#gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-60 bg-gradient-to-t from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in tracking-widest uppercase">
            Arte que transforma espacios
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
            <span className="block">Donde el Color</span>
            <span className="block text-primary">Cobra Vida</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Explorando paisajes, emociones y abstracciones a través del lienzo. 
            Cada pincelada cuenta una historia única.
          </p>

          <button
            onClick={scrollToGallery}
            className="group inline-flex items-center gap-3 font-display text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Explorar Obras
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
};

export default Hero;