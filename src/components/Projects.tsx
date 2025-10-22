import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Briefcase, Code2, Wallet, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Lockbook",
      Icon: Wallet,
      description: "A comprehensive fintech application for financial management and secure transactions with real-time analytics.",
      href: "#",
      cta: "View Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      name: "E-Commerce Platform",
      Icon: Briefcase,
      description: "Full-featured e-commerce solution with product management, secure checkout, and order tracking.",
      href: "#",
      cta: "View Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      name: "Task Management",
      Icon: Code2,
      description: "Collaborative task tracking tool with real-time updates and analytics dashboard.",
      href: "#",
      cta: "View Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      name: "Analytics Dashboard",
      Icon: BarChart3,
      description: "Real-time data visualization and monitoring platform with interactive charts and reports.",
      href: "#",
      cta: "View Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4",
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
            <BentoCard key={project.name} {...project} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Projects;
