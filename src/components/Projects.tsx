import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online store with product management, cart functionality, and payment integration.",
    tech: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    demo: "#",
    repo: "#",
  },
  {
    title: "School Management System",
    desc: "Student records, grade tracking, and administrative dashboard for educational institutions.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "A modern, responsive portfolio site with dark mode and glassmorphism design elements.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Restaurant Landing Page",
    desc: "Elegant single-page website for a restaurant with menu showcase and reservation form.",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    demo: "#",
    repo: "#",
  },
  {
    title: "IT Helpdesk Ticketing",
    desc: "Internal ticket management system to track and resolve IT support requests efficiently.",
    tech: ["React", "Node.js", "SQL Server"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Brand Identity Package",
    desc: "Complete visual identity design including logo, business cards, and social media templates.",
    tech: ["Photoshop", "Illustrator", "Figma"],
    demo: "#",
    repo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass rounded-xl overflow-hidden group hover:border-primary/30 transition-all hover:-translate-y-1 duration-300"
            >
              {/* Image placeholder */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Folder size={32} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
              </div>

              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="rounded-full text-xs flex-1">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full text-xs flex-1">
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                      <Github size={12} /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
