import { Code2, Palette, Server } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Web Development", desc: "Building responsive, performant web apps with modern frameworks." },
  { icon: Server, title: "System Management", desc: "IT support, networking, and infrastructure problem-solving." },
  { icon: Palette, title: "Graphic Design", desc: "Visual storytelling through branding, UI design, and creative assets." },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a final-year Information Technology student with a passion for building things that live on the internet. 
              I specialize in web development, system administration, and graphic design — combining technical precision with creative vision.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With two years of freelance experience, I've helped businesses establish their digital presence through 
              clean, functional websites and compelling visual designs. I believe in writing code that's as elegant as the interfaces it produces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new design trends, solving IT challenges, or contributing to open-source projects. 
              I approach every project with a problem-solver's mindset and a designer's eye for detail.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
