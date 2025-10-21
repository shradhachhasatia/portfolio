import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  caseStudy: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "Project Title 1",
    description: "Brief description of the project and key outcomes achieved.",
    caseStudy: "Detailed case study content here. Describe the challenge, approach, methodology, and results. Include metrics and key learnings from the project.",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Project Title 2",
    description: "Brief description of the project and key outcomes achieved.",
    caseStudy: "Detailed case study content here. Describe the challenge, approach, methodology, and results. Include metrics and key learnings from the project.",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Project Title 3",
    description: "Brief description of the project and key outcomes achieved.",
    caseStudy: "Detailed case study content here. Describe the challenge, approach, methodology, and results. Include metrics and key learnings from the project.",
    imageUrl: "/placeholder.svg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-foreground/20"
                onClick={() => setSelectedProject(project)}
              >
                {project.imageUrl && (
                  <div className="w-full h-40 bg-accent rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Project Image</span>
                  </div>
                )}
                <h3 className="text-xl font-display font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-display font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {selectedProject?.imageUrl && (
              <div className="w-full h-64 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Project Image Placeholder</span>
              </div>
            )}
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground whitespace-pre-line">
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
