import { Beaker, Atom, Lightbulb, Users, MapPin, Rocket } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Beaker,
      title: "Learn by Making",
      description: "We believe the best way to learn STEM is by building. From simple circuits to smart devices, we provide the platform for hands-on creation.",
    },
    {
      icon: MapPin,
      title: "Build for India",
      description: "We encourage projects that address India's needs — clean water, sustainable energy, affordable healthcare, secure technology, and more.",
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
      icon: Rocket,
      title: "From Ideas to Impact",
      description: "We guide young innovators from concept to prototype, connecting them with mentors from India's top tech companies and institutions.",
    },
    {
      icon: Users,
      title: "Community of Creators",
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
            We inspire India's next generation to become creators, not just consumers of technology. Through hands-on competitions in hardware, electronics, and innovation, we empower students to solve real Indian problems with Indian solutions — building a foundation for our nation's tech sovereignty.
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
