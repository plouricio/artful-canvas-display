import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Instagram, ArrowUpRight } from "lucide-react";
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description:
        "Thank you for contacting us. We'll respond as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@artgallery.com",
      href: "mailto:hello@artgallery.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Barcelona, Spain",
      href: null,
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@artgallery",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 bg-gradient-to-b from-background to-card overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-border/50 to-transparent" />
      <div className="absolute top-20 right-1/3 w-px h-32 bg-gradient-to-b from-border/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block font-display text-sm uppercase tracking-[0.3em] text-primary mb-6"
            >
              Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              Let's Talk{" "}
              <span className="relative inline-block">
                Art
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-gold origin-left"
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
            >
              Interested in a piece? Looking for a custom commission? We'd be
              delighted to hear from you.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-10"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-2">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-body text-lg text-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                        >
                          {info.value}
                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      ) : (
                        <p className="font-body text-lg text-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Decorative line */}
              <div className="hidden lg:block pt-8">
                <div className="w-24 h-px bg-gradient-to-r from-border to-transparent" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-0 transition-all duration-300 font-display text-sm uppercase tracking-wider ${
                      focusedField === "name" || formData.name
                        ? "-top-6 text-primary text-xs"
                        : "top-4 text-muted-foreground"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full py-4 bg-transparent border-b-2 border-border focus:border-primary focus:outline-none transition-colors font-body text-lg"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 font-display text-sm uppercase tracking-wider ${
                      focusedField === "email" || formData.email
                        ? "-top-6 text-primary text-xs"
                        : "top-4 text-muted-foreground"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full py-4 bg-transparent border-b-2 border-border focus:border-primary focus:outline-none transition-colors font-body text-lg"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className="block font-display text-sm uppercase tracking-wider text-muted-foreground mb-3"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full py-4 bg-transparent border-b-2 border-border focus:border-primary focus:outline-none transition-colors font-body text-lg appearance-none cursor-pointer"
                >
                  <option value="">Select a subject</option>
                  <option value="purchase">Interest in a piece</option>
                  <option value="commission">Custom commission</option>
                  <option value="exhibition">Exhibition proposal</option>
                  <option value="press">Press / Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-300 font-display text-sm uppercase tracking-wider ${
                    focusedField === "message" || formData.message
                      ? "-top-6 text-primary text-xs"
                      : "top-4 text-muted-foreground"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full py-4 bg-transparent border-b-2 border-border focus:border-primary focus:outline-none transition-colors font-body text-lg resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background font-display text-sm uppercase tracking-wider hover:bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <motion.span
                  animate={isSubmitting ? { x: [0, 5, 0] } : {}}
                  transition={{
                    repeat: isSubmitting ? Infinity : 0,
                    duration: 0.8,
                  }}
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
