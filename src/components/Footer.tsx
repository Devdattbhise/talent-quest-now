import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              JobPortal
            </div>
            <p className="text-muted-foreground">
              Your trusted partner in finding the perfect job opportunity. Connect with top employers and advance your career.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Job Seekers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Salary Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Interview Tips</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">For Employers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Search Resumes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Recruitment Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Company Branding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest job alerts and career tips delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" />
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 JobPortal. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;