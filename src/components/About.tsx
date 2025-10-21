const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center">About Me</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              As an aspiring project manager, I bring a unique blend of technical expertise 
              and strategic thinking to every initiative. My passion lies in transforming 
              complex challenges into streamlined, efficient solutions that drive organizational success.
            </p>
            <p className="text-lg leading-relaxed mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default About;
