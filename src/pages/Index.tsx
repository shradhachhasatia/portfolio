import { Home, User, Award, Briefcase } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Hero } from "@/components/ui/animated-hero";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Certificates', url: '#certificates', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar items={navItems} />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground text-sm border-t">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
