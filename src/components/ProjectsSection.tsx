import { motion } from "framer-motion";
import { Github, ShoppingCart, Smartphone, TrendingUp } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const ProjectsSection = () => {
  const { t } = useLang();

  const projects = [
    {
      title: t.projects.p1Title,
      tech: "Laravel",
      icon: ShoppingCart,
      description: t.projects.p1Desc,
      tags: ["Laravel", "PHP", "MySQL", "REST API", "Blade"],
      color: "from-red-500/20 to-orange-500/20",
      github: "https://github.com/gorkembekyurek/e-ticaret-sitesi",
    },
    {
      title: t.projects.p2Title,
      tech: "Ionic",
      icon: Smartphone,
      description: t.projects.p2Desc,
      tags: ["Ionic", "TypeScript", "Angular", "Capacitor", "Firebase"],
      color: "from-blue-500/20 to-cyan-500/20",
      github: "https://github.com/gorkembekyurek/e-ticaret-app",
    },
    {
      title: t.projects.p3Title,
      tech: "Real-time",
      icon: TrendingUp,
      description: t.projects.p3Desc,
      tags: ["WebSocket", "REST API", "Chart.js", "Real-time Data"],
      color: "from-green-500/20 to-emerald-500/20",
      github: "https://github.com/gorkembekyurek/bist-portfolio",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <span className="text-primary">~</span>
          <span>{t.projects.terminal}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-16">
          {t.projects.title}<span className="text-primary">.</span>
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
