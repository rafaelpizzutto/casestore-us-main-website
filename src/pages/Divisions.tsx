import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Package, ArrowRight, CheckCircle, Monitor, Cpu, BarChart3, Bot } from "lucide-react";

const Divisions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Divisions"
        description="Explore CaseStore's two specialized divisions: Packaging Division for premium supplies and IT Consulting Division for AI solutions, digital transformation, and custom software."
      />
      <Navigation />

      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #1a2d4f 100%)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Divisions</h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Two specialized divisions working together to deliver complete business solutions — from physical operations to digital transformation.
          </p>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-5xl mx-auto">

            {/* IT Consulting Division */}
            <Card className="border border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mb-6">
                      <Monitor className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">IT Consulting Division</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      We help businesses leverage technology to streamline operations, automate processes,
                      and scale with confidence. From AI agents to full digital transformation,
                      we deliver solutions that drive real results.
                    </p>
                    <a href="/services">
                      <Button style={{ background: "#3B82F6", color: "#fff" }}>
                        Explore Our Services
                        <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                  <div className="p-10 bg-muted/30 flex flex-col justify-center">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
                      What We Deliver
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Custom AI Agents & Chatbots",
                        "Digital Transformation Consulting",
                        "Cloud & DevOps Infrastructure",
                        "Custom Software Development",
                        "System Integration & Automation",
                        "Data Analytics & Business Intelligence",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle size={15} className="text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Warehouse Tracker AI - Product highlight */}
                <div className="border-t border-border bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shrink-0">
                      <Brain className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">
                        Featured Product: Warehouse Tracker AI
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        Our flagship AI-powered warehouse management platform. Real-time inventory tracking,
                        AI demand forecasting, order management, QuickBooks integration, and a customer portal —
                        everything you need to run your warehouse smarter.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          { icon: Cpu, label: "AI-Powered" },
                          { icon: BarChart3, label: "Real-Time Analytics" },
                          { icon: Bot, label: "Smart Automation" },
                        ].map(({ icon: Icon, label }) => (
                          <span key={label} className="inline-flex items-center gap-1.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                            <Icon size={12} />
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href="https://warehouse.casestore.us" target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                        Visit Warehouse Tracker
                        <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Packaging Division */}
            <Card className="border border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mb-6">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">Packaging Division</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Premium packaging supplies for warehouses, distribution centers, and businesses of all sizes.
                      Competitive pricing, fast shipping, and the quality materials your operations depend on.
                    </p>
                    <a href="https://packaging.casestore.us" target="_blank" rel="noopener noreferrer">
                      <Button style={{ background: "#3B82F6", color: "#fff" }}>
                        Visit Packaging Division
                        <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                  <div className="p-10 bg-muted/30 flex flex-col justify-center">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
                      What We Offer
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Stretch Film & Pallet Wrap",
                        "Corrugated Boxes & Shipping Materials",
                        "Packing Tape & Dispensers",
                        "Bubble Wrap & Protective Packaging",
                        "Janitorial & Facility Supplies",
                        "Volume & Contract Pricing",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <CheckCircle size={15} className="text-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Division You Need?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get in touch and we'll help you find the right solution for your business — whether it's technology, packaging, or both.
          </p>
          <a href="/contact">
            <Button size="lg" style={{ background: "#3B82F6", color: "#fff" }}>
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Divisions;
