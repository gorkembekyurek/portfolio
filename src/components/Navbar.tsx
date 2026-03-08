import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Hakkımda", href: "#about" },
  { label: "Projeler", href: "#projects" },
  { label: "Yetenekler", href: "#skills" },
  { label: "İletişim", href: "#contact" },
];

const ThemeSwitch = ({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="relative w-10 h-10 rounded-lg bg-secondary border border-border cursor-pointer overflow-hidden focus:outline-none hover:border-primary/40 transition-all duration-500"
    aria-label="Tema değiştir"
  >
    <motion.span
      className="absolute inset-0 bg-primary/10"
      initial={false}
      animate={{ opacity: isDark ? 0.2 : 0.06, scale: isDark ? 1 : 0.92 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    />

    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={false}
      animate={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : -120, scale: isDark ? 1 : 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Moon className="w-4 h-4 text-primary" />
    </motion.div>

    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={false}
      animate={{ opacity: isDark ? 0 : 1, rotate: isDark ? 120 : 0, scale: isDark ? 0.4 : 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Sun className="w-4 h-4 text-primary" />
    </motion.div>
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved ? saved === "dark" : true;
    }
    return true;
  });

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    setIsDark((prev) => !prev);
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 750);
  };
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg text-foreground">
          <span className="text-primary">&lt;</span>dev<span className="text-primary">/&gt;</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitch isDark={isDark} onToggle={toggleTheme} />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeSwitch isDark={isDark} onToggle={toggleTheme} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md">
          <div className="container px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
