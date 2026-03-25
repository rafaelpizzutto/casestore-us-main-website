import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import {
  Brain,
  Zap,
  Cloud,
  Code,
  Link as LinkIcon,
  Package,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Zap,
  Cloud,
  Code,
  Link: LinkIcon,
  Package,
};

const defaultServices = [
  {
    id: "1",
    name: "AI Solutions",
    description: "Custom AI agents, machine learning models, and intelligent automation tailored to your business.",
    icon: "Brain",
  },
  {
    id: "2",
    name: "Digital Transformation",
    description: "End-to-end strategy and execution to modernize your operations and accelerate growth.",
    icon: "Zap",
  },
  {
    id: "3",
    name: "Cloud & DevOps",
    description: "Scalable cloud architecture, CI/CD pipelines, and infrastructure-as-code solutions.",
    icon: "Cloud",
  },
  {
    id: "4",
    name: "Custom Software",
    description: "Bespoke web and mobile applications built to solve your unique business challenges.",
    icon: "Code",
  },
  {
    id: "5",
    name: "Integration & Automation",
    description: "Connect your tools and automate workflows to eliminate manual work and reduce errors.",
    icon: "Link",
  },
  {
    id: "6",
    name: "Warehouse & Logistics Tech",
    description: "AI-powered warehouse management and supply chain optimization platforms.",
    icon: "Package",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "AI Agents Deployed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
];

const Home = () => {
  const { data: services } = useQuery({
    queryKey: ["csmain_services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("csmain_services")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (error) throw error;
      return data;
    },
  });

  const displayServices = services?.length ? services : defaultServices;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        description="CaseStore delivers innovative IT solutions, AI-powered digital transformation, custom software, cloud & DevOps, and integration services for modern businesses."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CaseStore",
          url: "https://www.casestore.us",
          description: "Innovative IT solutions and AI-powered digital transformation",
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0d1f3c 40%, #1a2d4f 70%, #0f2447 100%)",
        }}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "#3B82F6" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl"
          style={{ background: "#6366f1" }}
        />

        <div className="relative container mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            <Brain size={14} />
            AI-Powered Technology Company
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Innovative IT Solutions &{" "}
            <span style={{ color: "#3B82F6" }}>AI-Powered</span>{" "}
            Digital Transformation
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/70 max-w-3xl mx-auto mb-10">
            We build the technology that powers tomorrow's businesses — from custom AI agents to
            full-stack platforms and enterprise integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="text-base px-8 py-4"
                style={{ background: "#3B82F6", color: "#fff" }}
              >
                Explore Services
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-4 border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
              >
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From strategy to deployment — we cover the full spectrum of modern technology services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service) => {
              const iconKey = (service as { icon?: string }).icon || "Code";
              const Icon = serviceIconMap[iconKey] || Code;
              return (
                <Card
                  key={service.id}
                  className="border border-border hover:border-primary/50 transition-colors group"
                >
                  <CardContent className="pt-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Divisions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized platforms built to solve industry-specific challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* IT Consulting Division */}
            <Card className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Brain className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">IT Consulting Division</h3>
                <p className="text-muted-foreground mb-6">
                  Custom AI agents, digital transformation, cloud infrastructure, and enterprise
                  software solutions — including our flagship Warehouse Tracker AI platform.
                </p>
                <div className="space-y-2 mb-6">
                  {["AI Agents & Automation", "Custom Software Development", "Warehouse Tracker AI Platform"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/divisions">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Packaging Division */}
            <Card className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Package className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Packaging Division</h3>
                <p className="text-muted-foreground mb-6">
                  Premium packaging supplies, logistics support, and smart inventory management
                  for warehouses and distribution centers across the U.S.
                </p>
                <div className="space-y-2 mb-6">
                  {["Stretch Film & Corrugated Boxes", "Packing Supplies & Materials", "Volume Pricing & Contracts"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <a href="https://packaging.casestore.us" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Visit Packaging Division
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1a2d4f 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto mb-10">
            Let's talk about how CaseStore can accelerate your digital transformation with
            custom AI solutions and enterprise technology services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" style={{ background: "#3B82F6", color: "#fff" }} className="text-base px-8">
                Get Started Today
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-base px-8 border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
