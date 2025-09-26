import { Button } from "@/components/ui/button";
import { Search, User, Bell, Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#jobs" className="text-foreground hover:text-primary font-medium">Jobs</a>
              <a href="#companies" className="text-foreground hover:text-primary font-medium">Companies</a>
              <a href="#services" className="text-foreground hover:text-primary font-medium">Services</a>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium">
                      Reports
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-48 p-2">
                        <NavigationMenuLink asChild>
                          <a href="#job-posted" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded">
                            Job Posted
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#search-resume" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded">
                            Search Resume
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#usage" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded">
                            Usage
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="#report" className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded">
                            Report
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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