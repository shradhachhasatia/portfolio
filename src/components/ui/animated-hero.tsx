import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["strategic", "innovative", "organized", "driven", "collaborative"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-center mb-2 bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                [Your Name]
              </h1>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl tracking-tight text-center font-display font-semibold mt-8">
              <span className="text-foreground">Aspiring</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-foreground">Project Manager</span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center mx-auto font-light">
              Dedicated to delivering exceptional results through strategic planning, 
              effective communication, and meticulous attention to detail.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              size="lg" 
              className="gap-2 font-medium" 
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch <MoveRight className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              className="gap-2 font-medium" 
              variant="outline"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
