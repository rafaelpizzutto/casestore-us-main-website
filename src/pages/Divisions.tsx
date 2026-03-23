import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Package, ArrowRight, CheckCircle } from "lucide-react";

const Divisions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Divisions"
        description="Explore CaseStore's specialized divisions: the Packaging Division for premium supplies and Warehouse Tracker AI for intelligent warehouse management."
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
            Specialized platforms engineered to solve real industry challenges with precision and scale.
          </p>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">

            {/* Packaging Division */}
            <Card className="border border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mb-6">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">CaseStore Packaging Division</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      Your trusted partner for premium packaging supplies and logistics solutions.
                      We serve warehouses, distribution centers, and businesses with quality
                      materials and competitive pricing.
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

            {/* Warehouse Tracker AI */}
            <Card className="border border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mb-6">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">Warehouse Tracker AI</h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      An AI-powered warehouse management platform that gives your team
                      real-time visibility, intelligent analytics, and automated workflows
                      to run operations at peak efficiency.
                    </p>
                    <a href="https://warehouse.casestore.us" target="_blank" rel="noopener noreferrer">
                      <Button style={{ background: "#3B82F6", color: "#fff" }}>
                        Visit Warehouse Tracker AI
                        <ArrowRight size={14} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                  <div className="p-10 bg-muted/30 flex flex-col justify-center">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Real-Time Order Placement Portal",
                        "Live Order Tracking Dashboard",
                        "AI-Powered Inventory Insights",
                        "Automated Reorder Triggers",
                        "Multi-User Team Access",
                        "Reporting & Analytics Engine",
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

      <Footer />
    </div>
  );
};

export default Divisions;
