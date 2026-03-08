import { motion } from "framer-motion";
import { Briefcase, GraduationCap, User } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <span className="text-primary">~</span>
          <span>{t.about.terminal}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-16">
          {t.about.title}<span className="text-primary">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
              <User className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm font-semibold text-foreground">{t.about.personal}</span>
            </div>
            <p className="text-secondary-foreground leading-relaxed text-sm">
              {t.about.personalDesc}
            </p>
            <div className="mt-5 space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.about.location}</span>
                <span className="text-foreground">{t.about.locationVal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.about.languages}</span>
                <span className="text-foreground">{t.about.languagesVal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.about.interests}</span>
                <span className="text-foreground">{t.about.interestsVal}</span>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm font-semibold text-foreground">{t.about.experience}</span>
            </div>
            <div className="space-y-5">
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">{t.about.exp1Title}</h4>
                <span className="font-mono text-xs text-primary">{t.about.exp1Company}</span>
                <span className="font-mono text-xs text-muted-foreground ml-2">{t.about.exp1Date}</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  {t.about.exp1Desc}
                </p>
              </div>
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">{t.about.exp2Title}</h4>
                <span className="font-mono text-xs text-primary">{t.about.exp2Company}</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  {t.about.exp2Desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm font-semibold text-foreground">{t.about.education}</span>
            </div>
            <div className="space-y-5">
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">{t.about.edu1Title}</h4>
                <span className="font-mono text-xs text-primary">{t.about.edu1School}</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  {t.about.edu1Desc}
                </p>
              </div>
              <div className="relative pl-4 border-l-2 border-primary/30">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                <h4 className="font-mono text-sm font-semibold text-foreground">{t.about.edu2Title}</h4>
                <span className="font-mono text-xs text-primary">{t.about.edu2School}</span>
                <p className="text-secondary-foreground text-xs mt-1.5 leading-relaxed">
                  {t.about.edu2Desc}
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
