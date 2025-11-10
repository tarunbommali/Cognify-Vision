import { Link } from "wouter";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AppFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1
              className="font-alkatra text-2xl font-bold leading-tight"
                data-testid="text-logo"
              >
                Cognify Vision.
              </h1>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>VizaG, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@cognify.io</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9581193026</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Domains</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/domains?filter=web">
                  <span
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-web-dev"
                  >
                    Web Development
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/domains?filter=ai">
                  <span
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-ai-ml"
                  >
                    AI & Machine Learning
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/domains?filter=cloud">
                  <span
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-cloud"
                  >
                    Cloud Computing
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/domains?filter=data">
                  <span
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-footer-data-science"
                  >
                    Data Science
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-faq"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-support"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-community"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest internship
              opportunities.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                type="email"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Cognify. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-cookies"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
