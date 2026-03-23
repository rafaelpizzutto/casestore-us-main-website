-- CaseStore Main Website Tables (prefix: csmain_)

CREATE TYPE public.csmain_app_role AS ENUM ('admin', 'user');

-- Site settings
CREATE TABLE public.csmain_site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  type TEXT DEFAULT 'text',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Menu items
CREATE TABLE public.csmain_menu_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  path TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Page content
CREATE TABLE public.csmain_page_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  content_type TEXT NOT NULL,
  content TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- User roles
CREATE TABLE public.csmain_user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role csmain_app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Contact submissions
CREATE TABLE public.csmain_contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Blog posts
CREATE TABLE public.csmain_blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  image_url TEXT,
  author TEXT DEFAULT 'CaseStore Team',
  is_published BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  meta_title TEXT,
  meta_description TEXT,
  reading_time INTEGER DEFAULT 5,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Blog categories
CREATE TABLE public.csmain_blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- FAQ
CREATE TABLE public.csmain_faq (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Services
CREATE TABLE public.csmain_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  features TEXT[] DEFAULT '{}',
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Functions
CREATE OR REPLACE FUNCTION public.csmain_has_role(_user_id UUID, _role csmain_app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.csmain_user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE OR REPLACE FUNCTION public.csmain_update_updated_at()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

-- Triggers
CREATE TRIGGER csmain_upd_site_settings BEFORE UPDATE ON public.csmain_site_settings FOR EACH ROW EXECUTE FUNCTION public.csmain_update_updated_at();
CREATE TRIGGER csmain_upd_menu_items BEFORE UPDATE ON public.csmain_menu_items FOR EACH ROW EXECUTE FUNCTION public.csmain_update_updated_at();
CREATE TRIGGER csmain_upd_page_content BEFORE UPDATE ON public.csmain_page_content FOR EACH ROW EXECUTE FUNCTION public.csmain_update_updated_at();
CREATE TRIGGER csmain_upd_contact BEFORE UPDATE ON public.csmain_contact_submissions FOR EACH ROW EXECUTE FUNCTION public.csmain_update_updated_at();
CREATE TRIGGER csmain_upd_blog BEFORE UPDATE ON public.csmain_blog_posts FOR EACH ROW EXECUTE FUNCTION public.csmain_update_updated_at();

-- RLS
ALTER TABLE public.csmain_site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_faq ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.csmain_services ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "csmain_public_settings" ON public.csmain_site_settings FOR SELECT USING (key NOT LIKE 'admin_%');
CREATE POLICY "csmain_public_menu" ON public.csmain_menu_items FOR SELECT USING (true);
CREATE POLICY "csmain_public_content" ON public.csmain_page_content FOR SELECT USING (true);
CREATE POLICY "csmain_public_posts" ON public.csmain_blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "csmain_public_categories" ON public.csmain_blog_categories FOR SELECT USING (true);
CREATE POLICY "csmain_public_faq" ON public.csmain_faq FOR SELECT USING (is_visible = true);
CREATE POLICY "csmain_public_services" ON public.csmain_services FOR SELECT USING (is_visible = true);
CREATE POLICY "csmain_public_submit_contact" ON public.csmain_contact_submissions FOR INSERT WITH CHECK (true);

-- Admin policies
CREATE POLICY "csmain_admin_settings" ON public.csmain_site_settings FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_admin_menu" ON public.csmain_menu_items FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_admin_content" ON public.csmain_page_content FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_admin_contact" ON public.csmain_contact_submissions FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_admin_posts" ON public.csmain_blog_posts FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_admin_categories" ON public.csmain_blog_categories FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_admin_faq" ON public.csmain_faq FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_admin_services" ON public.csmain_services FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));
CREATE POLICY "csmain_view_own_roles" ON public.csmain_user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "csmain_admin_roles" ON public.csmain_user_roles FOR ALL TO authenticated USING (csmain_has_role(auth.uid(), 'admin')) WITH CHECK (csmain_has_role(auth.uid(), 'admin'));

-- Seed data
INSERT INTO public.csmain_menu_items (name, path, sort_order) VALUES
  ('Home', '/', 1), ('About', '/about', 2), ('Services', '/services', 3),
  ('Divisions', '/divisions', 4), ('Blog', '/blog', 5), ('Contact', '/contact', 6), ('FAQ', '/faq', 7);

INSERT INTO public.csmain_blog_categories (name, slug, description, sort_order) VALUES
  ('AI & Machine Learning', 'ai-machine-learning', 'Artificial intelligence, agents, and ML solutions', 1),
  ('Digital Transformation', 'digital-transformation', 'Digital solutions for modern businesses', 2),
  ('Cloud & Infrastructure', 'cloud-infrastructure', 'Cloud computing, DevOps, and IT infrastructure', 3),
  ('Automation & Integration', 'automation-integration', 'Process automation, API integrations, and workflows', 4),
  ('Industry Insights', 'industry-insights', 'Tech industry news, trends, and analysis', 5),
  ('Product Updates', 'product-updates', 'CaseStore platform updates and features', 6);

INSERT INTO public.csmain_services (name, slug, description, icon, features, sort_order) VALUES
  ('AI Solutions & Agents', 'ai-solutions', 'Custom AI agents, chatbots, and intelligent automation for your business processes.', 'Brain', ARRAY['Custom AI Agents', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision', 'AI-Powered Automation'], 1),
  ('Digital Transformation', 'digital-transformation', 'End-to-end digital transformation consulting and implementation for modern enterprises.', 'Zap', ARRAY['Process Digitization', 'Legacy System Migration', 'Digital Strategy', 'Change Management', 'ROI Analysis'], 2),
  ('Cloud & DevOps', 'cloud-devops', 'Cloud infrastructure, CI/CD pipelines, and scalable architecture for high-performance applications.', 'Cloud', ARRAY['Cloud Migration', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Observability'], 3),
  ('Custom Software Development', 'custom-software', 'Full-stack web and mobile application development tailored to your business needs.', 'Code', ARRAY['Web Applications', 'Mobile Apps', 'API Development', 'Database Design', 'UI/UX Design'], 4),
  ('Integration & Automation', 'integration-automation', 'Connect your systems, automate workflows, and eliminate manual data entry across platforms.', 'Link', ARRAY['API Integrations', 'Workflow Automation', 'Data Synchronization', 'ERP Integration', 'CRM Automation'], 5),
  ('Warehouse & Logistics Tech', 'warehouse-logistics', 'AI-powered warehouse management, inventory tracking, and logistics optimization solutions.', 'Package', ARRAY['Warehouse Tracker AI', 'Inventory Management', 'Order Fulfillment', 'Supply Chain Analytics', 'IoT Integration'], 6);

INSERT INTO public.csmain_site_settings (key, value, type) VALUES
  ('site_name', 'CaseStore', 'text'),
  ('logo_url', '', 'image'),
  ('contact_email', 'info@casestore.us', 'text'),
  ('contact_phone', '', 'text'),
  ('footer_logo_url', '', 'image'),
  ('header_logo_height', '40', 'number'),
  ('footer_logo_height', '40', 'number');

-- Admin roles for existing users
INSERT INTO public.csmain_user_roles (user_id, role) VALUES
  ('6e78d206-0fb8-417c-9a32-1a4a9375a28d', 'admin'),
  ('ee4e3577-af6c-4c0f-8b67-21e2b2bdd0db', 'admin');
