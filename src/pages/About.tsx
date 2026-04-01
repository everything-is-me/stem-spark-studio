import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, User, Users, GraduationCap, Building } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* About MIF Section */}
        <section className="h-screen flex flex-col align-center bg-primary/5 border-b border-primary/10">
          <div className="container mx-auto my-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-foreground" style={{ textShadow: '2px 2px 0px rgba(80, 20, 100, 0.4)' }}>
              About Make India Foundation
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
              <p>
                Make India Foundation (MIF) was born from a simple but urgent truth: India has the talent to lead the world in technology — it just needs the right platform to build it.
              </p>
              <p>
                Founded by a team of educators, entrepreneurs, and engineers united by one belief, MIF exists to transform India's brightest young minds from consumers of technology into confident creators of it. Through competitions, programs, and community-driven initiatives, we challenge students to move beyond textbooks — to design, build, innovate, and share solutions that matter.
              </p>
              <p>
                MIF bridges two worlds: the global best practices of STEM education from the United States and the rich, untapped potential of India's student community. We are not just running programs — we are building a movement.
              </p>
            </div>
          </div>
        </section>

        {/* What We Stand For */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">What We Stand For</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-primary/20">
                <CardContent className="p-8 text-center sm:text-left sm:flex items-start gap-6">
                  <div className="mx-auto sm:mx-0 bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 mb-6 sm:mb-0 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To ignite India's next generation of innovators by building a hands-on culture of designing and making — empowering students to create indigenous, world-class technological solutions that drive India from dependency to self-reliance.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-primary/20">
                <CardContent className="p-8 text-center sm:text-left sm:flex items-start gap-6">
                  <div className="mx-auto sm:mx-0 bg-amber-100 text-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 mb-6 sm:mb-0 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      An India that is not just a services powerhouse, but a product nation — where students from every corner of the country have the skills, the mindset, and lower constraints to design, build, and share technology that solves real problems at national scale.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Founder */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Founder</h2>
            </div>
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]">
                <div className="bg-gradient-to-br from-primary/80 to-blue-600 p-8 flex flex-col items-center justify-center text-white text-center">
                  <div className="relative w-24 h-24 mb-4">
                    <img
                      src="/images/kumar-r.jpg"
                      alt="Kumar R"
                      className="w-24 h-24 rounded-full object-cover shadow-inner border-4 border-white/20"
                      onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Kumar+R&background=ffffff&color=2563eb&bold=true&size=200" }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Kumar R</h3>
                  <p className="text-primary-foreground/80 mt-2 font-medium text-sm">Founder, Make India Foundation</p>
                  <p className="text-primary-foreground/80 text-sm">Founder & CEO, Bytes & Bots STEM, USA</p>
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kumar R is the driving force behind Make India Foundation. Based in the United States, he is the founder of Bytes & Bots — a K–12 STEM education company widely recognized for its distinctive project-based curriculum and hands-on teaching methodology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Having built a successful STEM program in the US, Kumar turned his attention back to India — not as a distant observer, but as an active builder. He established MIF with a clear conviction: that Indian students deserve access to the same quality of innovation-first education that shapes the world's top engineers and entrepreneurs. His vision of <strong>Design · Build · Innovate · Share</strong> is not a tagline — it is the lived philosophy behind every MIF initiative.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Collaborative Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
                <Users className="text-primary" /> Collaborative Partners
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Partner 1 */}
              <Card className="flex flex-col hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
                <CardContent className="p-8 flex-1">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <img
                      src="/images/vishnu-v.jpg"
                      alt="Vishnu Varadan V"
                      className="w-16 h-16 rounded-full object-cover shadow-sm border border-border flex-shrink-0"
                      onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Vishnu+V&background=dcfce7&color=15803d&bold=true&size=150" }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Vishnu Varadan V</h3>
                      <p className="text-sm font-semibold text-primary mt-1">Chief Executive Officer, AIC–PEC Foundation</p>
                      <p className="text-xs text-muted-foreground">Startup Ecosystem Builder & Design Thinking Evangelist</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Vishnu Varadan brings over 12 years of experience at the intersection of entrepreneurship, policy, and education. As CEO of the Atal Incubation Centre at PEC Foundation in Puducherry, he has been at the forefront of building South India's startup ecosystem — managing a $1.5M program grant, overseeing $350K in seed funding, and delivering 150+ ecosystem-building talks that have inspired 2,500+ students.
                    </p>
                    <p>
                      A Design Thinking evangelist by philosophy and a builder by practice, Vishnu has mentored 50+ early-stage startups and mobilized over $375K in ecosystem funding. His academic contributions span innovation, new product development, startup valuation, and venture creation. He brings to MIF a relentless belief that India's next great products will emerge from the classroom.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Partner 2 */}
              <Card className="flex flex-col hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800">
                <CardContent className="p-8 flex-1">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <img
                      src="/images/sundaramurthy.jpg"
                      alt="Dr. R. Sundaramurthy"
                      className="w-16 h-16 rounded-full object-cover shadow-sm border border-border flex-shrink-0"
                      onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Dr+S&background=f3e8ff&color=7e22ce&bold=true&size=150" }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Dr. R. Sundaramurthy</h3>
                      <p className="text-sm font-semibold text-primary mt-1">Professor & Dean, Puducherry Technological University</p>
                      <p className="text-xs text-muted-foreground">Executive Director, Atal Incubation Centre, PTU</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      Dr. R. Sundaramurthy is a professor in the Department of Electronics and Instrumentation Engineering at Puducherry Technological University, where he also serves as Dean of Industrial Consultancy & Sponsored Research. He is the Executive Director of the Atal Incubation Centre at PTU — a NITI Aayog-sanctioned initiative valued at ₹9.98 Crores — and heads the Startup India Seed Fund program worth ₹3 Crores.
                    </p>
                    <p>
                      His career spans work at ISRO's Space Application Centre, General Optics (Asia) Ltd., and over two decades in academia. His expertise — Embedded Systems, VLSI Engineering, Intelligent Instrumentation, and Innovation & Entrepreneurship — sits at the exact heart of MIF's mission. His passion is clear: promoting innovation and supporting the student community as a force for nation building.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;