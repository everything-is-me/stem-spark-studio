import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  Beaker, 
  FileText, 
  Video, 
  ShieldCheck, 
  Microscope, 
  AlertTriangle, 
  ListChecks, 
  Users, 
  BookOpen, 
  Calculator,
  UserX,
  Zap,
  Leaf
} from "lucide-react";

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1 w-full pb-20">
        {/* Modern Hero Section */}
        <section className="relative overflow-hidden bg-primary/5 py-16 sm:py-24 mb-12 border-b border-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 text-sm px-4 py-1">Rulebook</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground" style={{ textShadow: '3px 3px 0px rgba(80, 20, 100, 0.4)' }}>
              Guidelines & Rules
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
              Everything you need to know to create a winning project, from eligibility to ethics. 
              Let your curiosity lead the way!
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Tabs defaultValue="participation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto min-h-14 gap-2 p-1 bg-muted/50 rounded-xl mb-12">
              <TabsTrigger value="participation" className="text-sm sm:text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                <Users className="w-4 h-4 mr-2 hidden sm:inline" /> Eligibility
              </TabsTrigger>
              <TabsTrigger value="journey" className="text-sm sm:text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                <Lightbulb className="w-4 h-4 mr-2 hidden sm:inline" /> Project Journey
              </TabsTrigger>
              <TabsTrigger value="submission" className="text-sm sm:text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                <FileText className="w-4 h-4 mr-2 hidden sm:inline" /> Submission
              </TabsTrigger>
              <TabsTrigger value="ethics" className="text-sm sm:text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                <ShieldCheck className="w-4 h-4 mr-2 hidden sm:inline" /> Ethics & Rules
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: PARTICIPATION */}
            <TabsContent value="participation" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-primary/5 rounded-t-xl pb-6 border-b border-primary/10">
                    <CardTitle className="flex items-center text-2xl">
                      <Users className="w-6 h-6 mr-3 text-primary" /> Who is Eligible?
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      Students of Indian origin studying in schools based in South India (Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, and Puducherry).
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">ARISE</h4>
                        <p className="text-muted-foreground">Class 9 to Class 12 students are eligible to participate.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                      <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full text-orange-600 dark:text-orange-400">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">IGNITE</h4>
                        <p className="text-muted-foreground">Class 6 to Class 8 students are eligible to participate.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-red-100/50 dark:bg-red-900/10 rounded-lg border border-red-200 dark:border-red-900/30">
                      <UserX className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-red-800 dark:text-red-300">
                        <span className="font-bold">Note:</span> A student who has previously participated in ARISE as a Class 12 student is not eligible to re-register.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-primary/5 rounded-t-xl pb-6 border-b border-primary/10">
                    <CardTitle className="flex items-center text-2xl">
                      <Microscope className="w-6 h-6 mr-3 text-primary" /> What we look for
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      Your project must be original in content and driven by genuine curiosity.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-center p-3 hover:bg-muted/50 rounded-lg transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>Research-based projects are highly welcomed.</span>
                      </li>
                      <li className="flex items-center p-3 hover:bg-muted/50 rounded-lg transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>Novel engineering designs are strongly encouraged.</span>
                      </li>
                      <li className="flex items-start p-3 hover:bg-muted/50 rounded-lg transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span>Engineering projects <span className="font-semibold underline decoration-primary decoration-2 underline-offset-2">must demonstrate meaningful improvement</span> over existing solutions, not merely replicate them.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* TAB 2: PROJECT JOURNEY */}
            <TabsContent value="journey" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">9 Steps to Scientific Success</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Follow this systematic approach to develop an outstanding, reliable, and original science project.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Lightbulb, title: "1. Choose a Topic", desc: "Pick something that genuinely interests you. The best projects come from real curiosity, not convenience. Check local resources first." },
                  { icon: BookOpen, title: "2. Research", desc: "Dig deep. Use Google Scholar, PubMed, or Scirus to see what work has already been done. Understand the existing landscape." },
                  { icon: ListChecks, title: "3. Make a Plan", desc: "Define the purpose, identify your variables, state your hypothesis, and map out a procedure. Build a realistic timeline." },
                  { icon: Microscope, title: "4. Form a Hypothesis", desc: "Create a testable statement about what you expect. Design at least one experiment to test it. Change one variable at a time." },
                  { icon: Beaker, title: "5. Run Experiments", desc: "Create a controlled experiment with a clear reference point. Repeat experiments to confirm reproducibility. Record everything!" },
                  { icon: FileText, title: "6. Record Data", desc: "Keep a detailed project data book. Write down unexpected outcomes and errors. Photos/videos are strongly encouraged." },
                  { icon: Users, title: "7. Work with Guide", desc: "Maintain ongoing discussions throughout the project. Your guide is your most important resource and certifier." },
                  { icon: Calculator, title: "8. Process Results", desc: "Process raw data using proper calculations. Use tables, graphs, and statistics to identify trends and draw conclusions." },
                  { icon: CheckCircle2, title: "9. Draw Conclusions", desc: "Do results support your hypothesis? Valid science accepts 'no'. Never alter results to fit a theory. Be honest and open-minded." },
                ].map((step, i) => (
                  <Card key={i} className="group hover:-translate-y-2 hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125 duration-500" />
                    <CardHeader className="pb-2">
                      <step.icon className="w-10 h-10 text-primary mb-4 p-2 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300" />
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* TAB 3: SUBMISSION */}
            <TabsContent value="submission" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl shadow-sm mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-yellow-800 dark:text-yellow-400 mb-2">CRITICAL RULE: Total Anonymity</h3>
                    <p className="text-yellow-800/80 dark:text-yellow-400/80 font-medium">
                      Do not disclose your school name, city, or state in ANY part of your submission — including your abstract, research paper, report, presentation, or project video. All documents will go through a pre-check. <strong className="text-red-600 dark:text-red-400">Projects that violate this rule will be instantly disqualified.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <FileText className="w-6 h-6 text-primary mr-3" /> Mandatory Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground">Submit online via the MIF portal only. No emails or offline submissions. You may also attach a full scientific report.</p>
                    <ul className="space-y-3">
                      {[
                        { label: "Project Abstract", words: "250 words" },
                        { label: "Introduction & Objective", words: "100–150 words" },
                        { label: "Innovation", words: "50–100 words" },
                        { label: "Methodology", words: "150–250 words" },
                        { label: "Results and Conclusions", words: "100–150 words" },
                        { label: "Acknowledgements & Links", words: "50–100 words" },
                      ].map((req, i) => (
                         <li key={i} className="flex justify-between items-center bg-muted/40 p-3 rounded-md border border-border/50">
                           <span className="font-medium">{req.label}</span>
                           <Badge variant="outline" className="bg-background text-xs">{req.words}</Badge>
                         </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 mt-6 border-t border-border">
                      <h4 className="font-semibold mb-3">Project Essentials:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Data Book</li>
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Synopsis</li>
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Research Paper</li>
                        <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Cost Feasibility (If device)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-8">
                  <Card className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                      <CardTitle className="flex items-center text-xl">
                        <Video className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Highly Important: Project Video
                      </CardTitle>
                      <CardDescription>Maximum 90 seconds. Key focus for judges.</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                          <h4 className="font-bold text-green-700 dark:text-green-400 flex items-center mb-2"><CheckCircle2 className="w-4 h-4 mr-2" /> Must Include</h4>
                          <ul className="text-sm space-y-1 text-green-900/80 dark:text-green-400/80 list-disc ml-4">
                            <li>Full name and grade</li>
                            <li>1-sentence project summary</li>
                            <li>Creation & innovation</li>
                            <li>Methodology</li>
                            <li>Conclusions</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-200 dark:border-red-900/30">
                          <h4 className="font-bold text-red-700 dark:text-red-400 flex items-center mb-2"><XCircle className="w-4 h-4 mr-2" /> DO NOT Include</h4>
                          <ul className="text-sm space-y-1 text-red-900/80 dark:text-red-400/80 list-disc ml-4">
                            <li>School name, city, state</li>
                            <li>Anyone other than you</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground"><strong>Pro-tips:</strong> English preferred, well-lit place, horizontal (landscape), clear audio. Max 30MB file, or open-access link.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 shadow-md">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-red-600 dark:text-red-400 flex items-center">
                        <XCircle className="w-5 h-5 mr-2" /> What DOES NOT Qualify?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">—</span> Repeating a standard textbook experiment</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">—</span> General essays or survey reports</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">—</span> Unsupported hypothesis without proof</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">—</span> Claims violating laws (e.g. perpetual motion)</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">—</span> Animal toxicity studies resulting in death</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">—</span> Basic models illustrating known concepts</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* TAB 4: ETHICS AND DISPLAY */}
            <TabsContent value="ethics" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Accordion type="single" collapsible className="w-full bg-card shadow-lg rounded-xl border p-4 px-6" defaultValue="human">
                <AccordionItem value="human" className="border-b">
                  <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-6 text-xl">
                    <div className="flex items-center text-left">
                      <Users className="w-6 h-6 mr-4" /> 
                      <div>
                        Rules Involving Human Participants & Informed Consent
                        <p className="text-sm text-muted-foreground font-normal mt-1 hidden sm:block">Protecting participant welfare and ensuring ethical study conduct.</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground space-y-4 pb-6 px-10">
                    <p>
                      A human participant is any living individual from whom a student researcher collects data, samples, or identifiable private information.
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Informed Consent:</strong> You must fully inform participants (and parents/guardians) about study risks/benefits before collecting data.</li>
                      <li><strong>Voluntary:</strong> Participation must be voluntary with no pressure. They can withdraw anytime.</li>
                      <li><strong>No medical practice:</strong> Students cannot diagnose illness, prescribe medication, or perform medical procedures without a licensed professional.</li>
                      <li><strong>Privacy:</strong> Never publish/display identifiable personal info (including photos) without explicit written consent.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="animals" className="border-b">
                  <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-6 text-xl">
                    <div className="flex items-center text-left">
                      <Leaf className="w-6 h-6 mr-4" /> 
                      <div>
                        Rules Involving Vertebrate Animals
                        <p className="text-sm text-muted-foreground font-normal mt-1 hidden sm:block">MIF strongly encourages non-animal research methods where possible.</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground space-y-4 pb-6 px-10">
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 mb-4 grid sm:grid-cols-2 gap-4">
                      <div><strong className="text-primary">Replace:</strong> Use invertebrates, simulations instead.</div>
                      <div><strong className="text-primary">Reduce:</strong> Minimise animal usage.</div>
                      <div><strong className="text-primary">Refine:</strong> Minimise pain, stress, distress.</div>
                      <div><strong className="text-primary">Respect:</strong> Treat all animals with care.</div>
                    </div>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Strictly Prohibited:</strong> Any study designed or expected to result in vertebrate animal death.</li>
                      <li>If unintended death occurs, stop immediately and investigate. If linked to procedure, disqualification applies.</li>
                      <li><strong>Permitted:</strong> Observational studies in nature/zoos, livestock studies using ag practices, basic aquaculture.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="display" className="border-none">
                  <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-6 text-xl">
                    <div className="flex items-center text-left">
                      <ShieldCheck className="w-6 h-6 mr-4" /> 
                      <div>
                        Display Guidelines for Shortlisted Projects
                        <p className="text-sm text-muted-foreground font-normal mt-1 hidden sm:block">What you can and cannot bring to the ARISE Fair.</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="grid md:grid-cols-2 gap-8 px-2 mt-4">
                      <div>
                        <h4 className="font-bold text-green-600 flex items-center mb-3"><CheckCircle2 className="w-5 h-5 mr-2" /> Allowed Display Items</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Dried plant materials sealed in acrylic</li>
                          <li>• Sealed soil/liquid samples</li>
                          <li>• Personal photos (inside papers only)</li>
                          <li>• Class II student-operated lasers (with housing)</li>
                          <li>• Pressurised tanks (non-combustible, secured)</li>
                          <li>• Personal laptops (bring your own net)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-600 flex items-center mb-3"><XCircle className="w-5 h-5 mr-2" /> Prohibited Items</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Living organisms, preserved animals, bodily fluids</li>
                          <li>• Household/lab chemicals, dry ice, sublimating solids</li>
                          <li>• Firearms, hazardous devices, blades/syringes</li>
                          <li>• Open flames, flammable materials, open-top batteries</li>
                          <li>• Awards, medals, business cards, flags</li>
                          <li>• <strong>Any visible student identity</strong> on posters</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-muted/40 rounded-lg text-sm flex items-start">
                      <Zap className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <p><strong>Electrical:</strong> 220V/50Hz AC available. All wires/edges must be insulated. No heavy machinery allowed.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>

          <div className="mt-20 pt-8 border-t text-center space-y-4">
            <p className="text-primary font-medium">ARISE is an initiative of the Make India Foundation.</p>
            <p className="text-muted-foreground text-sm">For queries, write to us at <a href="mailto:contact@makeindiafoundation.org" className="hover:underline font-medium">contact@makeindiafoundation.org</a> or visit <a href="https://makeindiafoundation.org" target="_blank" rel="noreferrer" className="hover:underline font-medium text-primary">makeindiafoundation.org</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guidelines;
