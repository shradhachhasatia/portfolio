import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: string;
  caseStudy: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Project Title 1",
    description: "Brief description of the project and key outcomes achieved.",
    category: "Digital Transformation",
    caseStudy: "Detailed case study content here. Describe the challenge, approach, methodology, and results. Include metrics and key learnings from the project.",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Project Title 2",
    description: "Brief description of the project and key outcomes achieved.",
    category: "Agile Implementation",
    caseStudy: "Detailed case study content here. Describe the challenge, approach, methodology, and results. Include metrics and key learnings from the project.",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Project Title 3",
    description: "Brief description of the project and key outcomes achieved.",
    category: "Process Optimization",
    caseStudy: "Detailed case study content here. Describe the challenge, approach, methodology, and results. Include metrics and key learnings from the project.",
    imageUrl: "/placeholder.svg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Projects & Case Studies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world project management experience driving successful outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                onClick={() => setSelectedProject(project)}
              >
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="secondary" className="font-medium">
                    {project.category}
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-xs font-bold text-primary">0{index + 1}</span>
                  </div>
                </div>
                {project.imageUrl && (
                  <div className="w-full h-40 bg-muted rounded-lg mb-4 flex items-center justify-center border-2 border-border overflow-hidden group-hover:border-primary/30 transition-colors">
                    <span className="text-muted-foreground text-sm">Project Image</span>
                  </div>
                )}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  View Case Study
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge variant="secondary" className="mb-3 font-medium">
                  {selectedProject?.category}
                </Badge>
                <DialogTitle className="text-3xl font-display font-bold">
                  {selectedProject?.title}
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>
          <div className="space-y-6 mt-4">
            {selectedProject?.imageUrl && (
              <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center border-2 border-border overflow-hidden">
                <span className="text-muted-foreground">Project Image Placeholder - Add your project images here</span>
              </div>
            )}
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {selectedProject?.caseStudy}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
