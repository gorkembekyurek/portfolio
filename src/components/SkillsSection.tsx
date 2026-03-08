import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "PHP / Laravel", level: 95 },
      { name: "MySQL / PostgreSQL", level: 85 },
      { name: "REST API Design", level: 90 },
      { name: "Node.js", level: 60 },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "Ionic Framework", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "HTML / CSS", level: 80 },
      { name: "Angular", level: 70 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Linux Server", level: 75 },
      { name: "CI/CD", level: 60 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <div className="font-mono text-sm text-muted-foreground mb-2 flex items-center gap-2">
          <span className="text-primary">~</span>
          <span>$ cat skills.json</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-16">
          Yetenekler<span className="text-primary">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className="border border-border rounded-lg p-6 bg-card"
            >
              {/* Terminal-style header */}
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2">{category.title.toLowerCase()}.sh</span>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.15 + si * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
