import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useSiteSettings, useMenuItems } from "@/hooks/useCMS";
import casestoreLogoWhite from "@/assets/casestore-logo-white.png";

const Footer = () => {
  const { data: settings } = useSiteSettings();
  const { data: menuItems } = useMenuItems();

  const getSetting = (key: string, fallback: string) =>
    settings?.find(s => s.key === key)?.value || fallback;

  const siteName = getSetting('site_name', 'CaseStore');
  const footerLogoUrl = getSetting('footer_logo_url', '');
  const headerLogoUrl = getSetting('logo_url', '');
  const logoUrl = footerLogoUrl || headerLogoUrl;
  const description = getSetting('footer_description', 'Empowering businesses through innovative IT solutions, AI-powered digital transformation, and enterprise-grade technology services.');
  const email = getSetting('contact_email', 'hello@casestore.us');
  const phone = getSetting('contact_phone', '');
  const location = getSetting('contact_location', 'United States');
  const copyright = getSetting('footer_copyright', 'CaseStore LLC. All rights reserved.');
  const servicesString = getSetting('footer_products', 'AI Solutions,Digital Transformation,Cloud & DevOps,Custom Software,Integration & Automation,Warehouse & Logistics Tech');
  const footerLogoHeight = getSetting('footer_logo_height', '40');

  const services = servicesString.split(',').map(s => s.trim()).filter(Boolean);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logoUrl || casestoreLogoWhite} alt={siteName} className="w-auto mb-4" style={{ height: `${footerLogoHeight}px` }} />
            <p className="text-sm text-secondary-foreground/80">
              {description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {menuItems?.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              )) || (
                <>
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                  <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                  <li><Link to="/divisions" className="hover:text-primary transition-colors">Divisions</Link></li>
                  <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service, index) => (
                <li key={index} className="text-secondary-foreground/80">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span className="text-secondary-foreground/80">
                  {phone || 'Available on Request'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-secondary-foreground/80">{location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/80">
          <p>&copy; {new Date().getFullYear()} {copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
