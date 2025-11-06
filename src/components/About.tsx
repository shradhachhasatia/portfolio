import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";
import { useEffect, useState } from "react";

const About = () => {
  const titles = ["Strategic", "Innovative", "Results-Driven", "Collaborative"];
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev >= titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-display mb-3">
              Hi, I'm <span className="text-primary font-bold">Niv</span>
            </h2>
            <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold flex items-center justify-center gap-3 flex-wrap">
              <span>Aspiring</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleNumber}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  {titles[titleNumber]}
                </motion.span>
              </AnimatePresence>
              <span>Project Manager</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-card border border-border rounded-3xl p-6 md:p-10 lg:p-12 shadow-xl backdrop-blur-sm"
          >
            {/* Gradient accent border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-3xl -z-10"></div>
            
            <div className="grid lg:grid-cols-[320px,1fr] gap-8 lg:gap-12 items-center">
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
                  <p className="text-xl md:text-2xl font-display font-semibold leading-relaxed text-foreground">
                    I help businesses deliver projects that matter.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Dedicated to delivering exceptional results through strategic planning, effective communication, and meticulous attention to detail.
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
