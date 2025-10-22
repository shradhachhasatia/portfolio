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
      name: "E-Commerce Platform",
      Icon: Briefcase,
      description: "Full-featured e-commerce solution with product management, secure checkout, and order tracking.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      caseStudy: {
        overview: "Led the development of a modern e-commerce platform from concept to launch, focusing on user experience and conversion optimization.",
        role: "Project Manager",
        duration: "8 months",
        team: "12 members",
        challenges: [
          "Coordinating multiple vendor integrations",
          "Optimizing site performance for mobile users",
          "Managing inventory across multiple warehouses"
        ],
        outcomes: [
          "300% increase in online sales within 6 months",
          "Reduced cart abandonment by 35%",
          "Improved page load times by 50%"
        ],
        technologies: ["Next.js", "Shopify", "Stripe", "Redis"],
        images: [
          { placeholder: "Product Catalog - Enhanced Shopping Experience" },
          { placeholder: "Checkout Flow - Streamlined Payment Process" },
          { placeholder: "Admin Dashboard - Inventory Management" },
          { placeholder: "Analytics - Sales Performance Metrics" }
        ]
      }
    },
    {
      name: "Task Management",
      Icon: Code2,
      description: "Collaborative task tracking tool with real-time updates and analytics dashboard.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      caseStudy: {
        overview: "Developed and launched a comprehensive task management solution for remote teams, enabling seamless collaboration and productivity tracking.",
        role: "Project Manager",
        duration: "5 months",
        team: "6 members",
        challenges: [
          "Real-time synchronization across devices",
          "Intuitive UI for complex project hierarchies",
          "Integration with existing tools"
        ],
        outcomes: [
          "5,000+ teams using the platform",
          "40% improvement in team productivity",
          "Featured in top productivity tools list"
        ],
        technologies: ["React", "Firebase", "WebSockets", "Material-UI"],
        images: [
          { placeholder: "Kanban Board - Visual Task Organization" },
          { placeholder: "Team Collaboration - Real-time Updates" },
          { placeholder: "Analytics Dashboard - Productivity Insights" },
          { placeholder: "Mobile App - On-the-go Task Management" }
        ]
      }
    },
    {
      name: "Analytics Dashboard",
      Icon: BarChart3,
      description: "Real-time data visualization and monitoring platform with interactive charts and reports.",
      href: "#",
      cta: "View Case Study",
      background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4",
      caseStudy: {
        overview: "Created an enterprise-grade analytics platform for data-driven decision making, featuring customizable dashboards and automated reporting.",
        role: "Project Manager",
        duration: "7 months",
        team: "10 members",
        challenges: [
          "Processing large datasets in real-time",
          "Creating intuitive data visualizations",
          "Ensuring data security and privacy"
        ],
        outcomes: [
          "Reduced reporting time by 70%",
          "Enabled data-driven decisions for 50+ departments",
          "Won best analytics tool award"
        ],
        technologies: ["Vue.js", "D3.js", "Python", "MongoDB", "Apache Kafka"],
        images: [
          { placeholder: "Main Dashboard - Real-time Metrics Overview" },
          { placeholder: "Custom Reports - Automated Data Analysis" },
          { placeholder: "Data Visualization - Interactive Charts" },
          { placeholder: "Admin Panel - User Management & Permissions" }
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
            A showcase of my recent work in fintech, web development, and data visualization
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
