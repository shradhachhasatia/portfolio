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
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-12 md:mb-16 text-center"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid lg:grid-cols-[320px,1fr] gap-8 lg:gap-12 items-center"
          >
              {/* Photo Section - Left Side */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all"></div>
                  <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img 
                      src={profilePlaceholder} 
                      alt="Professional profile showcasing project management expertise" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                    As an aspiring project manager, I bring a unique blend of <span className="font-semibold text-foreground">technical expertise</span> and <span className="font-semibold text-foreground">strategic thinking</span> to every initiative. My passion lies in transforming complex challenges into streamlined, efficient solutions that drive organizational success.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    With a foundation in project management methodologies and a commitment to continuous learning, I focus on delivering projects that not only meet objectives but exceed stakeholder expectations. My approach combines analytical rigor with creative problem-solving to navigate the complexities of modern project delivery.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    I believe in the power of <span className="text-foreground font-medium">collaboration</span>, <span className="text-foreground font-medium">clear communication</span>, and <span className="text-foreground font-medium">adaptive leadership</span> to build high-performing teams and deliver exceptional results.
                  </p>
                </div>

                {/* Core Strengths */}
                <div className="pt-4 border-t border-border/50">
                  <h3 className="text-lg md:text-xl font-display font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Core Strengths
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {strengths.map((strength, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-sm py-2 px-4 font-medium border-2 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all cursor-default"
                      >
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default About;
