import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Backend Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent" 
             style={{ animation: "scanline 8s linear infinite" }} />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Terminal prompt */}
          <div className="font-mono text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <span className="text-primary">~</span>
            <span>$ whoami</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4 tracking-tight">
            <span className="text-foreground">Merhaba,</span>
            <br />
            <span className="text-foreground">Ben </span>
            <span className="text-primary text-glow">Görkem</span>
          </h1>

          <div className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 flex items-center">
            <span className="text-primary mr-2">&gt;</span>
            <span>{displayText}</span>
            <span className="cursor-blink text-primary ml-0.5">█</span>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-secondary-foreground text-lg max-w-xl leading-relaxed mb-10"
          >
            Laravel, Ionic ve modern web teknolojileriyle ölçeklenebilir 
            uygulamalar geliştiriyorum. E-ticaret'ten fintech'e kadar geniş bir yelpazede deneyim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-md hover:opacity-90 transition-opacity">
              ./projeler.sh
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm rounded-md hover:border-primary hover:text-primary transition-colors">
              ./iletisim.sh
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative code block */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block font-mono text-xs text-primary leading-6 select-none pointer-events-none"
      >
        <pre>{`<?php

namespace App\\Http;

class Portfolio
{
    protected $skills = [
        'Laravel',
        'PHP',
        'MySQL',
        'REST API',
        'Ionic',
    ];

    public function build()
    {
        return response()
            ->json($this->skills);
    }
}`}</pre>
      </motion.div>
    </section>
  );
};

export default HeroSection;
