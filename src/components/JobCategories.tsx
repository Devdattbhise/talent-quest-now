import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, BarChart3, Users, Shield, Stethoscope, GraduationCap, Truck } from "lucide-react";

const categories = [
  {
    name: "Technology",
    icon: Code,
    jobCount: "12,500+",
    color: "text-blue-600"
  },
  {
    name: "Design",
    icon: Palette,
    jobCount: "3,200+",
    color: "text-pink-600"
  },
  {
    name: "Marketing",
    icon: BarChart3,
    jobCount: "5,800+",
    color: "text-green-600"
  },
  {
    name: "Sales",
    icon: Users,
    jobCount: "8,400+",
    color: "text-orange-600"
  },
  {
    name: "Finance",
    icon: Shield,
    jobCount: "4,200+",
    color: "text-purple-600"
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    jobCount: "6,100+",
    color: "text-red-600"
  },
  {
    name: "Education",
    icon: GraduationCap,
    jobCount: "3,900+",
    color: "text-indigo-600"
  },
  {
    name: "Operations",
    icon: Truck,
    jobCount: "7,300+",
    color: "text-gray-600"
  }
];

const JobCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Browse Jobs by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities across different industries and find the perfect role for your skills
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 cursor-pointer group border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <category.icon className={`h-12 w-12 mx-auto ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.jobCount} jobs
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;