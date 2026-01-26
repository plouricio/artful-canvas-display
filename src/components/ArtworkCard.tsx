import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Send, ArrowLeft, CheckCircle2, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

export interface ArtistInfo {
  name: string;
  email: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
  artist?: ArtistInfo;
  index?: number;
}

const ArtworkCard = ({ artwork, artist, index = 0 }: ArtworkCardProps) => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Inquiry sent successfully",
      description: `${artist?.name || "The artist"} will receive your message and contact you soon.`,
    });

    // Reset after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setShowInquiryForm(false);
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 2500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowInquiryForm(false);
    setIsSubmitted(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted/50 mb-5">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 animate-pulse aspect-[4/3]" />
          )}

          <motion.img
            src={artwork.image}
            alt={artwork.title}
            className={`w-full h-auto object-contain transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-charcoal" />
              </div>
            </motion.div>
          </div>

          {!artwork.available && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-4 right-4 px-3 py-1.5 bg-charcoal/80 backdrop-blur-sm"
            >
              <span className="font-display text-xs uppercase tracking-wider text-cream">
                Sold
              </span>
            </motion.div>
          )}

          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cream/0 group-hover:border-cream/40 transition-all duration-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cream/0 group-hover:border-cream/40 transition-all duration-500" />
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            {artwork.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-body">{artwork.dimensions}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-body">{artwork.year}</span>
          </div>
        </div>
      </motion.div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 overflow-y-auto"
            onClick={closeModal}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 p-3 text-cream/70 hover:text-cream transition-colors z-10"
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={28} strokeWidth={1.5} />
            </motion.button>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative overflow-hidden flex items-center justify-center bg-charcoal/50">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  src={artwork.image}
                  alt={artwork.title}
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
              </div>

              {/* Details / Form */}
              <div className="flex flex-col justify-center text-cream">
                <AnimatePresence mode="wait">
                  {!showInquiryForm ? (
                    // Artwork Details View
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-4 block"
                      >
                        {artwork.category}
                      </motion.span>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight"
                      >
                        {artwork.title}
                      </motion.h2>

                      {artist && (
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.28 }}
                          className="font-body text-lg text-gold/80 mb-4"
                        >
                          by {artist.name}
                        </motion.p>
                      )}

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-body text-lg md:text-xl text-cream/70 mb-10 leading-relaxed"
                      >
                        {artwork.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="grid grid-cols-2 gap-6 py-8 border-t border-cream/10"
                      >
                        <div>
                          <span className="font-display text-xs uppercase tracking-wider text-cream/50 block mb-2">
                            Dimensions
                          </span>
                          <span className="font-body text-lg">
                            {artwork.dimensions}
                          </span>
                        </div>
                        <div>
                          <span className="font-display text-xs uppercase tracking-wider text-cream/50 block mb-2">
                            Year
                          </span>
                          <span className="font-body text-lg">{artwork.year}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="font-display text-xs uppercase tracking-wider text-cream/50 block mb-2">
                            Status
                          </span>
                          <span
                            className={`font-body text-lg ${
                              artwork.available ? "text-sage" : "text-gold"
                            }`}
                          >
                            {artwork.available ? "Available for inquiry" : "Sold"}
                          </span>
                        </div>
                      </motion.div>

                      {artwork.available && (
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          onClick={() => setShowInquiryForm(true)}
                          className="inline-flex items-center justify-center gap-3 px-8 py-4 mt-4 bg-cream text-charcoal font-display text-sm uppercase tracking-wider hover:bg-gold transition-colors duration-300"
                        >
                          <MessageSquare className="w-4 h-4" />
                          Inquire About This Piece
                        </motion.button>
                      )}
                    </motion.div>
                  ) : (
                    // Inquiry Form View
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      {/* Back button */}
                      <button
                        onClick={() => setShowInquiryForm(false)}
                        className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors mb-6 self-start"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-display text-sm uppercase tracking-wider">
                          Back to details
                        </span>
                      </button>

                      {!isSubmitted ? (
                        <>
                          {/* Form Header */}
                          <div className="mb-8">
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                              Express Your Interest
                            </h3>
                            <p className="font-body text-cream/60">
                              Send a message to{" "}
                              <span className="text-gold">{artist?.name || "the artist"}</span>{" "}
                              about "{artwork.title}"
                            </p>
                          </div>

                          {/* Form */}
                          <form onSubmit={handleSubmit} className="space-y-5 flex-1">
                            {/* Name */}
                            <div className="relative">
                              <label
                                htmlFor="inquiry-name"
                                className="font-display text-xs uppercase tracking-wider text-cream/50 mb-2 block"
                              >
                                Your Name *
                              </label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30" />
                                <input
                                  type="text"
                                  id="inquiry-name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  placeholder="John Doe"
                                  className="w-full pl-12 pr-4 py-3.5 bg-cream/5 border border-cream/10 focus:border-gold/50 focus:bg-cream/10 focus:outline-none transition-all font-body text-cream placeholder:text-cream/30"
                                />
                              </div>
                            </div>

                            {/* Email */}
                            <div className="relative">
                              <label
                                htmlFor="inquiry-email"
                                className="font-display text-xs uppercase tracking-wider text-cream/50 mb-2 block"
                              >
                                Your Email *
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30" />
                                <input
                                  type="email"
                                  id="inquiry-email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  placeholder="john@example.com"
                                  className="w-full pl-12 pr-4 py-3.5 bg-cream/5 border border-cream/10 focus:border-gold/50 focus:bg-cream/10 focus:outline-none transition-all font-body text-cream placeholder:text-cream/30"
                                />
                              </div>
                            </div>

                            {/* Phone (optional) */}
                            <div className="relative">
                              <label
                                htmlFor="inquiry-phone"
                                className="font-display text-xs uppercase tracking-wider text-cream/50 mb-2 block"
                              >
                                Phone (Optional)
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/30" />
                                <input
                                  type="tel"
                                  id="inquiry-phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="+1 234 567 890"
                                  className="w-full pl-12 pr-4 py-3.5 bg-cream/5 border border-cream/10 focus:border-gold/50 focus:bg-cream/10 focus:outline-none transition-all font-body text-cream placeholder:text-cream/30"
                                />
                              </div>
                            </div>

                            {/* Message */}
                            <div className="relative">
                              <label
                                htmlFor="inquiry-message"
                                className="font-display text-xs uppercase tracking-wider text-cream/50 mb-2 block"
                              >
                                Your Message *
                              </label>
                              <textarea
                                id="inquiry-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder={`I'm interested in "${artwork.title}". I would like to know more about...`}
                                className="w-full px-4 py-3.5 bg-cream/5 border border-cream/10 focus:border-gold/50 focus:bg-cream/10 focus:outline-none transition-all font-body text-cream placeholder:text-cream/30 resize-none"
                              />
                            </div>

                            {/* Submit */}
                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 mt-2 bg-gold text-charcoal font-display text-sm uppercase tracking-wider hover:bg-cream transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                              {isSubmitting ? (
                                <>
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 1,
                                      ease: "linear",
                                    }}
                                    className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full"
                                  />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <Send className="w-4 h-4" />
                                  Send Inquiry
                                </>
                              )}
                            </motion.button>

                            <p className="text-center text-cream/40 font-body text-sm mt-4">
                              {artist?.name || "The artist"} will receive your message at{" "}
                              <span className="text-cream/60">{artist?.email || "their email"}</span>
                            </p>
                          </form>
                        </>
                      ) : (
                        // Success State
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex-1 flex flex-col items-center justify-center text-center py-12"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 15,
                              delay: 0.1,
                            }}
                            className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mb-6"
                          >
                            <CheckCircle2 className="w-10 h-10 text-sage" />
                          </motion.div>
                          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                            Message Sent!
                          </h3>
                          <p className="font-body text-cream/60 max-w-sm">
                            Thank you for your interest in "{artwork.title}".{" "}
                            {artist?.name || "The artist"} will contact you soon.
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ArtworkCard;
