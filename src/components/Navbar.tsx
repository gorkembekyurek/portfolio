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
    className="relative w-14 h-7 rounded-full bg-secondary border border-border cursor-pointer transition-colors duration-300 focus:outline-none"
    aria-label="Tema değiştir"
  >
    {/* Track icons */}
    <Sun className="absolute left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground transition-opacity duration-300" style={{ opacity: isDark ? 0.3 : 0 }} />
    <Moon className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground transition-opacity duration-300" style={{ opacity: isDark ? 0 : 0.3 }} />

    {/* Thumb */}
    <motion.div
      className="absolute top-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md"
      animate={{ left: isDark ? "calc(100% - 1.625rem)" : "0.125rem" }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-primary-foreground" />
        ) : (
          <Sun className="w-3 h-3 text-primary-foreground" />
        )}
      </motion.div>
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
          <ThemeSwitch isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeSwitch isDark={isDark} onToggle={() => setIsDark(!isDark)} />
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
