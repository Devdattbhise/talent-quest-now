import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, MapPin, Clock, Bookmark, DollarSign } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedTime: string;
  skills: string[];
  description: string;
  logo?: string;
}

const JobCard = ({ 
  title, 
  company, 
  location, 
  type, 
  salary, 
  postedTime, 
  skills, 
  description 
}: JobCardProps) => {
  return (
    <Card className="hover:shadow-card transition-all duration-300 border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground hover:text-primary cursor-pointer">
                {title}
              </h3>
              <p className="text-muted-foreground font-medium">{company}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {postedTime}
                </div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">{type}</Badge>
            <div className="flex items-center text-sm font-medium text-primary">
              <DollarSign className="h-4 w-4 mr-1" />
              {salary}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex space-x-3">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline">View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;