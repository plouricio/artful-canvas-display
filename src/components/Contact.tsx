import { useState } from "react";
import { Send, Mail, MapPin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé lo antes posible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-display text-sm uppercase tracking-widest text-primary mb-4 block">
              Contacto
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Hablemos de Arte
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Interesado en una obra? ¿Buscas un encargo personalizado? 
              Estaré encantado de escucharte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-medium mb-1">Email</h3>
                  <a href="mailto:artista@email.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    artista@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-medium mb-1">Estudio</h3>
                  <p className="font-body text-muted-foreground">
                    Barcelona, España
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-medium mb-1">Instagram</h3>
                  <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    @artista
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-display text-sm uppercase tracking-wider block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors font-body"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-display text-sm uppercase tracking-wider block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors font-body"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="font-display text-sm uppercase tracking-wider block mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors font-body"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="compra">Interés en una obra</option>
                  <option value="encargo">Encargo personalizado</option>
                  <option value="exposicion">Propuesta de exposición</option>
                  <option value="prensa">Prensa / Medios</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="font-display text-sm uppercase tracking-wider block mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border focus:border-primary focus:outline-none transition-colors font-body resize-none"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-display text-sm uppercase tracking-wider hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;