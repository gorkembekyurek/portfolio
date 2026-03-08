const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          © 2026 — Built with <span className="text-primary">♥</span> & code
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo "Backend Developer"
        </span>
      </div>
    </footer>
  );
};

export default Footer;
