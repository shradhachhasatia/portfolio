import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const certificates = [
  {
    title: "Project Management: Technical Projects",
    issuer: "LinkedIn Learning",
    icon: "LL",
  },
  {
    title: "CBRE PM Job Simulation",
    issuer: "Forage",
    icon: "F",
  },
  {
    title: "Mistakes to Avoid in Agile Project Management",
    issuer: "LinkedIn Learning",
    icon: "LL",
  },
  {
    title: "Project Management Certificate",
    issuer: "University of Oxford",
    icon: "OX",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            Certificates & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-foreground/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold font-display">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {cert.issuer}
                    </p>
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
