import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brian Wasike. All rights reserved.
        </p>

        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/brianwasike", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/brianwasike", label: "LinkedIn" },
            { icon: Mail, href: "mailto:brianwasike@email.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
