import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import linkedinLogo from "@/assets/linkedin-learning-logo.png";
import oxfordLogo from "@/assets/oxford-logo.png";
import forageLogo from "@/assets/forage-logo.png";
import actitimeLogo from "@/assets/actitime-logo.png";
import atlassianLogo from "@/assets/atlassian-logo.png";

const certificates = [
  {
    title: "Project Management: Technical Projects",
    issuer: "LinkedIn Learning",
    logo: linkedinLogo,
    date: "2025",
    skills: ["Technical PM", "Agile", "Stakeholder Management"],
  },
  {
    title: "CBRE - Project Management Job Simulation",
    issuer: "Forage",
    logo: forageLogo,
    date: "2025",
    skills: ["Real Estate PM", "Client Relations", "Project Delivery"],
  },
  {
    title: "Siemens Mobility - Project Manager Job Simulation",
    issuer: "Forage",
    logo: forageLogo,
    date: "2025",
    skills: ["Mobility Solutions", "Stakeholder Management", "Project Execution"],
  },
  {
    title: "Agile Project Management",
    issuer: "Atlassian",
    logo: atlassianLogo,
    date: "2025",
    skills: ["Agile Methodologies", "Scrum", "Jira"],
  },
  {
    title: "Project Management Certificate",
    issuer: "Oxford Home Study Centre",
    logo: oxfordLogo,
    date: "2025",
    skills: ["Strategic Planning", "Leadership", "Program Management"],
  },
  {
    title: "actiTIME Project Management Certificate",
    issuer: "actiTIME",
    logo: actitimeLogo,
    date: "2025",
    skills: ["Time Management", "Resource Planning", "Project Tracking"],
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
              Certificates & Credentials
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Continuous learning through industry-recognized programs and certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="group p-4 md:p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 md:gap-5">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background border-2 border-border flex items-center justify-center flex-shrink-0 p-2 group-hover:border-primary/30 transition-colors">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base md:text-xl font-display font-semibold group-hover:text-primary transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground flex items-center gap-2 mb-3">
                      <Award className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      <span className="truncate">{cert.issuer} • {cert.date}</span>
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-xs font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
