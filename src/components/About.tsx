import { Target, Heart, Zap } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
            About STEM Ignite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future, one young innovator at a time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-up">
            <img
              src={teamPhoto}
              alt="STEM Ignite team"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-heading font-bold text-foreground">
              Who We Are
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              STEM Ignite is a nonprofit organization dedicated to fostering excellence in science,
              technology, engineering, and mathematics education. Founded in 2015 by passionate
              educators and industry professionals, we've grown into one of the nation's premier
              STEM competition platforms for middle and high school students.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our competitions provide students with opportunities to apply classroom knowledge to
              real-world challenges, develop critical thinking skills, and connect with mentors who
              guide them toward future success in STEM careers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-background rounded-3xl shadow-sm fade-in-up border border-border/50">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <h4 className="font-heading font-bold text-xl text-foreground mb-3">Our Vision</h4>
            <p className="text-muted-foreground">
              A world where every young person has the opportunity to explore and excel in STEM fields.
            </p>
          </div>

          <div className="text-center p-8 bg-background rounded-3xl shadow-sm fade-in-up border border-border/50" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-secondary" strokeWidth={1.5} />
            </div>
            <h4 className="font-heading font-bold text-xl text-foreground mb-3">Our Values</h4>
            <p className="text-muted-foreground">
              Excellence, integrity, inclusivity, and a commitment to nurturing the next generation of innovators.
            </p>
          </div>

          <div className="text-center p-8 bg-background rounded-3xl shadow-sm fade-in-up border border-border/50" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-accent-dark" strokeWidth={1.5} />
            </div>
            <h4 className="font-heading font-bold text-xl text-foreground mb-3">Our Impact</h4>
            <p className="text-muted-foreground">
              Over 5,000 students impacted, with 85% pursuing STEM degrees at top universities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
