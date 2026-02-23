import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
            {["IT Student", "Web Developer", "Graphic Designer"].map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full text-xs font-medium glass text-primary"
              >
                {role}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-foreground">
            Brian <span className="gradient-text">Wasike</span>
          </h1>

          <p className="font-display text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
            Redefining How Business Gets Done.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
            Final-year IT student crafting modern digital experiences through clean code,
            thoughtful design, and relentless problem-solving.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <Button asChild size="lg" className="rounded-full font-medium">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-medium">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
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
                className="p-2 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl" />
            <div className="relative w-full h-full rounded-full glass border-2 border-primary/20 flex items-center justify-center overflow-hidden">
              <span className="font-display text-6xl font-bold gradient-text">BW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
