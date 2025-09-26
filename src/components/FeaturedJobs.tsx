import JobCard from "./JobCard";
import { Button } from "@/components/ui/button";

const featuredJobs = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹15-25 LPA",
    postedTime: "2 days ago",
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    description: "We are looking for a senior full stack developer to join our growing team. You will be responsible for developing scalable web applications using modern technologies."
  },
  {
    title: "Product Manager",
    company: "InnovateLabs",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹20-30 LPA",
    postedTime: "1 day ago",
    skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
    description: "Lead product development initiatives and work closely with engineering and design teams to deliver exceptional user experiences."
  },
  {
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "Delhi",
    type: "Full-time",
    salary: "₹8-15 LPA",
    postedTime: "3 days ago",
    skills: ["Figma", "Sketch", "Prototyping", "User Research", "Design Systems"],
    description: "Create beautiful and intuitive user interfaces for web and mobile applications. Collaborate with product teams to enhance user experience."
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹12-20 LPA",
    postedTime: "1 week ago",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Build and maintain scalable infrastructure solutions. Implement CI/CD pipelines and ensure high availability of production systems."
  },
  {
    title: "Data Scientist",
    company: "DataDriven Inc",
    location: "Pune",
    type: "Full-time",
    salary: "₹18-28 LPA",
    postedTime: "4 days ago",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
    description: "Analyze complex datasets to derive actionable insights. Build predictive models and work with stakeholders to implement data-driven solutions."
  },
  {
    title: "Marketing Manager",
    company: "GrowthCorp",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹10-18 LPA",
    postedTime: "5 days ago",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics", "Social Media"],
    description: "Drive marketing initiatives to increase brand awareness and customer acquisition. Develop and execute comprehensive marketing strategies."
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Jobs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked opportunities from top companies across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredJobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;