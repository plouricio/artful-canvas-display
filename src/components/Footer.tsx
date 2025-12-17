const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="font-display text-2xl font-bold tracking-tight">
            ARTISTA
          </a>

          <p className="font-body text-muted-foreground text-center">
            © {currentYear} Todos los derechos reservados. Cada obra es única y original.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="font-body text-muted-foreground hover:text-foreground transition-colors">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;