import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl lg:text-2xl mb-12 text-white/90">
            Discover thousands of job opportunities from top companies
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-hero p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Job title, keywords, or company"
                  className="pl-10 h-12 text-foreground"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                <Select>
                  <SelectTrigger className="pl-10 h-12 text-foreground">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button size="lg" className="h-12 bg-primary hover:bg-primary/90">
                <Search className="mr-2 h-5 w-5" />
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-white/80">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15K+</div>
              <div className="text-white/80">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-white/80">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">25K+</div>
              <div className="text-white/80">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;