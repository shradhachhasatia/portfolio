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
    <section id="contact" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4">
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form - Left Side */}
          <div className="md:col-span-1">
            <Card className="p-6 md:p-8 lg:p-10 shadow-2xl border-2 backdrop-blur-sm bg-background/95 h-full">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                    className="min-h-[200px] text-base border-2 focus:border-primary transition-colors resize-none"
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
            </Card>
          </div>

          {/* Resume & LinkedIn - Right Side */}
          <div className="md:col-span-1 space-y-4 md:space-y-6">
            <Card className="p-6 md:p-8 shadow-2xl border-2 backdrop-blur-sm bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Let's Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Download my resume or connect on LinkedIn
                  </p>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Button
                    onClick={handleDownloadResume}
                    variant="default"
                    size="lg"
                    className="w-full gap-2 h-14 text-base shadow-lg hover:shadow-xl transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </Button>
                  
                  <Button
                    onClick={handleLinkedIn}
                    variant="outline"
                    size="lg"
                    className="w-full gap-2 h-14 text-base border-2 hover:bg-accent transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Response time:</span>
                    <span className="text-sm font-medium">Within 48 hours</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
