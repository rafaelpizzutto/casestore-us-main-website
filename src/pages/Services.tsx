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
    description: "Custom AI agents, machine learning models, and intelligent automation tailored to your business needs.",
    icon: "Brain",
    features: ["Custom AI Agents & Chatbots", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
  },
  {
    id: "2",
    name: "Digital Transformation",
    description: "End-to-end strategy and execution to modernize your operations and accelerate business growth.",
    icon: "Zap",
    features: ["Technology Roadmap & Strategy", "Legacy System Modernization", "Process Reengineering", "Change Management"],
  },
  {
    id: "3",
    name: "Cloud & DevOps",
    description: "Scalable cloud architecture, CI/CD pipelines, and infrastructure-as-code for reliable deployments.",
    icon: "Cloud",
    features: ["AWS, GCP & Azure Architecture", "Docker & Kubernetes", "CI/CD Pipeline Setup", "Infrastructure as Code"],
  },
  {
    id: "4",
    name: "Custom Software",
    description: "Bespoke web and mobile applications built to solve your unique operational and business challenges.",
    icon: "Code",
    features: ["Full-Stack Web Applications", "Mobile Apps (iOS & Android)", "API Design & Development", "SaaS Platform Development"],
  },
  {
    id: "5",
    name: "Integration & Automation",
    description: "Connect your tools and automate workflows to eliminate manual work and reduce costly errors.",
    icon: "Link",
    features: ["API & Webhook Integrations", "Zapier / Make / n8n Workflows", "ERP & CRM Integrations", "Data Pipeline Automation"],
  },
  {
    id: "6",
    name: "Warehouse & Logistics Tech",
    description: "AI-powered warehouse management and supply chain optimization platforms for modern operations.",
    icon: "Package",
    features: ["Inventory Management Systems", "Real-Time Order Tracking", "Demand Forecasting AI", "Logistics Dashboard Analytics"],
  },
];

const Services = () => {
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
        title="Our Services"
        description="Explore CaseStore's full range of IT services: AI solutions, digital transformation, cloud & DevOps, custom software, integration & automation, and warehouse tech."
      />
      <Navigation />

      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #1a2d4f 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Zap size={14} />
            Enterprise-Grade Technology
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business and deliver measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayServices.map((service) => {
              const iconKey = (service as { icon?: string }).icon || "Code";
              const Icon = serviceIconMap[iconKey] || Code;
              const features: string[] = (service as { features?: string[] }).features || [];
              return (
                <Card
                  key={service.id}
                  className="border border-border hover:border-primary/50 transition-colors"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    {features.length > 0 && (
                      <ul className="space-y-2">
                        {features.map((feature: string) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle size={14} className="text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a2d4f 100%)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-blue-100/70 text-lg max-w-xl mx-auto mb-8">
            Book a free consultation with our team and we'll help you identify the right solution for your business.
          </p>
          <Link to="/contact">
            <Button size="lg" style={{ background: "#3B82F6", color: "#fff" }}>
              Book a Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
