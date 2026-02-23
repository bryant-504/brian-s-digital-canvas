import { Briefcase, Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Freelance Web Designer & Developer",
    period: "2024 — Present",
    points: [
      "Designed and developed 10+ responsive websites for small businesses and startups",
      "Increased client web traffic by an average of 40% through SEO-optimized builds",
      "Delivered projects on time with iterative feedback loops and clean handoffs",
    ],
  },
  {
    role: "Computer Expert / IT Support",
    period: "2023 — Present",
    points: [
      "Provided technical support for hardware, software, and network troubleshooting",
      "Managed system installations, configurations, and maintenance for clients",
      "Reduced system downtime by implementing proactive monitoring solutions",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </ScrollReveal>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.role} delay={i * 0.12}>
              <div className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{exp.role}</h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2 sm:mt-0">
                    <Calendar size={12} /> {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 ml-1">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
