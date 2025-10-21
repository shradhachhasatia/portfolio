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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            Get In Touch
          </h2>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[150px] text-base"
                />
              </div>
              <Button type="submit" className="w-full font-medium">
                Send Message
              </Button>
            </form>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="flex-1 gap-2 font-medium"
              >
                <Download className="w-4 h-4" />
                Download My Resume
              </Button>
              <Button
                onClick={handleLinkedIn}
                variant="outline"
                className="gap-2 font-medium"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
