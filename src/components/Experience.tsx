import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import excelerateLogo from "@/assets/excelerate-logo.png";

const Experience = () => {
  const data = [
    {
      title: "2025-2026",
      content: (
        <div className="space-y-8">
          {/* Associate Project Management Intern */}
          <Card className="p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background border-2 border-border flex items-center justify-center flex-shrink-0 p-2">
                <img 
                  src={excelerateLogo} 
                  alt="Excelerate" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 space-y-3 md:space-y-4 w-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    Associate Project Management Intern
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground font-medium">
                    Excelerate
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    December 2025 - January 2026
                  </p>
                </div>
                
                <div className="space-y-2 md:space-y-3 text-sm md:text-base text-foreground/90">
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Led cross-functional team collaboration to deliver project milestones on schedule</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Developed comprehensive project documentation and status reports for stakeholders</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Implemented risk management strategies to ensure project success</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Facilitated daily stand-ups and sprint planning sessions using Agile methodologies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">Project Planning</Badge>
                  <Badge variant="secondary" className="text-xs">Stakeholder Management</Badge>
                  <Badge variant="secondary" className="text-xs">Agile/Scrum</Badge>
                  <Badge variant="secondary" className="text-xs">Risk Management</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Management Trainee */}
          <Card className="p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background border-2 border-border flex items-center justify-center flex-shrink-0 p-2">
                <img 
                  src={excelerateLogo} 
                  alt="Excelerate" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 space-y-3 md:space-y-4 w-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    Project Management Trainee
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground font-medium">
                    Excelerate
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    November 2025 - December 2025
                  </p>
                </div>
                
                <div className="space-y-2 md:space-y-3 text-sm md:text-base text-foreground/90">
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Assisted in project planning and resource allocation for multiple initiatives</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Maintained project timelines and coordinated team deliverables</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Conducted research and analysis to support project decision-making</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <p>Participated in client meetings and prepared presentation materials</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="text-xs">Project Coordination</Badge>
                  <Badge variant="secondary" className="text-xs">Research & Analysis</Badge>
                  <Badge variant="secondary" className="text-xs">Documentation</Badge>
                  <Badge variant="secondary" className="text-xs">Team Collaboration</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-2 md:px-4">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;
