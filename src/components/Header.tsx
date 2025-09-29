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
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleJobPostedClick = () => {
    if (user) {
      navigate("/job-posted");
    } else {
      navigate("/login");
    }
  };
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
                          <button
                            onClick={handleJobPostedClick}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded w-full text-left"
                          >
                            Job Posted
                          </button>
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
            
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace('-', ' ')}
                </span>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
            
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