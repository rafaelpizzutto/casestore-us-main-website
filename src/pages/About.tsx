import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, LinkIcon, TrendingUp, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the leading edge of technology so our clients always have access to the most impactful solutions.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "We build systems that run at 99.9% uptime and back our work with clear SLAs and proactive support.",
    },
    {
      icon: LinkIcon,
      title: "Integration",
      description: "We believe technology works best when it's seamlessly connected — across tools, teams, and processes.",
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Every engagement is measured by business outcomes, not just deliverables. We succeed when you succeed.",
    },
  ];

  const team = [
    { name: "Engineering Team", role: "Full-Stack & AI Development" },
    { name: "Solutions Architects", role: "Cloud & Infrastructure" },
    { name: "AI Research", role: "Machine Learning & Agents" },
    { name: "Client Success", role: "Strategy & Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us"
        description="Learn about CaseStore — a technology company founded to bridge the gap between business operations and cutting-edge IT solutions, AI, and digital transformation."
      />
      <Navigation />

      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a2d4f 100%)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About CaseStore</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            We're a technology company that bridges the gap between business operations and modern IT — empowering teams with AI, custom software, and enterprise integrations.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              CaseStore was founded with a clear mission: to help businesses harness the power of technology without the complexity. We saw too many companies struggling with fragmented tools, outdated systems, and the pressure to compete in an increasingly AI-driven world.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our founding team — engineers, product managers, and AI researchers — came together to build a company that delivers real technology transformation: not just consulting slides, but working systems that generate measurable ROI.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From our Packaging Division to the Warehouse Tracker AI platform to enterprise custom software, every product we build is driven by deep domain expertise and a relentless focus on outcomes. We are U.S.-based and serve clients nationwide and globally.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses through innovative IT solutions and AI — making enterprise-grade technology accessible, reliable, and transformative for organizations of every size.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A world where every business operates with intelligent, interconnected technology — where AI handles the repetitive, humans focus on the creative, and data drives every decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every line of code we write.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center border border-border hover:border-primary/50 transition-colors">
                <CardContent className="pt-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multidisciplinary experts united by a passion for technology and business impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="text-center border border-border">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border border-border">
              <CardContent className="pt-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">U.S. Based</h3>
                <p className="text-sm text-muted-foreground">American company, serving clients nationwide with local expertise and global reach.</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Security First</h3>
                <p className="text-sm text-muted-foreground">Every system we build follows security best practices and compliance standards from day one.</p>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">500+ projects delivered with measurable ROI across logistics, retail, healthcare, and finance.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
