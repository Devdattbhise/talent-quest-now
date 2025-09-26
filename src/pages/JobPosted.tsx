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

const jobReports = [
  {
    id: "#101",
    recruiter: "Ramesh",
    branch: "Mumbai",
    jobTitle: "Software Engineer",
    status: "Approved",
    date: "24 Sep 2025",
  },
  {
    id: "#102",
    recruiter: "Neha",
    branch: "Delhi",
    jobTitle: "UI Designer",
    status: "Pending",
    date: "25 Sep 2025",
  },
  {
    id: "#103",
    recruiter: "Amit",
    branch: "Bangalore",
    jobTitle: "Backend Developer",
    status: "Approved",
    date: "23 Sep 2025",
  },
  {
    id: "#104",
    recruiter: "Sita",
    branch: "Chennai",
    jobTitle: "QA Engineer",
    status: "Closed",
    date: "21 Sep 2025",
  },
  {
    id: "#105",
    recruiter: "Ramesh",
    branch: "Mumbai",
    jobTitle: "Frontend Developer",
    status: "Open",
    date: "20 Sep 2025",
  },
];

const JobPosted = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "text-green-600";
      case "Pending":
        return "text-yellow-600";
      case "Closed":
        return "text-red-600";
      case "Open":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

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
              <span>Login as:</span>
              <Select defaultValue="admin">
                <SelectTrigger className="w-32 bg-primary-foreground text-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="recruiter">Recruiter</SelectItem>
                </SelectContent>
              </Select>
              
              <span>Branch:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-40 bg-primary-foreground text-primary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="chennai">Chennai</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Job Posting Reports</h2>
              <h3 className="text-lg text-muted-foreground">Admin View</h3>
            </div>

            {/* Table */}
            <div className="bg-background border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary">
                    <TableHead className="text-primary-foreground font-semibold">Report ID</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Recruiter</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Branch</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Job Title</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Status</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Date</TableHead>
                    <TableHead className="text-primary-foreground font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobReports.map((report) => (
                    <TableRow key={report.id} className="hover:bg-accent/50">
                      <TableCell className="font-medium">{report.id}</TableCell>
                      <TableCell>{report.recruiter}</TableCell>
                      <TableCell>{report.branch}</TableCell>
                      <TableCell>{report.jobTitle}</TableCell>
                      <TableCell className={getStatusColor(report.status)}>
                        {report.status}
                      </TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          View
                        </Button>
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