import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Plus, Eye, Edit, Trash2 } from "lucide-react";

// Different data based on user role
const adminJobReports = [
  {
    jobId: "0222409253",
    title: "Air cabin crew",
    company: "Noble, Evans and Ro...",
    location: "San Francisco...",
    type: "Intern...",
    postedOn: "22/9/2025",
    lastDate: "24/11/2025"
  },
  {
    jobId: "0042409255",
    title: "Print production planner",
    company: "Hancock-Booker",
    location: "Chicago, IL",
    type: "Intern...",
    postedOn: "21/9/2025",
    lastDate: "6/12/2025"
  },
  {
    jobId: "0252409255",
    title: "Media planner",
    company: "Johnson-Stewart",
    location: "San Francisco...",
    type: "Contr...",
    postedOn: "21/9/2025",
    lastDate: "26/11/2025"
  },
  {
    jobId: "0052409251",
    title: "Water engineer",
    company: "Knox, Ware and Ruiz",
    location: "San Francisco...",
    type: "Contr...",
    postedOn: "20/9/2025",
    lastDate: "6/11/2025"
  },
  {
    jobId: "0072409251",
    title: "Armed forces training an...",
    company: "Leonard and Sons",
    location: "San Francisco...",
    type: "Full-ti...",
    postedOn: "20/9/2025",
    lastDate: "29/11/2025"
  },
  {
    jobId: "0172409253",
    title: "Games developer",
    company: "Jordan-Young",
    location: "Austin, TX",
    type: "Full-ti...",
    postedOn: "19/9/2025",
    lastDate: "13/11/2025"
  },
  {
    jobId: "0242409252",
    title: "Musician",
    company: "Soto, Green and Bailey",
    location: "San Francisco...",
    type: "Full-ti...",
    postedOn: "19/9/2025",
    lastDate: "25/11/2025"
  }
];

const reportManagerJobReports = [
  {
    jobId: "RM001",
    title: "Data Analyst",
    company: "TechCorp Solutions",
    location: "Mumbai",
    type: "Full-time",
    postedOn: "25/9/2025",
    lastDate: "30/11/2025"
  },
  {
    jobId: "RM002", 
    title: "Business Intelligence Specialist",
    company: "Analytics Pro",
    location: "Pune",
    type: "Contract",
    postedOn: "23/9/2025",
    lastDate: "15/12/2025"
  },
  {
    jobId: "RM003",
    title: "Report Developer",
    company: "DataViz Inc",
    location: "Bangalore",
    type: "Part-time",
    postedOn: "22/9/2025",
    lastDate: "10/11/2025"
  }
];

const recruiterJobReports = [
  {
    jobId: "RC001",
    title: "React Developer",
    company: "StartupHub",
    location: "Delhi",
    type: "Full-time",
    postedOn: "28/9/2025",
    lastDate: "5/12/2025"
  },
  {
    jobId: "RC002",
    title: "UI/UX Designer", 
    company: "DesignCraft",
    location: "Chennai",
    type: "Freelance",
    postedOn: "27/9/2025",
    lastDate: "20/11/2025"
  }
];

const JobPosted = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [currentJobReports, setCurrentJobReports] = useState<any[]>([]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Set job reports based on user role
      switch (parsedUser.role) {
        case "admin":
          setCurrentJobReports(adminJobReports);
          break;
        case "report-manager":
          setCurrentJobReports(reportManagerJobReports);
          break;
        case "recruiter":
          setCurrentJobReports(recruiterJobReports);
          break;
        default:
          setCurrentJobReports([]);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1">
          {/* Header */}
          <header className="h-16 bg-primary text-primary-foreground flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="text-primary-foreground hover:bg-primary-foreground/10" />
              <h1 className="text-xl font-bold">JobPortal</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace('-', ' ')}</span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/80"
              >
                Logout
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Jobs Management</h2>
                <h3 className="text-lg text-muted-foreground">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace('-', ' ')} View
                </h3>
              </div>
              
              <div className="flex space-x-3">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Job
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Download className="h-4 w-4 mr-2" />
                  Export to Excel
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-background border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary">
                    <TableHead className="text-primary-foreground font-semibold">JOB ID</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">TITLE</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">COMPANY</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">LOCATION</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">TYPE</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">POSTED ON</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">LAST DATE</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentJobReports.map((job) => (
                    <TableRow key={job.jobId} className="hover:bg-accent/50">
                      <TableCell className="font-medium text-muted-foreground">
                        {job.jobId}
                      </TableCell>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell className="text-muted-foreground">{job.company}</TableCell>
                      <TableCell className="text-muted-foreground">{job.location}</TableCell>
                      <TableCell className="text-muted-foreground">{job.type}</TableCell>
                      <TableCell className="text-muted-foreground">{job.postedOn}</TableCell>
                      <TableCell className="text-muted-foreground">{job.lastDate}</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-blue-50">
                            <Eye className="h-4 w-4 text-blue-600" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-yellow-50">
                            <Edit className="h-4 w-4 text-yellow-600" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-red-50">
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default JobPosted;