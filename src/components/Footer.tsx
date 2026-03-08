import { useLang } from "@/contexts/LangContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8">
      <div className="container px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          © 2026 — {t.footer.builtWith} <span className="text-primary">♥</span> {t.footer.andCode}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo "Backend Developer"
        </span>
      </div>
    </footer>
  );
};

export default Footer;
