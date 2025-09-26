import { Button } from "@/components/ui/button";
import { Search, User, Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-primary">
              JobPortal
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#jobs" className="text-foreground hover:text-primary font-medium">Jobs</a>
              <a href="#companies" className="text-foreground hover:text-primary font-medium">Companies</a>
              <a href="#services" className="text-foreground hover:text-primary font-medium">Services</a>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="outline">Login</Button>
            <Button>Register</Button>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;