import { Beaker, Atom, Lightbulb, Users } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Beaker,
      title: "Hands-On Learning",
      description: "We believe in experiential education that brings STEM concepts to life through practical application.",
    },
    {
      icon: Atom,
      title: "Innovation Focus",
      description: "Encouraging creative problem-solving and cutting-edge thinking in science and technology.",
    },
    {
      icon: Lightbulb,
      title: "Student Empowerment",
      description: "Providing platforms for young minds to showcase their talents and build confidence.",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering collaboration and mentorship among students, educators, and industry professionals.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are dedicated to igniting passion for science, technology, engineering, and mathematics
            in young minds. Through our annual competitions, we create opportunities for students to
            explore, innovate, and excel in STEM fields while building the skills they need to become
            tomorrow's leaders and problem-solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 fade-in-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
