import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import { Download, Plus, Eye } from "lucide-react";

// Job data type
interface JobReport {
  id: string;
  manager: string;
  role: string;
  category: string;
  type: string;
  org: string;
  validation: "Approved" | "Pending" | "Closed" | "Open";
  posted: string;
  validTo: string;
  login: "manager" | "recruiter";
}

// All job data for admin filtering
const allJobData: JobReport[] = [
  { id: "#101", manager: "Rohit Sharma", role: "Frontend Developer", category: "IT", type: "Full-Time", org: "IBM", validation: "Approved", posted: "2025-09-20", validTo: "2025-10-20", login: "manager" },
  { id: "#102", manager: "Simran Kaur", role: "UI Designer", category: "Design", type: "Part-Time", org: "Google", validation: "Pending", posted: "2025-09-25", validTo: "2025-10-25", login: "manager" },
  { id: "#103", manager: "Anil Mehta", role: "Backend Developer", category: "IT", type: "Contract", org: "Infosys", validation: "Approved", posted: "2025-09-23", validTo: "2025-10-23", login: "recruiter" },
  { id: "#104", manager: "Priya Sharma", role: "QA Engineer", category: "QA", type: "Full-Time", org: "TCS", validation: "Closed", posted: "2025-09-21", validTo: "2025-10-21", login: "recruiter" },
  { id: "#105", manager: "Vikram Singh", role: "Software Engineer", category: "IT", type: "Remote", org: "Wipro", validation: "Open", posted: "2025-09-24", validTo: "2025-10-24", login: "manager" },
];

const managerJobs: JobReport[] = [
  { id: "#201", manager: "Rohit Sharma", role: "Frontend Developer", category: "IT", type: "Full-Time", org: "IBM", validation: "Approved", posted: "2025-09-20", validTo: "2025-10-20", login: "manager" },
  { id: "#202", manager: "Simran Kaur", role: "UI Designer", category: "Design", type: "Part-Time", org: "Google", validation: "Pending", posted: "2025-09-25", validTo: "2025-10-25", login: "manager" },
  { id: "#203", manager: "Anil Mehta", role: "Backend Developer", category: "IT", type: "Contract", org: "Infosys", validation: "Approved", posted: "2025-09-23", validTo: "2025-10-23", login: "manager" },
  { id: "#204", manager: "Priya Sharma", role: "QA Engineer", category: "QA", type: "Full-Time", org: "TCS", validation: "Closed", posted: "2025-09-21", validTo: "2025-10-21", login: "manager" },
];

const recruiterJobs: JobReport[] = [
  { id: "#301", manager: "Rohit Sharma", role: "Frontend Developer", category: "IT", type: "Full-Time", org: "IBM", validation: "Approved", posted: "2025-09-20", validTo: "2025-10-20", login: "recruiter" },
  { id: "#302", manager: "Simran Kaur", role: "UI Designer", category: "Design", type: "Part-Time", org: "Google", validation: "Pending", posted: "2025-09-25", validTo: "2025-10-25", login: "recruiter" },
  { id: "#303", manager: "Anil Mehta", role: "Backend Developer", category: "IT", type: "Contract", org: "Infosys", validation: "Closed", posted: "2025-09-23", validTo: "2025-10-23", login: "recruiter" },
];

// Helper function to get validation badge variant
const getValidationBadge = (validation: string) => {
  const variants = {
    Approved: "bg-green-500 hover:bg-green-600",
    Pending: "bg-yellow-500 hover:bg-yellow-600",
    Closed: "bg-red-500 hover:bg-red-600",
    Open: "bg-blue-500 hover:bg-blue-600",
  };
  return variants[validation as keyof typeof variants] || "bg-gray-500";
};

// Export to CSV function
const exportTableToCSV = (data: JobReport[], filename: string = "jobs_report.csv") => {
  const headers = ["Job ID", "Manager/Recruiter", "Job Role", "Job Category", "Job Type", "Organization", "Posted On", "Valid To", "Job Validation"];
  const rows = data.map(job => [
    job.id,
    job.manager,
    job.role,
    job.category,
    job.type,
    job.org,
    job.posted,
    job.validTo,
    job.validation
  ]);
  
  const csvContent = [
    headers.join(","),
    ...rows.map(row => row.join(","))
  ].join("\n");
  
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

const JobPosted = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [baseJobData, setBaseJobData] = useState<JobReport[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobReport[]>([]);
  
  // Filter states (for admin)
  const [roleFilter, setRoleFilter] = useState<"manager" | "recruiter">("manager");
  const [jobTitleFilter, setJobTitleFilter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      
      // Set job reports based on user role
      let jobData: JobReport[] = [];
      switch (parsedUser.role) {
        case "admin":
          jobData = allJobData;
          break;
        case "report-manager":
          jobData = managerJobs;
          break;
        case "recruiter":
          jobData = recruiterJobs;
          break;
        default:
          jobData = [];
      }
      setBaseJobData(jobData);
      setFilteredJobs(jobData);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Filter logic for admin
  useEffect(() => {
    if (user?.role === "admin") {
      let filtered = baseJobData.filter(job => job.login === roleFilter);
      
      if (jobTitleFilter) {
        filtered = filtered.filter(job => 
          job.role.toLowerCase().includes(jobTitleFilter.toLowerCase())
        );
      }
      
      if (fromDate) {
        filtered = filtered.filter(job => job.posted >= fromDate);
      }
      
      if (toDate) {
        filtered = filtered.filter(job => job.validTo <= toDate);
      }
      
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(baseJobData);
    }
  }, [user, baseJobData, roleFilter, jobTitleFilter, fromDate, toDate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleExport = () => {
    const filename = `${user?.role}_jobs.csv`;
    exportTableToCSV(filteredJobs, filename);
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
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Job Posting Reports</h2>
              <p className="text-muted-foreground">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1).replace('-', ' ')} Dashboard
              </p>
            </div>

            {/* Filter Section - Only for Admin */}
            {user.role === "admin" && (
              <div className="bg-card p-4 rounded-lg shadow-sm border mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium">Job Role:</label>
                    <Input
                      type="text"
                      placeholder="Search Job Role"
                      value={jobTitleFilter}
                      onChange={(e) => setJobTitleFilter(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium">Report As:</label>
                    <Select value={roleFilter} onValueChange={(value: "manager" | "recruiter") => setRoleFilter(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="recruiter">Recruiter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium">Posted From:</label>
                    <Input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium">Valid To:</label>
                    <Input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mb-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Job
              </Button>
              <Button variant="outline" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>

            {/* Table */}
            <div className="bg-card border rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary hover:bg-primary">
                      <TableHead className="text-primary-foreground font-semibold">Job ID</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Manager / Recruiter</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Job Role</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Job Category</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Job Type</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Organization</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Posted On</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Valid To</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Job Validation</TableHead>
                      <TableHead className="text-primary-foreground font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredJobs.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={10} className="text-center text-muted-foreground py-8">
                          No jobs found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredJobs.map((job) => (
                        <TableRow key={job.id} className="hover:bg-accent/50 transition-colors">
                          <TableCell className="font-medium">{job.id}</TableCell>
                          <TableCell>{job.manager}</TableCell>
                          <TableCell className="font-medium">{job.role}</TableCell>
                          <TableCell className="text-muted-foreground">{job.category}</TableCell>
                          <TableCell className="text-muted-foreground">{job.type}</TableCell>
                          <TableCell className="text-muted-foreground">{job.org}</TableCell>
                          <TableCell className="text-muted-foreground">{job.posted}</TableCell>
                          <TableCell className="text-muted-foreground">{job.validTo}</TableCell>
                          <TableCell>
                            <Badge className={`${getValidationBadge(job.validation)} text-white`}>
                              {job.validation}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="h-8 w-8 p-0 hover:bg-primary/10"
                            >
                              <Eye className="h-4 w-4 text-primary" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default JobPosted;