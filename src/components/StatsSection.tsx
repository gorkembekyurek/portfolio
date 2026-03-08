import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Folder, Clock, GitCommit } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const useCounter = (end: number, inView: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView, duration]);

  return count;
};

const StatsSection = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Folder, value: 3, suffix: "+", label: t.stats.projects },
    { icon: Clock, value: 1, suffix: "+", label: t.stats.experience },
    { icon: Code, value: 12, suffix: "+", label: t.stats.technologies },
    { icon: GitCommit, value: 200, suffix: "+", label: t.stats.commits },
  ];

  return (
    <section ref={ref} className="py-16 relative border-y border-border bg-card/50">
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => {
            const count = useCounter(stat.value, inView, 1800 + i * 200);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {count}<span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
