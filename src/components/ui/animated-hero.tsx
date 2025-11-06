import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Strategic", "Innovative", "Results-Driven", "Collaborative"],
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
        <div className="flex gap-6 md:gap-8 py-16 md:py-20 lg:py-32 items-center justify-center flex-col">
          <div className="flex gap-3 md:gap-4 flex-col max-w-4xl">
            <h2 className="text-2xl md:text-3xl mb-3 text-center">
              Hi, I'm <span className="text-primary font-bold">Niv</span>
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl tracking-tight text-center font-display font-semibold leading-tight">
              <span className="text-foreground">Aspiring</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 pt-1 md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-primary"
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
            </h1>

            <p className="text-xl md:text-2xl font-display font-semibold leading-relaxed text-foreground text-center mx-auto px-4 mt-4">
              I help businesses deliver projects that matter.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4">
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
