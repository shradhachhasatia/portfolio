import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  const strengths = [
    "Strategic Planning",
    "Agile & Waterfall",
    "Stakeholder Management",
    "Risk Mitigation",
    "Team Leadership",
    "Process Optimization"
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start">
            {/* Photo Section - Lowkey */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-border bg-muted">
                  <img 
                    src={profilePlaceholder} 
                    alt="Profile" 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  As an aspiring project manager, I bring a unique blend of technical expertise 
                  and strategic thinking to every initiative. My passion lies in transforming 
                  complex challenges into streamlined, efficient solutions that drive organizational success.
                </p>
                <p className="text-lg leading-relaxed">
                  With a foundation in project management methodologies and a commitment to 
                  continuous learning, I focus on delivering projects that not only meet objectives 
                  but exceed stakeholder expectations. My approach combines analytical rigor with 
                  creative problem-solving to navigate the complexities of modern project delivery.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe in the power of collaboration, clear communication, and adaptive 
                  leadership to build high-performing teams and deliver exceptional results.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="mt-10">
                <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Core Strengths
                </h3>
                <div className="flex flex-wrap gap-3">
                  {strengths.map((strength, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-sm py-2 px-4 font-medium border-2 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
