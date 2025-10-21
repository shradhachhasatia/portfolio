import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import linkedinLogo from "@/assets/linkedin-learning-logo.png";
import oxfordLogo from "@/assets/oxford-logo.png";
import forageLogo from "@/assets/forage-logo.png";

const certificates = [
  {
    title: "Project Management: Technical Projects",
    issuer: "LinkedIn Learning",
    logo: linkedinLogo,
    date: "2024",
    skills: ["Technical PM", "Agile", "Stakeholder Management"],
  },
  {
    title: "CBRE PM Job Simulation",
    issuer: "Forage",
    logo: forageLogo,
    date: "2024",
    skills: ["Real Estate PM", "Client Relations", "Project Delivery"],
  },
  {
    title: "Mistakes to Avoid in Agile Project Management",
    issuer: "LinkedIn Learning",
    logo: linkedinLogo,
    date: "2024",
    skills: ["Agile Methodologies", "Risk Management", "Best Practices"],
  },
  {
    title: "Project Management Certificate",
    issuer: "University of Oxford",
    logo: oxfordLogo,
    date: "2023",
    skills: ["Strategic Planning", "Leadership", "Program Management"],
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Certificates & Credentials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continuous learning through industry-recognized programs and certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="group p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-xl bg-background border-2 border-border flex items-center justify-center flex-shrink-0 p-2 group-hover:border-primary/30 transition-colors">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4" />
                      {cert.issuer} • {cert.date}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
