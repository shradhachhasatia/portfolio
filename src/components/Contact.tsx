import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Download, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your email handling logic here
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadResume = () => {
    // TODO: Add your resume download link
    toast.info("Resume download will be available soon!");
  };

  const handleLinkedIn = () => {
    // TODO: Add your LinkedIn profile URL
    window.open("https://www.linkedin.com/", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss how we can work together on your next project
            </p>
          </div>
          
          <Card className="p-8 md:p-10 shadow-2xl border-2 backdrop-blur-sm bg-background/95">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/90">Name</label>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-base h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/90">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-base h-12 border-2 focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/90">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[150px] text-base border-2 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full font-medium h-12 text-base shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-4">Or connect with me</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  size="lg"
                  className="flex-1 gap-2 font-medium border-2 hover:border-primary hover:bg-primary/5 transition-all h-12"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <Button
                  onClick={handleLinkedIn}
                  variant="outline"
                  size="lg"
                  className="gap-2 font-medium border-2 hover:border-primary hover:bg-primary/5 transition-all h-12 sm:w-auto"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
