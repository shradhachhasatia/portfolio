import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Briefcase, Code2, Wallet, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      name: "Lockbook",
      Icon: Wallet,
      description: "A comprehensive fintech application for financial management and secure transactions with real-time analytics.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      caseStudy: {
        overview: "Lockbook is a comprehensive fintech solution designed to streamline financial management for small businesses and individuals. The project involved managing a cross-functional team to deliver a secure, scalable platform.",
        role: "Project Manager",
        duration: "6 months",
        team: "8 members (2 designers, 4 developers, 1 QA, 1 product owner)",
        challenges: [
          "Implementing robust security measures for financial transactions",
          "Integrating multiple payment gateways while maintaining consistency",
          "Meeting strict regulatory compliance requirements",
          "Balancing feature richness with intuitive user experience"
        ],
        outcomes: [
          "Successfully launched platform with 10,000+ active users in first 3 months",
          "Achieved 99.9% uptime with zero security breaches",
          "Reduced transaction processing time by 40%",
          "Received 4.8/5 user satisfaction rating"
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe API"],
        images: [
          { placeholder: "Dashboard Overview - Financial Management Interface" },
          { placeholder: "Transaction Processing - Real-time Analytics View" },
          { placeholder: "Security Features - Multi-factor Authentication" },
          { placeholder: "Mobile App - Cross-platform Experience" }
        ]
      }
    },
    {
      name: "Carbon Footprint Dashboard",
      Icon: BarChart3,
      description: "Framework to track and reduce remote team carbon emissions from home offices, travel, and digital infrastructure.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      caseStudy: {
        overview: "Developed a comprehensive framework to track and reduce carbon emissions for remote teams, covering home offices, travel, and digital infrastructure while delivering measurable sustainability improvements.",
        role: "Project Manager",
        duration: "5 months",
        team: "7 members",
        challenges: [
          "Establishing accurate carbon tracking metrics for distributed teams",
          "Engaging stakeholders across departments in sustainability initiatives",
          "Creating intuitive data visualizations for complex environmental data",
          "Driving behavioral change management in remote work environments"
        ],
        outcomes: [
          "Achieved 20% reduction in team carbon footprint within first year",
          "Developed adoption framework implemented across 5 departments",
          "Delivered comprehensive ROI analysis showing cost savings",
          "Recognition as sustainability leader in remote work practices"
        ],
        technologies: ["Power BI", "Python", "Excel", "Carbon Tracking APIs"],
        images: [
          { placeholder: "Carbon Dashboard - Real-time Emissions Tracking" },
          { placeholder: "Team Analytics - Department Comparison View" },
          { placeholder: "Reduction Strategies - Action Plan Interface" },
          { placeholder: "ROI Analysis - Financial Impact Report" }
        ]
      }
    },
    {
      name: "AI Ethics Compliance",
      Icon: Code2,
      description: "Governance framework for responsible AI use in product development with bias testing and transparency protocols.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      caseStudy: {
        overview: "Created a comprehensive governance framework for responsible AI use in product development, establishing ethical guidelines, bias testing protocols, and transparency standards.",
        role: "Project Manager",
        duration: "4 months",
        team: "9 members",
        challenges: [
          "Managing complex regulatory compliance across multiple jurisdictions",
          "Creating comprehensive documentation for ethical AI frameworks",
          "Facilitating cross-functional collaboration between tech and legal teams",
          "Balancing innovation speed with ethical considerations"
        ],
        outcomes: [
          "Published comprehensive ethics playbook adopted company-wide",
          "Implemented bias testing checklist used in all AI projects",
          "Delivered training materials to 200+ employees",
          "Established industry benchmark for AI ethics compliance"
        ],
        technologies: ["Python", "TensorFlow", "Fairness Indicators", "Confluence"],
        images: [
          { placeholder: "Ethics Framework - Governance Structure" },
          { placeholder: "Bias Testing - Automated Checklist Interface" },
          { placeholder: "Training Dashboard - Employee Progress Tracking" },
          { placeholder: "Compliance Report - Audit Trail System" }
        ]
      }
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in fintech, sustainability, and tech ethics
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.name} onClick={() => setSelectedProject(project)} className="cursor-pointer">
              <BentoCard {...project} />
            </div>
          ))}
        </BentoGrid>

        {/* Case Study Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-display font-bold flex items-center gap-3">
                    <selectedProject.Icon className="w-8 h-8" />
                    {selectedProject.name}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.caseStudy.overview}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8 mt-6">
                  {/* Project Details */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Role</p>
                      <p className="text-lg font-medium">{selectedProject.caseStudy.role}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Duration</p>
                      <p className="text-lg font-medium">{selectedProject.caseStudy.duration}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Team Size</p>
                      <p className="text-lg font-medium">{selectedProject.caseStudy.team}</p>
                    </div>
                  </div>

                  {/* Images Grid */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Showcase</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.caseStudy.images.map((img: any, idx: number) => (
                        <div 
                          key={idx}
                          className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border p-6"
                        >
                          <p className="text-center text-muted-foreground">{img.placeholder}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
                    <div className="space-y-3">
                      {selectedProject.caseStudy.challenges.map((challenge: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                          <span className="text-primary mt-1 text-lg">•</span>
                          <p className="text-foreground/90">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Outcomes & Impact</h3>
                    <div className="space-y-3">
                      {selectedProject.caseStudy.outcomes.map((outcome: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <span className="text-primary mt-1 text-lg">✓</span>
                          <p className="text-foreground/90 font-medium">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.caseStudy.technologies.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-base px-4 py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
