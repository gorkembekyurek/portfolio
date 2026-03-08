import { motion } from "framer-motion";
import { Github, Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <span className="text-primary">~</span>
          <span>$ ./contact --send-message</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-16">
          İletişim<span className="text-primary">.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-secondary-foreground leading-relaxed mb-8">
              Yeni projeler ve işbirlikleri için her zaman açığım. 
              Backend geliştirme, API tasarımı veya mobil uygulama konularında 
              benimle iletişime geçebilirsiniz.
            </p>

            <div className="space-y-4">
              <a href="mailto:gorkemb11@icloud.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-mono text-sm group">
                <Mail className="w-4 h-4 text-primary" />
                <span>gorkemb11@icloud.com</span>
              </a>
              <a href="https://github.com/gorkembekyurek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-mono text-sm group">
                <Github className="w-4 h-4 text-primary" />
                <span>github.com/gorkembekyurek</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">// isim</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">// email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground mb-1.5 block">// mesaj</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-md font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Mesajınız..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Gönder
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
