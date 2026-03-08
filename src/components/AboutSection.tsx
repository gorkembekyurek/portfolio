import { motion } from "framer-motion";
import { Briefcase, GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <span className="text-primary">~</span>
          <span>$ cat about.md</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-16">
          Hakkımda<span className="text-primary">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Kişisel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
              <User className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm font-semibold text-foreground">Kişisel</span>
            </div>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              Ben Görkem. Backend geliştirme odaklı bir yazılımcıyım. 
              Temiz kod yazmayı, ölçeklenebilir sistemler tasarlamayı ve 
              yeni teknolojiler öğrenmeyi seviyorum. E-ticaret ve fintech 
              alanlarında projeler geliştirdim.
            </p>
            <div className="mt-5 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Konum</span>
                <span className="text-foreground">Türkiye</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Diller</span>
                <span className="text-foreground">Türkçe, İngilizce</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">İlgi Alanları</span>
                <span className="text-foreground">Borsa, Teknoloji</span>
              </div>
            </div>
          </motion.div>

          {/* Deneyim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm font-semibold text-foreground">Deneyim</span>
            </div>
            <div className="space-y-5">
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">Backend Developer</h4>
                <span className="font-mono text-xs text-primary">Freelance</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  Laravel ile e-ticaret platformu geliştirme, API tasarımı ve veritabanı optimizasyonu.
                </p>
              </div>
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">Mobil Geliştirici</h4>
                <span className="font-mono text-xs text-primary">Freelance</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  Ionic ile cross-platform e-ticaret ve borsa takip uygulamaları geliştirme.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Eğitim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm font-semibold text-foreground">Eğitim</span>
            </div>
            <div className="space-y-5">
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">Bilgisayar Mühendisliği</h4>
                <span className="font-mono text-xs text-primary">Üniversite</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  Yazılım geliştirme, veri yapıları, algoritma ve veritabanı yönetimi.
                </p>
              </div>
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">Online Eğitimler</h4>
                <span className="font-mono text-xs text-primary">Udemy / YouTube</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  Laravel, Ionic, TypeScript ve modern web teknolojileri üzerine sürekli öğrenme.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
