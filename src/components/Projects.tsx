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
        skills: ["Agile Methodology", "Risk Management", "Stakeholder Communication", "Budget Management"],
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
        skills: ["Sustainability Metrics", "Stakeholder Engagement", "Data Visualization", "Change Management"],
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
        skills: ["Risk Management", "Compliance Documentation", "Cross-functional Collaboration", "Ethical Frameworks"],
        images: [
          { placeholder: "Ethics Framework - Governance Structure" },
          { placeholder: "Bias Testing - Automated Checklist Interface" },
          { placeholder: "Training Dashboard - Employee Progress Tracking" },
          { placeholder: "Compliance Report - Audit Trail System" }
        ]
      }
    },
    {
      name: "CBRE Project Management",
      Icon: Briefcase,
      description: "Real estate project management simulation focused on client relations and project delivery excellence.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
      caseStudy: {
        overview: "Led comprehensive project management simulation for CBRE, focusing on real estate portfolio management, client relationship building, and strategic project delivery in commercial property sector.",
        role: "Project Manager",
        duration: "3 months",
        team: "6 members",
        challenges: [
          "Managing multiple stakeholder expectations across property portfolio",
          "Coordinating complex timeline dependencies for property development",
          "Balancing budget constraints with quality standards",
          "Adapting to dynamic market conditions and client requirements"
        ],
        outcomes: [
          "Successfully delivered project simulation with 95% client satisfaction",
          "Developed stakeholder communication framework adopted by team",
          "Implemented risk mitigation strategies reducing delays by 30%",
          "Created reusable project templates for future engagements"
        ],
        skills: ["Real Estate PM", "Client Relations", "Project Delivery", "Portfolio Management"],
        images: [
          { placeholder: "Project Timeline - Gantt Chart View" },
          { placeholder: "Stakeholder Dashboard - Communication Matrix" }
        ]
      }
    },
    {
      name: "Siemens Mobility Solutions",
      Icon: Code2,
      description: "Transportation infrastructure project management with focus on stakeholder coordination and execution.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
      caseStudy: {
        overview: "Managed simulation project for Siemens Mobility focusing on modern transportation solutions, infrastructure planning, and multi-stakeholder coordination for sustainable mobility initiatives.",
        role: "Project Manager",
        duration: "4 months",
        team: "8 members",
        challenges: [
          "Coordinating across multiple technical and non-technical stakeholders",
          "Managing complex regulatory and safety compliance requirements",
          "Integrating legacy systems with modern mobility solutions",
          "Ensuring project alignment with sustainability goals"
        ],
        outcomes: [
          "Delivered comprehensive project plan with 98% milestone achievement",
          "Established stakeholder engagement framework for mobility projects",
          "Created risk assessment methodology adopted across projects",
          "Received commendation for sustainability integration approach"
        ],
        skills: ["Mobility Solutions", "Stakeholder Management", "Project Execution", "Sustainability Planning"],
        images: [
          { placeholder: "Mobility Infrastructure - System Architecture" },
          { placeholder: "Stakeholder Map - Engagement Strategy" }
        ]
      }
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            A showcase of my recent work in fintech, sustainability, and tech ethics
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3 max-w-7xl mx-auto gap-4 md:gap-6">
          {projects.map((project) => (
            <div key={project.name} onClick={() => setSelectedProject(project)} className="cursor-pointer">
              <BentoCard {...project} />
            </div>
          ))}
        </BentoGrid>

        {/* Case Study Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto p-4 md:p-6">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl md:text-2xl lg:text-3xl font-display font-bold flex items-center gap-2 md:gap-3">
                    <selectedProject.Icon className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                    <span className="leading-tight">{selectedProject.name}</span>
                  </DialogTitle>
                  <DialogDescription className="text-sm md:text-base">
                    {selectedProject.caseStudy.overview}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 md:space-y-8 mt-4 md:mt-6">
                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase">Role</p>
                      <p className="text-base md:text-lg font-medium">{selectedProject.caseStudy.role}</p>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase">Duration</p>
                      <p className="text-base md:text-lg font-medium">{selectedProject.caseStudy.duration}</p>
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-xs md:text-sm font-semibold text-muted-foreground uppercase">Team Size</p>
                      <p className="text-base md:text-lg font-medium">{selectedProject.caseStudy.team}</p>
                    </div>
                  </div>

                  {/* Images Grid */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Project Showcase</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {selectedProject.caseStudy.images.map((img: any, idx: number) => (
                        <div 
                          key={idx}
                          className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border p-3 md:p-6"
                        >
                          <p className="text-center text-muted-foreground text-xs md:text-sm">{img.placeholder}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Key Challenges</h3>
                    <div className="space-y-2 md:space-y-3">
                      {selectedProject.caseStudy.challenges.map((challenge: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-muted/30 rounded-lg">
                          <span className="text-primary mt-0.5 md:mt-1 text-base md:text-lg flex-shrink-0">•</span>
                          <p className="text-sm md:text-base text-foreground/90">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Outcomes & Impact</h3>
                    <div className="space-y-2 md:space-y-3">
                      {selectedProject.caseStudy.outcomes.map((outcome: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <span className="text-primary mt-0.5 md:mt-1 text-base md:text-lg flex-shrink-0">✓</span>
                          <p className="text-sm md:text-base text-foreground/90 font-medium">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Management Skills */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Project Management Skills</h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedProject.caseStudy.skills.map((skill: string) => (
                        <Badge key={skill} variant="secondary" className="text-xs md:text-sm px-2 md:px-4 py-1 md:py-2">
                          {skill}
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
