import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const data = [
    {
      title: "2025-2026",
      content: (
        <div className="space-y-8">
          {/* Associate Project Management Intern */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 border-2 border-border">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Associate Project Management Intern
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    Excelerate
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    December 2025 - January 2026
                  </p>
                </div>
                
                <div className="space-y-3 text-foreground/90">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Led cross-functional team collaboration to deliver project milestones on schedule</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Developed comprehensive project documentation and status reports for stakeholders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Implemented risk management strategies to ensure project success</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Facilitated daily stand-ups and sprint planning sessions using Agile methodologies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Project Planning</Badge>
                  <Badge variant="secondary">Stakeholder Management</Badge>
                  <Badge variant="secondary">Agile/Scrum</Badge>
                  <Badge variant="secondary">Risk Management</Badge>
                </div>

                {/* Placeholder for experience image */}
                <div className="mt-6 w-full h-48 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <p className="text-muted-foreground text-sm">Experience Image Placeholder</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Management Trainee */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 border-2 border-border">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Project Management Trainee
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    Excelerate
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    November 2025 - December 2025
                  </p>
                </div>
                
                <div className="space-y-3 text-foreground/90">
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Assisted in project planning and resource allocation for multiple initiatives</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Maintained project timelines and coordinated team deliverables</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Conducted research and analysis to support project decision-making</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <p>Participated in client meetings and prepared presentation materials</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Project Coordination</Badge>
                  <Badge variant="secondary">Research & Analysis</Badge>
                  <Badge variant="secondary">Documentation</Badge>
                  <Badge variant="secondary">Team Collaboration</Badge>
                </div>

                {/* Placeholder for experience image */}
                <div className="mt-6 w-full h-48 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <p className="text-muted-foreground text-sm">Experience Image Placeholder</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;
