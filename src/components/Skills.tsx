import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript"] },
  { title: "Backend", skills: ["Node.js", "REST APIs", "Express"] },
  { title: "Database", skills: ["MySQL", "SQL Server", "PostgreSQL"] },
  { title: "Design Tools", skills: ["Figma", "Adobe Photoshop", "Illustrator", "WordPress"] },
  { title: "Other", skills: ["Git", "GitHub", "Linux", "Networking", "IT Support"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="glass rounded-xl p-6 hover:border-primary/30 transition-colors h-full">
                <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
