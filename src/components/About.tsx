const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
                alt="El artista en su estudio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
              Sobre el Artista
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Una Vida Dedicada al Arte
            </h2>

            <div className="space-y-6 font-body text-lg text-muted-foreground">
              <p>
                Desde temprana edad, el arte ha sido mi lenguaje para comunicar lo que las palabras 
                no pueden expresar. Cada lienzo es un diario abierto donde plasmo emociones, 
                memorias y visiones de mundos posibles.
              </p>
              <p>
                Mi trabajo transita por diversos estilos —desde paisajes que capturan la luz 
                efímera del amanecer hasta abstracciones que exploran los recovecos del subconsciente. 
                Esta versatilidad no es dispersión, sino la búsqueda constante de nuevas formas 
                de conectar con el espectador.
              </p>
              <p>
                Formado en la Escuela de Bellas Artes de Barcelona y con exposiciones en 
                galerías de Madrid, París y Nueva York, mi objetivo sigue siendo el mismo: 
                crear obras que transformen espacios y toquen almas.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary block mb-2">15+</span>
                  <span className="font-body text-sm text-muted-foreground">Años de Experiencia</span>
                </div>
                <div>
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary block mb-2">200+</span>
                  <span className="font-body text-sm text-muted-foreground">Obras Creadas</span>
                </div>
                <div>
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary block mb-2">50+</span>
                  <span className="font-body text-sm text-muted-foreground">Exposiciones</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;