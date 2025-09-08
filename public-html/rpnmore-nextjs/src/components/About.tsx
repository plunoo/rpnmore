export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Ripple & More
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking company dedicated to empowering businesses and individuals through innovative solutions and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-foreground">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide cutting-edge solutions that drive growth, innovation, and success for our clients.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent-foreground">💡</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading provider of innovative business solutions and advisory services worldwide.
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-card border border-border">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-foreground">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              Excellence, integrity, innovation, and commitment to client success above all else.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}