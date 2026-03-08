import { motion } from "framer-motion";
import { Github, ShoppingCart, Smartphone, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Ticaret Web Sitesi",
    tech: "Laravel",
    icon: ShoppingCart,
    description: "Laravel framework ile geliştirilmiş tam kapsamlı e-ticaret platformu. Ürün yönetimi, sepet sistemi, ödeme entegrasyonu ve admin paneli içerir.",
    tags: ["Laravel", "PHP", "MySQL", "REST API", "Blade"],
    color: "from-red-500/20 to-orange-500/20",
    github: "https://github.com/gorkembekyurek/e-ticaret-sitesi",
  },
  {
    title: "E-Ticaret Mobil App",
    tech: "Ionic",
    icon: Smartphone,
    description: "Ionic framework ile cross-platform olarak geliştirilen e-ticaret mobil uygulaması. iOS ve Android'de çalışır, push notification ve offline destek sunar.",
    tags: ["Ionic", "TypeScript", "Angular", "Capacitor", "Firebase"],
    color: "from-blue-500/20 to-cyan-500/20",
    github: "https://github.com/gorkembekyurek/e-ticaret-app",
  },
  {
    title: "BIST Hisse Takip App",
    tech: "Real-time",
    icon: TrendingUp,
    description: "Borsa İstanbul hisselerini anlık olarak takip edebileceğiniz uygulama. Canlı fiyat güncellemeleri, grafik analizi ve portföy yönetimi özellikleri sunar.",
    tags: ["WebSocket", "REST API", "Chart.js", "Real-time Data"],
    color: "from-green-500/20 to-emerald-500/20",
    github: "https://github.com/gorkembekyurek/bist-portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        {/* Section header */}
        <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <span className="text-primary">~</span>
          <span>$ ls ./projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-16">
          Projelerim<span className="text-primary">.</span>
        </h2>

        <div className="grid gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative border border-border rounded-lg p-6 md:p-8 hover:border-primary/40 transition-all duration-500 bg-card border-glow"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-secondary flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-primary/70">{project.tech}</span>
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-secondary-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
