"use client";

import {
  Activity,
  ArrowRight,
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Bell,
  BookOpen,
  ChevronDown,
  CircleDollarSign,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  Menu,
  Archive,
  BadgeCheck,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Copy,
  CreditCard,
  Download,
  Eye,
  FileSpreadsheet,
  FileUp,
  Filter,
  Globe2,
  HardDrive,
  Mail,
  MoreHorizontal,
  Pencil,
  Pin,
  Plus,
  ReceiptText,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  Settings,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  UserX,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const nav = [
  ["Overview", LayoutDashboard],
  ["Members", Users],
  ["Courses", BookOpen],
  ["Documents", FileText],
  ["Subscriptions", WalletCards],
  ["Payments", CircleDollarSign],
  ["Certificates", Award],
  ["Announcements", Megaphone],
  ["Reports", Activity],
] as const;

const members = [
  {
    name: "Amina Mensah",
    email: "amina@example.com",
    country: "Ghana",
    plan: "Yearly",
    status: "Active",
    joined: "Jul 18, 2026",
    initials: "AM",
  },
  {
    name: "Sophea Lim",
    email: "sophea@example.com",
    country: "Cambodia",
    plan: "Monthly",
    status: "Active",
    joined: "Jul 18, 2026",
    initials: "SL",
  },
  {
    name: "Lucas Martin",
    email: "lucas@example.com",
    country: "France",
    plan: "Free",
    status: "Active",
    joined: "Jul 17, 2026",
    initials: "LM",
  },
  {
    name: "Nadia Rahman",
    email: "nadia@example.com",
    country: "Malaysia",
    plan: "Yearly",
    status: "Pending",
    joined: "Jul 17, 2026",
    initials: "NR",
  },
  {
    name: "James Okafor",
    email: "james@example.com",
    country: "Nigeria",
    plan: "Monthly",
    status: "Active",
    joined: "Jul 16, 2026",
    initials: "JO",
  },
];

const certificates = [
  ["Amina Mensah", "Project Management Foundations", "Under review", "2h ago"],
  ["Sophea Lim", "Workplace Health & Safety", "Eligible", "5h ago"],
  ["Diego Alvarez", "Data Analysis with Excel", "Requested", "Yesterday"],
] as const;

const adminCourses = [
  {
    title: "Project Management Foundations",
    category: "Leadership",
    instructor: "Dr. Maya Chen",
    lessons: 32,
    students: 2840,
    access: "Premium",
    status: "Published",
    updated: "Jul 18, 2026",
    code: "PM",
    color: "bg-rose-100 text-rose-700",
  },
  {
    title: "Data Analysis with Excel",
    category: "Data & Analytics",
    instructor: "Omar Diallo",
    lessons: 24,
    students: 1936,
    access: "Premium",
    status: "Published",
    updated: "Jul 17, 2026",
    code: "DA",
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Workplace Health & Safety",
    category: "Compliance",
    instructor: "Sarah Okafor",
    lessons: 18,
    students: 3260,
    access: "Free",
    status: "Published",
    updated: "Jul 15, 2026",
    code: "HS",
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Effective Team Leadership",
    category: "Leadership",
    instructor: "Daniel Kim",
    lessons: 28,
    students: 1458,
    access: "Premium",
    status: "Draft",
    updated: "Jul 14, 2026",
    code: "TL",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Customer Service Essentials",
    category: "Business",
    instructor: "Nadia Rahman",
    lessons: 16,
    students: 892,
    access: "Free",
    status: "Review",
    updated: "Jul 12, 2026",
    code: "CS",
    color: "bg-sky-100 text-sky-700",
  },
] as const;

const adminDocuments = [
  {
    title: "Project charter template",
    course: "Project Management Foundations",
    category: "Templates",
    type: "PDF",
    size: "1.2 MB",
    access: "Free",
    downloads: 1842,
    status: "Published",
    updated: "Jul 18, 2026",
  },
  {
    title: "Risk assessment worksheet",
    course: "Project Management Foundations",
    category: "Worksheets",
    type: "XLSX",
    size: "86 KB",
    access: "Premium",
    downloads: 1276,
    status: "Published",
    updated: "Jul 18, 2026",
  },
  {
    title: "Excel formulas quick reference",
    course: "Data Analysis with Excel",
    category: "Guides",
    type: "PDF",
    size: "2.4 MB",
    access: "Premium",
    downloads: 2319,
    status: "Published",
    updated: "Jul 17, 2026",
  },
  {
    title: "Leadership conversation planner",
    course: "Effective Team Leadership",
    category: "Templates",
    type: "DOCX",
    size: "140 KB",
    access: "Premium",
    downloads: 906,
    status: "Draft",
    updated: "Jul 15, 2026",
  },
  {
    title: "Workplace safety checklist",
    course: "Workplace Health & Safety",
    category: "Checklists",
    type: "PDF",
    size: "940 KB",
    access: "Free",
    downloads: 3054,
    status: "Published",
    updated: "Jul 14, 2026",
  },
] as const;

const adminSubscriptions = [
  {
    member: "Amina Mensah",
    email: "amina@example.com",
    plan: "Yearly",
    amount: "$149/year",
    status: "Active",
    renews: "Feb 18, 2027",
    billing: "Auto-renew on",
    started: "Feb 18, 2026",
    initials: "AM",
  },
  {
    member: "Sophea Lim",
    email: "sophea@example.com",
    plan: "Monthly",
    amount: "$19/month",
    status: "Active",
    renews: "Aug 18, 2026",
    billing: "Auto-renew on",
    started: "May 18, 2026",
    initials: "SL",
  },
  {
    member: "Nadia Rahman",
    email: "nadia@example.com",
    plan: "Yearly",
    amount: "$149/year",
    status: "Past due",
    renews: "Grace ends Jul 22",
    billing: "Access limited",
    started: "Jul 15, 2025",
    initials: "NR",
  },
  {
    member: "James Okafor",
    email: "james@example.com",
    plan: "Monthly",
    amount: "$19/month",
    status: "Cancelled",
    renews: "Ends Jul 31, 2026",
    billing: "Auto-renew off",
    started: "Mar 31, 2026",
    initials: "JO",
  },
  {
    member: "Lucas Martin",
    email: "lucas@example.com",
    plan: "Monthly",
    amount: "$19/month",
    status: "Active",
    renews: "Aug 17, 2026",
    billing: "Auto-renew on",
    started: "Apr 17, 2026",
    initials: "LM",
  },
] as const;

const adminPayments = [
  {
    id: "PAY-84721",
    member: "Amina Mensah",
    email: "amina@example.com",
    amount: "$149.00",
    currency: "USD",
    method: "Visa •••• 4821",
    status: "Paid",
    date: "Jul 19, 2026 · 09:42",
    plan: "Yearly",
  },
  {
    id: "PAY-84720",
    member: "Sophea Lim",
    email: "sophea@example.com",
    amount: "$19.00",
    currency: "USD",
    method: "Mastercard •••• 1834",
    status: "Paid",
    date: "Jul 19, 2026 · 08:16",
    plan: "Monthly",
  },
  {
    id: "PAY-84719",
    member: "Nadia Rahman",
    email: "nadia@example.com",
    amount: "$149.00",
    currency: "USD",
    method: "Visa •••• 9016",
    status: "Failed",
    date: "Jul 18, 2026 · 22:05",
    plan: "Yearly",
  },
  {
    id: "PAY-84718",
    member: "James Okafor",
    email: "james@example.com",
    amount: "$19.00",
    currency: "USD",
    method: "PayPal",
    status: "Refunded",
    date: "Jul 18, 2026 · 17:38",
    plan: "Monthly",
  },
  {
    id: "PAY-84717",
    member: "Lucas Martin",
    email: "lucas@example.com",
    amount: "$19.00",
    currency: "USD",
    method: "Visa •••• 2270",
    status: "Pending",
    date: "Jul 18, 2026 · 13:20",
    plan: "Monthly",
  },
] as const;

const adminCertificateRequests = [
  {
    id: "CERT-2084",
    member: "Amina Mensah",
    course: "Data Analysis with Excel",
    progress: "100%",
    score: "92%",
    status: "Under review",
    requested: "Jul 19, 2026",
    country: "Ghana",
  },
  {
    id: "CERT-2083",
    member: "Sophea Lim",
    course: "Workplace Health & Safety",
    progress: "100%",
    score: "88%",
    status: "Eligible",
    requested: "Jul 19, 2026",
    country: "Cambodia",
  },
  {
    id: "CERT-2082",
    member: "Diego Alvarez",
    course: "Data Analysis with Excel",
    progress: "100%",
    score: "81%",
    status: "Requested",
    requested: "Jul 18, 2026",
    country: "Mexico",
  },
  {
    id: "CERT-2081",
    member: "Nadia Rahman",
    course: "Project Management Foundations",
    progress: "94%",
    score: "—",
    status: "Needs action",
    requested: "Jul 18, 2026",
    country: "Malaysia",
  },
  {
    id: "CERT-2080",
    member: "James Okafor",
    course: "Effective Team Leadership",
    progress: "100%",
    score: "95%",
    status: "Approved",
    requested: "Jul 17, 2026",
    country: "Nigeria",
  },
] as const;

const adminAnnouncements = [
  {
    title: "New Data Analysis course is now available",
    excerpt:
      "Premium members can now access all eight modules, templates, and the final assessment.",
    audience: "Paid members",
    status: "Published",
    channel: "In-app + Email",
    date: "Jul 19, 2026 · 09:00",
    views: "3,842",
    author: "Sophia Admin",
    pinned: true,
  },
  {
    title: "Scheduled maintenance on July 24",
    excerpt:
      "The learning portal will be read-only for approximately 30 minutes during infrastructure maintenance.",
    audience: "All members",
    status: "Scheduled",
    channel: "In-app",
    date: "Jul 24, 2026 · 02:00",
    views: "—",
    author: "Sophia Admin",
    pinned: false,
  },
  {
    title: "Certificate review turnaround update",
    excerpt:
      "Most certificate requests are now reviewed within two business days.",
    audience: "Paid members",
    status: "Published",
    channel: "In-app + Email",
    date: "Jul 16, 2026 · 11:30",
    views: "2,176",
    author: "Sophia Admin",
    pinned: false,
  },
  {
    title: "Welcome guide for new learners",
    excerpt:
      "A short onboarding message covering courses, downloads, progress, and membership options.",
    audience: "New members",
    status: "Draft",
    channel: "In-app",
    date: "Updated Jul 15, 2026",
    views: "—",
    author: "Content team",
    pinned: false,
  },
] as const;

export function AdminDashboard({
  onExit,
  notify,
}: {
  onExit: () => void;
  notify: (message: string) => void;
}) {
  const [active, setActive] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminNotificationsRead, setAdminNotificationsRead] = useState(false);
  const [memberQuery, setMemberQuery] = useState("");
  const [planFilter, setPlanFilter] = useState("All plans");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [memberSort, setMemberSort] = useState("Newest");
  const [memberPage, setMemberPage] = useState(1);
  const memberPageSize = 3;
  const filteredMembers = members
    .filter(
      (member) =>
        (planFilter === "All plans" || member.plan === planFilter) &&
        (statusFilter === "All statuses" || member.status === statusFilter) &&
        `${member.name} ${member.email} ${member.country}`
          .toLowerCase()
          .includes(memberQuery.toLowerCase()),
    )
    .sort((a, b) =>
      memberSort === "Name A–Z"
        ? a.name.localeCompare(b.name)
        : memberSort === "Country A–Z"
          ? a.country.localeCompare(b.country)
          : members.indexOf(a) - members.indexOf(b),
    );
  const memberPageCount = Math.max(
    1,
    Math.ceil(filteredMembers.length / memberPageSize),
  );
  const safeMemberPage = Math.min(memberPage, memberPageCount);
  const visibleMembers = filteredMembers.slice(
    (safeMemberPage - 1) * memberPageSize,
    safeMemberPage * memberPageSize,
  );
  const allVisibleSelected =
    visibleMembers.length > 0 &&
    visibleMembers.every((member) => selectedMembers.includes(member.email));
  const toggleAllMembers = () =>
    setSelectedMembers(
      allVisibleSelected
        ? selectedMembers.filter(
            (email) => !visibleMembers.some((member) => member.email === email),
          )
        : [
            ...new Set([
              ...selectedMembers,
              ...visibleMembers.map((member) => member.email),
            ]),
          ],
    );
  const runMemberBulkAction = (action: string) => {
    notify(
      `${action} applied to ${selectedMembers.length} member${selectedMembers.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelectedMembers([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[245px_1fr]">
        {sidebarOpen && (
          <button
            className="fixed inset-0 z-30 bg-slate-950/35 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close admin navigation"
          />
        )}
        <aside
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 flex w-[245px] flex-col border-r bg-white transition-transform lg:static lg:translate-x-0`}
        >
          <div className="flex h-[78px] items-center justify-between px-5">
            <button className="flex items-center gap-2.5" onClick={onExit}>
              <span className="grid size-9 place-items-center rounded-xl bg-emerald-600 text-white">
                <GraduationCap className="size-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                Certi<span className="text-emerald-600">Learn</span>
              </span>
            </button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </Button>
          </div>
          <Separator />
          <div className="flex-1 space-y-1 p-3">
            <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">
              Workspace
            </p>
            {nav.map(([label, Icon]) => (
              <Button
                key={label}
                variant="ghost"
                onClick={() => {
                  setActive(label);
                  setSidebarOpen(false);
                  label !== "Overview" &&
                    notify(`${label} module selected — demo data shown`);
                }}
                className={`h-10 w-full justify-start gap-3 px-3 ${active === label ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-700" : "text-slate-600"}`}
              >
                <Icon className="size-4" />
                {label}
                {label === "Certificates" && (
                  <Badge className="ml-auto bg-amber-100 text-amber-700">
                    8
                  </Badge>
                )}
              </Button>
            ))}
          </div>
          <div className="p-3">
            <Button
              variant="ghost"
              onClick={() => {
                setActive("Settings");
                setSidebarOpen(false);
              }}
              className={`mb-3 w-full justify-start gap-3 ${active === "Settings" ? "bg-emerald-50 text-emerald-700" : "text-slate-600"}`}
            >
              <Settings /> Settings
            </Button>
            <Card className="border-0 bg-slate-900 py-4 text-white shadow-none">
              <CardContent className="px-4">
                <div className="mb-3 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-emerald-500 text-white">
                      SA
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">
                      Sophia Admin
                    </p>
                    <p className="truncate text-[10px] text-slate-400">
                      Super administrator
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-full"
                  onClick={onExit}
                >
                  View learner site
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="min-w-0">
          <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-white/95 px-4 backdrop-blur md:px-7">
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu />
            </Button>
            <AdminSearch onSelect={setActive} notify={notify} />
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="relative"
                    aria-label="Open admin notifications"
                  >
                    <Bell />
                    {!adminNotificationsRead && (
                      <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-rose-500" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[380px] max-w-[calc(100vw-24px)] p-0"
                >
                  <div className="flex items-center justify-between px-4 py-3">
                    <div>
                      <DropdownMenuLabel className="p-0">
                        Admin notifications
                      </DropdownMenuLabel>
                      <p className="text-xs text-slate-500">
                        {adminNotificationsRead
                          ? "No unread operational alerts"
                          : "4 items need attention"}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setAdminNotificationsRead(true);
                        notify("All admin notifications marked as read");
                      }}
                    >
                      Mark all read
                    </Button>
                  </div>
                  <DropdownMenuSeparator className="m-0" />
                  <div className="p-1">
                    {[
                      [
                        Award,
                        "8 certificate requests pending",
                        "The oldest request has been waiting for two days.",
                        "Certificates",
                        "12 min ago",
                      ],
                      [
                        CreditCard,
                        "Payment failed for Nadia Rahman",
                        "Yearly membership entered its grace period.",
                        "Payments",
                        "34 min ago",
                      ],
                      [
                        Users,
                        "26 new members registered",
                        "Review this week’s member growth and account status.",
                        "Members",
                        "2 hours ago",
                      ],
                      [
                        Megaphone,
                        "Maintenance notice is scheduled",
                        "The announcement will publish on July 24 at 02:00.",
                        "Announcements",
                        "Yesterday",
                      ],
                    ].map(([Icon, title, description, target, time]) => {
                      const AlertIcon = Icon as typeof Award;
                      return (
                        <DropdownMenuItem
                          key={title as string}
                          className="items-start gap-3 p-3"
                          onClick={() => {
                            setAdminNotificationsRead(true);
                            setActive(target as string);
                          }}
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                            <AlertIcon className="size-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <strong className="text-sm font-medium">
                                {title as string}
                              </strong>
                              {!adminNotificationsRead && (
                                <span className="size-2 shrink-0 rounded-full bg-rose-500" />
                              )}
                            </div>
                            <p className="mt-1 whitespace-normal text-xs leading-5 text-slate-500">
                              {description as string}
                            </p>
                            <small className="mt-1 block text-xs text-slate-400">
                              {time as string}
                            </small>
                          </div>
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                  <DropdownMenuSeparator className="m-0" />
                  <Button
                    variant="ghost"
                    className="h-11 w-full rounded-none"
                    onClick={() => notify("Admin notification history opened")}
                  >
                    View notification history <ArrowRight />
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <Avatar className="size-7">
                      <AvatarFallback className="bg-emerald-100 text-[10px] text-emerald-700">
                        SA
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden text-xs md:inline">
                      Sophia Admin
                    </span>
                    <ChevronDown className="size-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Admin account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Security</DropdownMenuItem>
                  <DropdownMenuItem onClick={onExit}>
                    Return to website
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <div className="space-y-6 p-4 md:p-7">
            {active === "Overview" ? (
              <>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <Badge
                      variant="secondary"
                      className="mb-2 text-emerald-700"
                    >
                      Live overview
                    </Badge>
                    <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                      Good morning, Sophia
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                      Here&apos;s what&apos;s happening across CertiLearn today.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() =>
                        notify("Report export prepared with fake data")
                      }
                    >
                      <FileText /> Export report
                    </Button>
                    <Button
                      className="bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => notify("New course form opened — UI demo")}
                    >
                      <Plus /> New course
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <Metric
                    title="Total members"
                    value="12,486"
                    change="12.5%"
                    detail="vs. last month"
                    icon={Users}
                    positive
                  />
                  <Metric
                    title="Active subscribers"
                    value="4,892"
                    change="8.2%"
                    detail="39.2% conversion"
                    icon={ShieldCheck}
                    positive
                  />
                  <Metric
                    title="Monthly revenue"
                    value="$28,460"
                    change="6.4%"
                    detail="vs. last month"
                    icon={CircleDollarSign}
                    positive
                  />
                  <Metric
                    title="Pending certificates"
                    value="28"
                    change="4.1%"
                    detail="needs attention"
                    icon={Award}
                  />
                </div>

                <div className="grid gap-4 xl:grid-cols-[1.55fr_.75fr]">
                  <Card>
                    <CardHeader className="flex-row items-start justify-between">
                      <div>
                        <CardTitle>Revenue overview</CardTitle>
                        <CardDescription>
                          Membership income over the last 8 months
                        </CardDescription>
                      </div>
                      <Badge variant="outline">
                        USD <ChevronDown />
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-5 flex items-end gap-3">
                        <span className="text-3xl font-bold">$168,240</span>
                        <Badge className="mb-1 bg-emerald-100 text-emerald-700">
                          <ArrowUpRight /> 14.8%
                        </Badge>
                      </div>
                      <div className="flex h-52 items-end gap-3 border-b border-slate-200 px-2">
                        {[43, 55, 48, 70, 62, 77, 69, 91].map((h, i) => (
                          <div
                            key={i}
                            className="group flex h-full flex-1 items-end"
                          >
                            <div
                              className={`w-full rounded-t-md ${i === 7 ? "bg-emerald-500" : "bg-emerald-100 group-hover:bg-emerald-200"}`}
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between px-1 text-[10px] text-slate-400">
                        {[
                          "Dec",
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                        ].map((x) => (
                          <span key={x}>{x}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Membership mix</CardTitle>
                      <CardDescription>Active users by plan</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <PlanRow
                        label="Yearly"
                        value="2,164"
                        percent={44}
                        color="[&>div]:bg-emerald-500"
                      />
                      <PlanRow
                        label="Monthly"
                        value="2,728"
                        percent={56}
                        color="[&>div]:bg-sky-500"
                      />
                      <Separator />
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-slate-50 p-3">
                          <p className="text-[10px] text-slate-500">
                            Renewal rate
                          </p>
                          <strong className="text-xl">87.4%</strong>
                        </div>
                        <div className="rounded-lg bg-slate-50 p-3">
                          <p className="text-[10px] text-slate-500">
                            Churn rate
                          </p>
                          <strong className="text-xl">3.8%</strong>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => notify("Subscriptions report selected")}
                      >
                        View subscriptions
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="members" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="members">Recent members</TabsTrigger>
                    <TabsTrigger value="certificates">
                      Certificate queue
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="members">
                    <Card>
                      <CardHeader className="gap-4">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                          <div>
                            <CardTitle>New members</CardTitle>
                            <CardDescription>
                              Latest registrations from around the world
                            </CardDescription>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => notify("Member directory opened")}
                          >
                            View all
                          </Button>
                        </div>
                        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                          <div className="relative min-w-0 flex-1">
                            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                            <Input
                              value={memberQuery}
                              onChange={(event) => {
                                setMemberQuery(event.target.value);
                                setMemberPage(1);
                              }}
                              className="pl-9"
                              placeholder="Search name, email, or country"
                            />
                          </div>
                          <FilterMenu
                            label={planFilter}
                            options={["All plans", "Free", "Monthly", "Yearly"]}
                            onSelect={(value) => {
                              setPlanFilter(value);
                              setMemberPage(1);
                            }}
                          />
                          <FilterMenu
                            label={statusFilter}
                            options={["All statuses", "Active", "Pending"]}
                            onSelect={(value) => {
                              setStatusFilter(value);
                              setMemberPage(1);
                            }}
                          />
                          <FilterMenu
                            label={memberSort}
                            options={["Newest", "Name A–Z", "Country A–Z"]}
                            onSelect={(value) => {
                              setMemberSort(value);
                              setMemberPage(1);
                            }}
                          />
                          {selectedMembers.length > 0 && (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button className="bg-emerald-600 hover:bg-emerald-700">
                                  {selectedMembers.length} selected{" "}
                                  <ChevronDown />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                  Bulk actions
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  onClick={() =>
                                    runMemberBulkAction("Activated")
                                  }
                                >
                                  <UserCheck /> Mark active
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() =>
                                    runMemberBulkAction("Message queued")
                                  }
                                >
                                  <Mail /> Send message
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  variant="destructive"
                                  onClick={() =>
                                    runMemberBulkAction("Suspended")
                                  }
                                >
                                  <UserX /> Suspend members
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="px-0">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-12 pl-6">
                                <Checkbox
                                  aria-label="Select all visible members"
                                  checked={
                                    allVisibleSelected
                                      ? true
                                      : selectedMembers.some((email) =>
                                            visibleMembers.some(
                                              (member) =>
                                                member.email === email,
                                            ),
                                          )
                                        ? "indeterminate"
                                        : false
                                  }
                                  onCheckedChange={toggleAllMembers}
                                />
                              </TableHead>
                              <TableHead>Member</TableHead>
                              <TableHead>Country</TableHead>
                              <TableHead>Plan</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Joined</TableHead>
                              <TableHead className="w-12" />
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {visibleMembers.map((member) => (
                              <TableRow
                                key={member.email}
                                data-state={
                                  selectedMembers.includes(member.email)
                                    ? "selected"
                                    : undefined
                                }
                              >
                                <TableCell className="pl-6">
                                  <Checkbox
                                    aria-label={`Select ${member.name}`}
                                    checked={selectedMembers.includes(
                                      member.email,
                                    )}
                                    onCheckedChange={() =>
                                      setSelectedMembers((current) =>
                                        current.includes(member.email)
                                          ? current.filter(
                                              (email) => email !== member.email,
                                            )
                                          : [...current, member.email],
                                      )
                                    }
                                  />
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-3">
                                    <Avatar className="size-8">
                                      <AvatarFallback className="bg-slate-100 text-[10px]">
                                        {member.initials}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <p className="text-xs font-semibold">
                                        {member.name}
                                      </p>
                                      <p className="text-[10px] text-slate-500">
                                        {member.email}
                                      </p>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell className="text-xs text-slate-600">
                                  {member.country}
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    variant={
                                      member.plan === "Free"
                                        ? "secondary"
                                        : "outline"
                                    }
                                  >
                                    {member.plan}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    className={
                                      member.status === "Active"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : "bg-amber-100 text-amber-700"
                                    }
                                  >
                                    {member.status}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-xs text-slate-500">
                                  {member.joined}
                                </TableCell>
                                <TableCell>
                                  <RowMenu notify={notify} />
                                </TableCell>
                              </TableRow>
                            ))}
                            {visibleMembers.length === 0 && (
                              <TableRow>
                                <TableCell
                                  colSpan={7}
                                  className="h-32 text-center"
                                >
                                  <Search className="mx-auto mb-2 size-5 text-slate-400" />
                                  <p className="text-sm font-medium">
                                    No members found
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    Try changing your search or filters.
                                  </p>
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                        <div className="flex flex-col gap-3 border-t px-6 py-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                          <span>
                            Showing{" "}
                            {filteredMembers.length === 0
                              ? 0
                              : (safeMemberPage - 1) * memberPageSize + 1}
                            –
                            {Math.min(
                              safeMemberPage * memberPageSize,
                              filteredMembers.length,
                            )}{" "}
                            of {filteredMembers.length} members
                          </span>
                          <div className="flex items-center gap-2">
                            {(memberQuery ||
                              planFilter !== "All plans" ||
                              statusFilter !== "All statuses") && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setMemberQuery("");
                                  setPlanFilter("All plans");
                                  setStatusFilter("All statuses");
                                  setMemberPage(1);
                                }}
                              >
                                Clear filters
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={safeMemberPage === 1}
                              onClick={() =>
                                setMemberPage((page) => Math.max(1, page - 1))
                              }
                            >
                              Previous
                            </Button>
                            <span>
                              Page {safeMemberPage} of {memberPageCount}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={safeMemberPage === memberPageCount}
                              onClick={() =>
                                setMemberPage((page) =>
                                  Math.min(memberPageCount, page + 1),
                                )
                              }
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="certificates">
                    <Card>
                      <CardHeader>
                        <CardTitle>Certificate requests</CardTitle>
                        <CardDescription>
                          Review eligibility before approving certificates
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {certificates.map(([name, course, status, time]) => (
                          <div
                            key={name}
                            className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center"
                          >
                            <span className="grid size-10 place-items-center rounded-lg bg-amber-50 text-amber-600">
                              <Award />
                            </span>
                            <div className="flex-1">
                              <p className="text-sm font-semibold">{name}</p>
                              <p className="text-xs text-slate-500">
                                {course} · {time}
                              </p>
                            </div>
                            <Badge variant="outline">{status}</Badge>
                            <Button
                              size="sm"
                              onClick={() =>
                                notify(`${name}'s eligibility review opened`)
                              }
                            >
                              Review
                            </Button>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </>
            ) : active === "Members" ? (
              <AdminMembersWorkspace notify={notify} />
            ) : active === "Courses" ? (
              <AdminCoursesWorkspace notify={notify} />
            ) : active === "Documents" ? (
              <AdminDocumentsWorkspace notify={notify} />
            ) : active === "Subscriptions" ? (
              <AdminSubscriptionsWorkspace notify={notify} />
            ) : active === "Payments" ? (
              <AdminPaymentsWorkspace notify={notify} />
            ) : active === "Certificates" ? (
              <AdminCertificatesWorkspace notify={notify} />
            ) : active === "Announcements" ? (
              <AdminAnnouncementsWorkspace notify={notify} />
            ) : active === "Reports" ? (
              <AdminReportsWorkspace notify={notify} />
            ) : active === "Settings" ? (
              <AdminSettingsWorkspace notify={notify} />
            ) : (
              <AdminModulePreview active={active} notify={notify} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function Metric({
  title,
  value,
  change,
  detail,
  icon: Icon,
  positive = false,
}: {
  title: string;
  value: string;
  change: string;
  detail: string;
  icon: typeof Users;
  positive?: boolean;
}) {
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="mb-4 flex items-start justify-between">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            <Icon className="size-5" />
          </span>
          <Badge
            variant="secondary"
            className={positive ? "text-emerald-700" : "text-amber-700"}
          >
            {positive ? <ArrowUpRight /> : <ArrowDownRight />}
            {change}
          </Badge>
        </div>
        <p className="text-2xl font-bold tracking-tight">{value}</p>
        <p className="mt-1 text-xs font-medium text-slate-700">{title}</p>
        <p className="mt-1 text-[10px] text-slate-400">{detail}</p>
      </CardContent>
    </Card>
  );
}

function PlanRow({
  label,
  value,
  percent,
  color,
}: {
  label: string;
  value: string;
  percent: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs">
        <span className="font-medium">{label}</span>
        <span className="text-slate-500">{value} members</span>
      </div>
      <Progress value={percent} className={color} />
    </div>
  );
}

function AdminSearch({
  onSelect,
  notify,
}: {
  onSelect: (section: string) => void;
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const items = [
    {
      title: "Amina Mensah",
      description: "amina@example.com · Yearly member",
      type: "Member",
      section: "Members",
      icon: Users,
    },
    {
      title: "Data Analysis with Excel",
      description: "24 lessons · Published",
      type: "Course",
      section: "Courses",
      icon: BookOpen,
    },
    {
      title: "Risk assessment worksheet",
      description: "XLSX · Premium document",
      type: "Document",
      section: "Documents",
      icon: FileSpreadsheet,
    },
    {
      title: "PAY-84721",
      description: "Amina Mensah · $149.00 · Paid",
      type: "Payment",
      section: "Payments",
      icon: CircleDollarSign,
    },
    {
      title: "CERT-2084",
      description: "Certificate request · Under review",
      type: "Certificate",
      section: "Certificates",
      icon: Award,
    },
    {
      title: "Yearly membership",
      description: "$149/year · 2,164 subscribers",
      type: "Subscription",
      section: "Subscriptions",
      icon: WalletCards,
    },
    {
      title: "Platform security",
      description: "Authentication and session policies",
      type: "Setting",
      section: "Settings",
      icon: ShieldCheck,
    },
  ];
  const results = query.trim()
    ? items.filter((item) =>
        `${item.title} ${item.description} ${item.type}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      )
    : [];
  return (
    <div className="relative hidden w-full max-w-sm md:block">
      <Search className="absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-slate-400" />
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="pl-9 pr-9"
        placeholder="Search members, courses, payments…"
      />
      {query && (
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute right-1 top-1/2 -translate-y-1/2"
          onClick={() => setQuery("")}
          aria-label="Clear admin search"
        >
          <X />
        </Button>
      )}
      {query && (
        <Card className="absolute left-0 top-[calc(100%+10px)] z-50 w-[460px] max-w-[calc(100vw-32px)] gap-0 overflow-hidden py-0 shadow-xl">
          <div className="border-b px-4 py-3 text-xs text-slate-500">
            {results.length} result{results.length === 1 ? "" : "s"} for{" "}
            <strong className="text-slate-700">“{query}”</strong>
          </div>
          <div className="max-h-80 overflow-y-auto p-1">
            {results.map((result) => {
              const ResultIcon = result.icon;
              return (
                <Button
                  key={`${result.type}-${result.title}`}
                  variant="ghost"
                  className="h-auto w-full justify-start gap-3 p-3 text-left"
                  onClick={() => {
                    onSelect(result.section);
                    setQuery("");
                    notify(`${result.title} opened in ${result.section}`);
                  }}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                    <ResultIcon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="block truncate text-sm font-medium">
                      {result.title}
                    </strong>
                    <small className="mt-1 block text-xs text-slate-500">
                      {result.description}
                    </small>
                  </span>
                  <Badge variant="secondary">{result.type}</Badge>
                </Button>
              );
            })}
            {results.length === 0 && (
              <div className="px-5 py-10 text-center">
                <Search className="mx-auto size-5 text-slate-400" />
                <p className="mt-2 text-sm font-medium">
                  No admin records found
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Try a member, course, transaction, or request ID.
                </p>
              </div>
            )}
          </div>
          <div className="border-t px-4 py-2 text-xs text-slate-400">
            Search uses representative UI-only records
          </div>
        </Card>
      )}
    </div>
  );
}

function FilterMenu({
  label,
  options,
  onSelect,
}: {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="justify-between lg:min-w-32">
          <Filter />
          {label}
          <ChevronDown className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((option) => (
          <DropdownMenuItem key={option} onClick={() => onSelect(option)}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminMembersWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [plan, setPlan] = useState("All plans");
  const [selected, setSelected] = useState<string[]>([]);
  const rows = members.filter(
    (member) =>
      (status === "All statuses" || member.status === status) &&
      (plan === "All plans" || member.plan === plan) &&
      `${member.name} ${member.email} ${member.country}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const allSelected =
    rows.length > 0 && rows.every((member) => selected.includes(member.email));
  const applyBulk = (action: string) => {
    notify(
      `${action} ${selected.length} member${selected.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelected([]);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Member management
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Members
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage access, plans, account status, and member communication.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => notify("Member export prepared with fake data")}
          >
            <FileText /> Export
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify("Invite member form opened")}
          >
            <Plus /> Invite member
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MemberSummary
          label="All members"
          value="12,486"
          note="+142 this month"
          icon={Users}
        />
        <MemberSummary
          label="Paid members"
          value="4,892"
          note="39.2% of members"
          icon={ShieldCheck}
        />
        <MemberSummary
          label="Pending review"
          value="86"
          note="Requires attention"
          icon={Activity}
          warning
        />
        <MemberSummary
          label="Suspended"
          value="34"
          note="0.3% of members"
          icon={UserX}
        />
      </div>
      <Card>
        <CardHeader className="gap-4">
          <div>
            <CardTitle>Member directory</CardTitle>
            <CardDescription>
              Showing representative client-side demo records
            </CardDescription>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search members"
              />
            </div>
            <FilterMenu
              label={plan}
              options={["All plans", "Free", "Monthly", "Yearly"]}
              onSelect={setPlan}
            />
            <FilterMenu
              label={status}
              options={["All statuses", "Active", "Pending"]}
              onSelect={setStatus}
            />
            {selected.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    {selected.length} selected <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Bulk actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => applyBulk("Activated")}>
                    <UserCheck /> Mark active
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulk("Messaged")}>
                    <Mail /> Send message
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => applyBulk("Suspended")}
                  >
                    <UserX /> Suspend
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={
                      allSelected
                        ? true
                        : selected.length
                          ? "indeterminate"
                          : false
                    }
                    onCheckedChange={() =>
                      setSelected(
                        allSelected ? [] : rows.map((member) => member.email),
                      )
                    }
                    aria-label="Select all members"
                  />
                </TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((member) => (
                <TableRow
                  key={member.email}
                  data-state={
                    selected.includes(member.email) ? "selected" : undefined
                  }
                >
                  <TableCell className="pl-6">
                    <Checkbox
                      checked={selected.includes(member.email)}
                      onCheckedChange={() =>
                        setSelected((current) =>
                          current.includes(member.email)
                            ? current.filter((email) => email !== member.email)
                            : [...current, member.email],
                        )
                      }
                      aria-label={`Select ${member.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9">
                        <AvatarFallback className="bg-emerald-50 text-xs text-emerald-700">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-xs text-slate-500">{member.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-slate-600">
                    {member.country}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={member.plan === "Free" ? "secondary" : "outline"}
                    >
                      {member.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        member.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }
                    >
                      {member.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-slate-500">
                    {member.joined}
                  </TableCell>
                  <TableCell>
                    <RowMenu notify={notify} />
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="h-40 text-center">
                    <Users className="mx-auto mb-2 size-6 text-slate-400" />
                    <p className="text-sm font-medium">No matching members</p>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setPlan("All plans");
                        setStatus("All statuses");
                      }}
                    >
                      Clear filters
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500">
            <span>
              {rows.length} of {members.length} demo members
            </span>
            <span>Directory total: 12,486</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function AdminCoursesWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [access, setAccess] = useState("All access");
  const [selected, setSelected] = useState<string[]>([]);
  const rows = adminCourses.filter(
    (course) =>
      (status === "All statuses" || course.status === status) &&
      (access === "All access" || course.access === access) &&
      `${course.title} ${course.category} ${course.instructor}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const allSelected =
    rows.length > 0 && rows.every((course) => selected.includes(course.title));
  const applyBulk = (action: string) => {
    notify(
      `${action} ${selected.length} course${selected.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelected([]);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Training management
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Courses
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Create, organize, review, and publish learning content.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => notify("Course catalog preview opened")}
          >
            <Eye /> Preview catalog
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify("New course editor opened — UI demo")}
          >
            <Plus /> New course
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <CourseSummary
          label="Total courses"
          value="48"
          note="5 updated this week"
          icon={BookOpen}
        />
        <CourseSummary
          label="Published"
          value="36"
          note="75% of catalog"
          icon={Eye}
        />
        <CourseSummary
          label="Drafts"
          value="7"
          note="Continue editing"
          icon={Pencil}
        />
        <CourseSummary
          label="In review"
          value="5"
          note="Ready for approval"
          icon={Activity}
          warning
        />
      </div>
      <Card>
        <CardHeader className="gap-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Course catalog</CardTitle>
              <CardDescription>
                Manage course visibility, access, and learning content
              </CardDescription>
            </div>
            <Badge variant="outline">48 courses total</Badge>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search course, category, or instructor"
              />
            </div>
            <FilterMenu
              label={status}
              options={["All statuses", "Published", "Draft", "Review"]}
              onSelect={setStatus}
            />
            <FilterMenu
              label={access}
              options={["All access", "Free", "Premium"]}
              onSelect={setAccess}
            />
            {selected.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    {selected.length} selected <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Bulk actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => applyBulk("Published")}>
                    <Eye /> Publish
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => applyBulk("Moved to draft:")}
                  >
                    <Pencil /> Move to draft
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => applyBulk("Archived")}
                  >
                    <Archive /> Archive
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={
                      allSelected
                        ? true
                        : selected.length
                          ? "indeterminate"
                          : false
                    }
                    onCheckedChange={() =>
                      setSelected(
                        allSelected ? [] : rows.map((course) => course.title),
                      )
                    }
                    aria-label="Select all courses"
                  />
                </TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Content</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Access</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((course) => (
                <TableRow
                  key={course.title}
                  data-state={
                    selected.includes(course.title) ? "selected" : undefined
                  }
                >
                  <TableCell className="pl-6">
                    <Checkbox
                      checked={selected.includes(course.title)}
                      onCheckedChange={() =>
                        setSelected((current) =>
                          current.includes(course.title)
                            ? current.filter((title) => title !== course.title)
                            : [...current, course.title],
                        )
                      }
                      aria-label={`Select ${course.title}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex min-w-[230px] items-center gap-3">
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-lg text-xs font-semibold ${course.color}`}
                      >
                        {course.code}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{course.title}</p>
                        <p className="text-xs text-slate-500">
                          {course.category}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-slate-600">
                    {course.instructor}
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{course.lessons} lessons</p>
                    <p className="text-xs text-slate-400">8 modules</p>
                  </TableCell>
                  <TableCell className="text-sm text-slate-600">
                    {course.students.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        course.access === "Free" ? "secondary" : "outline"
                      }
                    >
                      {course.access}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        course.status === "Published"
                          ? "bg-emerald-100 text-emerald-700"
                          : course.status === "Review"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                      }
                    >
                      {course.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs text-slate-500">
                    {course.updated}
                  </TableCell>
                  <TableCell>
                    <CourseRowMenu course={course.title} notify={notify} />
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="h-40 text-center">
                    <BookOpen className="mx-auto mb-2 size-6 text-slate-400" />
                    <p className="text-sm font-medium">No matching courses</p>
                    <p className="text-xs text-slate-500">
                      Try changing the search or filters.
                    </p>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setStatus("All statuses");
                        setAccess("All access");
                      }}
                    >
                      Clear filters
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500">
            <span>Showing {rows.length} demo courses</span>
            <span>5 of 48 catalog records loaded</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function CourseSummary({
  label,
  value,
  note,
  icon: Icon,
  warning = false,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
  warning?: boolean;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-5">
        <span
          className={`grid size-11 place-items-center rounded-xl ${warning ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}
        >
          <Icon className="size-5" />
        </span>
        <div>
          <strong className="text-2xl font-semibold">{value}</strong>
          <p className="text-sm text-slate-700">{label}</p>
          <small className="text-xs text-slate-400">{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function CourseRowMenu({
  course,
  notify,
}: {
  course: string;
  notify: (message: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => notify(`${course} preview opened`)}>
          <Eye /> Preview
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify(`${course} editor opened`)}>
          <Pencil /> Edit course
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify(`${course} curriculum opened`)}>
          <BookOpen /> Manage curriculum
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => notify(`${course} archive confirmation opened`)}
        >
          <Archive /> Archive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminDocumentsWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [access, setAccess] = useState("All access");
  const [type, setType] = useState("All files");
  const [selected, setSelected] = useState<string[]>([]);
  const rows = adminDocuments.filter(
    (document) =>
      (access === "All access" || document.access === access) &&
      (type === "All files" || document.type === type) &&
      `${document.title} ${document.course} ${document.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const allSelected =
    rows.length > 0 &&
    rows.every((document) => selected.includes(document.title));
  const applyBulk = (action: string) => {
    notify(
      `${action} ${selected.length} document${selected.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelected([]);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Resource management
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Documents
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Organize downloadable learning files and control member access.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => notify("Storage usage report opened")}
          >
            <HardDrive /> Storage
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify("Document upload panel opened — UI demo")}
          >
            <FileUp /> Upload document
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DocumentSummary
          label="Documents"
          value="186"
          note="14 added this month"
          icon={FileText}
        />
        <DocumentSummary
          label="Total downloads"
          value="42.8k"
          note="+18.6% this month"
          icon={Download}
        />
        <DocumentSummary
          label="Premium files"
          value="112"
          note="60% of library"
          icon={ShieldCheck}
        />
        <DocumentSummary
          label="Storage used"
          value="8.4 GB"
          note="of 25 GB available"
          icon={HardDrive}
        />
      </div>
      <Card>
        <CardHeader className="gap-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Document library</CardTitle>
              <CardDescription>
                Training files, templates, worksheets, and guides
              </CardDescription>
            </div>
            <Badge variant="outline">186 files</Badge>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search file, course, or category"
              />
            </div>
            <FilterMenu
              label={type}
              options={["All files", "PDF", "XLSX", "DOCX"]}
              onSelect={setType}
            />
            <FilterMenu
              label={access}
              options={["All access", "Free", "Premium"]}
              onSelect={setAccess}
            />
            {selected.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    {selected.length} selected <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Bulk actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => applyBulk("Published")}>
                    <Eye /> Publish
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => applyBulk("Changed to premium:")}
                  >
                    <ShieldCheck /> Set premium
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulk("Downloaded")}>
                    <Download /> Download files
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => applyBulk("Archived")}
                  >
                    <Archive /> Archive
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={
                      allSelected
                        ? true
                        : selected.length
                          ? "indeterminate"
                          : false
                    }
                    onCheckedChange={() =>
                      setSelected(
                        allSelected
                          ? []
                          : rows.map((document) => document.title),
                      )
                    }
                    aria-label="Select all documents"
                  />
                </TableHead>
                <TableHead>Document</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Access</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((document) => (
                <TableRow
                  key={document.title}
                  data-state={
                    selected.includes(document.title) ? "selected" : undefined
                  }
                >
                  <TableCell className="pl-6">
                    <Checkbox
                      checked={selected.includes(document.title)}
                      onCheckedChange={() =>
                        setSelected((current) =>
                          current.includes(document.title)
                            ? current.filter(
                                (title) => title !== document.title,
                              )
                            : [...current, document.title],
                        )
                      }
                      aria-label={`Select ${document.title}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex min-w-[230px] items-center gap-3">
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-lg ${document.type === "XLSX" ? "bg-emerald-50 text-emerald-700" : document.type === "DOCX" ? "bg-sky-50 text-sky-700" : "bg-rose-50 text-rose-700"}`}
                      >
                        {document.type === "XLSX" ? (
                          <FileSpreadsheet className="size-5" />
                        ) : (
                          <FileText className="size-5" />
                        )}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{document.title}</p>
                        <p className="text-xs text-slate-500">
                          {document.category}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[220px] text-sm text-slate-600">
                    {document.course}
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{document.type}</p>
                    <p className="text-xs text-slate-400">{document.size}</p>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        document.access === "Free" ? "secondary" : "outline"
                      }
                    >
                      {document.access}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-slate-600">
                    {document.downloads.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        document.status === "Published"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      }
                    >
                      {document.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs text-slate-500">
                    {document.updated}
                  </TableCell>
                  <TableCell>
                    <DocumentRowMenu
                      document={document.title}
                      notify={notify}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="h-40 text-center">
                    <FileText className="mx-auto mb-2 size-6 text-slate-400" />
                    <p className="text-sm font-medium">No matching documents</p>
                    <p className="text-xs text-slate-500">
                      Try another file type, access level, or search.
                    </p>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setType("All files");
                        setAccess("All access");
                      }}
                    >
                      Clear filters
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500">
            <span>Showing {rows.length} demo documents</span>
            <span>8.4 GB of 25 GB used</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function DocumentSummary({
  label,
  value,
  note,
  icon: Icon,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-5">
        <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
          <Icon className="size-5" />
        </span>
        <div>
          <strong className="text-2xl font-semibold">{value}</strong>
          <p className="text-sm text-slate-700">{label}</p>
          <small className="text-xs text-slate-400">{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function DocumentRowMenu({
  document,
  notify,
}: {
  document: string;
  notify: (message: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => notify(`${document} preview opened`)}>
          <Eye /> Preview
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`${document} details editor opened`)}
        >
          <Pencil /> Edit details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify(`${document} download ready`)}>
          <Download /> Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => notify(`${document} archive confirmation opened`)}
        >
          <Archive /> Archive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminSubscriptionsWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [plan, setPlan] = useState("All plans");
  const [status, setStatus] = useState("All statuses");
  const [selected, setSelected] = useState<string[]>([]);
  const rows = adminSubscriptions.filter(
    (subscription) =>
      (plan === "All plans" || subscription.plan === plan) &&
      (status === "All statuses" || subscription.status === status) &&
      `${subscription.member} ${subscription.email} ${subscription.plan}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const allSelected =
    rows.length > 0 &&
    rows.every((subscription) => selected.includes(subscription.email));
  const applyBulk = (action: string) => {
    notify(
      `${action} ${selected.length} subscription${selected.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelected([]);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Membership billing
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Subscriptions
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Monitor membership plans, renewals, and subscription health.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => notify("Subscription export prepared")}
          >
            <Download /> Export
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify("Membership plans editor opened")}
          >
            <Pencil /> Manage plans
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SubscriptionSummary
          label="Active subscriptions"
          value="4,892"
          note="+8.2% this month"
          icon={RefreshCw}
        />
        <SubscriptionSummary
          label="Monthly recurring"
          value="$28.4k"
          note="Across all currencies"
          icon={CreditCard}
        />
        <SubscriptionSummary
          label="Renewing soon"
          value="318"
          note="Within the next 7 days"
          icon={CalendarClock}
          warning
        />
        <SubscriptionSummary
          label="Past due"
          value="46"
          note="Payment action needed"
          icon={Activity}
          danger
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="border-emerald-200 bg-emerald-50/40">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge className="bg-emerald-600">Most popular</Badge>
              <Badge variant="outline">Active</Badge>
            </div>
            <CardTitle className="mt-2">Yearly membership</CardTitle>
            <CardDescription>
              Full premium access billed once per year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <strong className="text-3xl font-semibold">$149</strong>
              <span className="text-sm text-slate-500"> / year</span>
            </div>
            <div className="mb-4 flex justify-between text-sm">
              <span className="text-slate-500">Subscribers</span>
              <strong>2,164</strong>
            </div>
            <Button
              variant="outline"
              className="w-full bg-white"
              onClick={() => notify("Yearly plan editor opened")}
            >
              Edit plan benefits
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Flexible</Badge>
              <Badge variant="outline">Active</Badge>
            </div>
            <CardTitle className="mt-2">Monthly membership</CardTitle>
            <CardDescription>
              Premium access with monthly renewal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <strong className="text-3xl font-semibold">$19</strong>
              <span className="text-sm text-slate-500"> / month</span>
            </div>
            <div className="mb-4 flex justify-between text-sm">
              <span className="text-slate-500">Subscribers</span>
              <strong>2,728</strong>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => notify("Monthly plan editor opened")}
            >
              Edit plan benefits
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Entry plan</Badge>
              <Badge variant="outline">Active</Badge>
            </div>
            <CardTitle className="mt-2">Free membership</CardTitle>
            <CardDescription>
              Limited courses and free document access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <strong className="text-3xl font-semibold">$0</strong>
              <span className="text-sm text-slate-500"> forever</span>
            </div>
            <div className="mb-4 flex justify-between text-sm">
              <span className="text-slate-500">Members</span>
              <strong>7,594</strong>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => notify("Free plan access rules opened")}
            >
              Edit access rules
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_320px]">
        <Card>
          <CardHeader>
            <CardTitle>Subscription growth</CardTitle>
            <CardDescription>
              Active paid memberships over the last six months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-5 flex items-end gap-3">
              <strong className="text-3xl font-semibold">4,892</strong>
              <Badge className="mb-1 bg-emerald-100 text-emerald-700">
                <ArrowUpRight /> 8.2%
              </Badge>
            </div>
            <div className="flex h-32 items-end gap-3">
              {[52, 61, 58, 73, 81, 92].map((height, index) => (
                <div key={index} className="flex h-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-emerald-100 last:bg-emerald-500"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs text-slate-400">
              {["Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Plan distribution</CardTitle>
            <CardDescription>Current paid members</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <PlanRow
              label="Yearly"
              value="2,164"
              percent={44}
              color="[&>div]:bg-emerald-500"
            />
            <PlanRow
              label="Monthly"
              value="2,728"
              percent={56}
              color="[&>div]:bg-sky-500"
            />
            <Separator />
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Average value</span>
              <strong>$58.20</strong>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="gap-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Member access lifecycle</CardTitle>
              <CardDescription>
                Manage plan assignment, renewal behavior, and premium access
              </CardDescription>
            </div>
            <Badge variant="outline">4,892 active</Badge>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search member, email, or plan"
              />
            </div>
            <FilterMenu
              label={plan}
              options={["All plans", "Monthly", "Yearly"]}
              onSelect={setPlan}
            />
            <FilterMenu
              label={status}
              options={["All statuses", "Active", "Past due", "Cancelled"]}
              onSelect={setStatus}
            />
            {selected.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    {selected.length} selected <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Bulk actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => applyBulk("Renewal reminders sent to")}
                  >
                    <Mail /> Send renewal reminder
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulk("Reactivated")}>
                    <RefreshCw /> Reactivate access
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => applyBulk("Cancelled")}
                  >
                    <X /> Cancel memberships
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={
                      allSelected
                        ? true
                        : selected.length
                          ? "indeterminate"
                          : false
                    }
                    onCheckedChange={() =>
                      setSelected(
                        allSelected
                          ? []
                          : rows.map((subscription) => subscription.email),
                      )
                    }
                    aria-label="Select all subscriptions"
                  />
                </TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Membership</TableHead>
                <TableHead>Access status</TableHead>
                <TableHead>Next lifecycle event</TableHead>
                <TableHead>Renewal</TableHead>
                <TableHead>Started</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((subscription) => (
                <TableRow
                  key={subscription.email}
                  data-state={
                    selected.includes(subscription.email)
                      ? "selected"
                      : undefined
                  }
                >
                  <TableCell className="pl-6">
                    <Checkbox
                      checked={selected.includes(subscription.email)}
                      onCheckedChange={() =>
                        setSelected((current) =>
                          current.includes(subscription.email)
                            ? current.filter(
                                (email) => email !== subscription.email,
                              )
                            : [...current, subscription.email],
                        )
                      }
                      aria-label={`Select ${subscription.member}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex min-w-[210px] items-center gap-3">
                      <Avatar className="size-9">
                        <AvatarFallback className="bg-emerald-50 text-xs text-emerald-700">
                          {subscription.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {subscription.member}
                        </p>
                        <p className="text-xs text-slate-500">
                          {subscription.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{subscription.plan}</Badge>
                    <p className="mt-1 text-xs text-slate-400">
                      {subscription.amount}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        subscription.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : subscription.status === "Past due"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                      }
                    >
                      {subscription.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-sm text-slate-600">
                    {subscription.renews}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-sm text-slate-500">
                    {subscription.billing}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs text-slate-500">
                    {subscription.started}
                  </TableCell>
                  <TableCell>
                    <SubscriptionRowMenu
                      member={subscription.member}
                      notify={notify}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="h-40 text-center">
                    <WalletCards className="mx-auto mb-2 size-6 text-slate-400" />
                    <p className="text-sm font-medium">
                      No matching subscriptions
                    </p>
                    <p className="text-xs text-slate-500">
                      Try changing your plan or status filters.
                    </p>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setPlan("All plans");
                        setStatus("All statuses");
                      }}
                    >
                      Clear filters
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500">
            <span>Showing {rows.length} demo memberships</span>
            <span>Payment transactions are managed separately</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function SubscriptionSummary({
  label,
  value,
  note,
  icon: Icon,
  warning = false,
  danger = false,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
  warning?: boolean;
  danger?: boolean;
}) {
  const tone = danger
    ? "bg-rose-50 text-rose-700"
    : warning
      ? "bg-amber-50 text-amber-700"
      : "bg-emerald-50 text-emerald-700";
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-5">
        <span className={`grid size-11 place-items-center rounded-xl ${tone}`}>
          <Icon className="size-5" />
        </span>
        <div>
          <strong className="text-2xl font-semibold">{value}</strong>
          <p className="text-sm text-slate-700">{label}</p>
          <small className="text-xs text-slate-400">{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function SubscriptionRowMenu({
  member,
  notify,
}: {
  member: string;
  notify: (message: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => notify(`${member}'s subscription details opened`)}
        >
          <Eye /> View details
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`${member}'s plan editor opened`)}
        >
          <Pencil /> Change plan
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`Renewal reminder queued for ${member}`)}
        >
          <Mail /> Send reminder
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => notify(`${member}'s cancellation confirmation opened`)}
        >
          <X /> Cancel subscription
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminPaymentsWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [method, setMethod] = useState("All methods");
  const [selected, setSelected] = useState<string[]>([]);
  const rows = adminPayments.filter(
    (payment) =>
      (status === "All statuses" || payment.status === status) &&
      (method === "All methods" ||
        (method === "Cards"
          ? payment.method !== "PayPal"
          : payment.method === "PayPal")) &&
      `${payment.id} ${payment.member} ${payment.email}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const allSelected =
    rows.length > 0 && rows.every((payment) => selected.includes(payment.id));
  const applyBulk = (action: string) => {
    notify(
      `${action} ${selected.length} payment${selected.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelected([]);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Financial operations
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Payments
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track transactions, issue receipts, and manage refunds.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => notify("Payment reconciliation report opened")}
          >
            <RefreshCw /> Reconcile
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify("Payment export prepared with fake records")}
          >
            <Download /> Export payments
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <PaymentSummary
          label="Gross revenue"
          value="$28,460"
          note="This month"
          icon={CircleDollarSign}
        />
        <PaymentSummary
          label="Successful"
          value="1,284"
          note="96.8% success rate"
          icon={CheckCircle2}
        />
        <PaymentSummary
          label="Pending"
          value="$1,246"
          note="18 transactions"
          icon={CalendarClock}
          warning
        />
        <PaymentSummary
          label="Refunded"
          value="$684"
          note="9 transactions"
          icon={RotateCcw}
          danger
        />
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <CardTitle>Revenue flow</CardTitle>
              <CardDescription>
                Daily successful payments during the last seven days
              </CardDescription>
            </div>
            <div className="text-left sm:text-right">
              <strong className="text-2xl font-semibold">$7,842</strong>
              <p className="text-xs text-emerald-700">
                +12.4% from previous week
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex h-36 items-end gap-3">
            {[48, 72, 56, 83, 64, 91, 78].map((height, index) => (
              <div key={index} className="group flex h-full flex-1 items-end">
                <div
                  className={`w-full rounded-t-md ${index === 5 ? "bg-emerald-500" : "bg-emerald-100 group-hover:bg-emerald-200"}`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-slate-400">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="gap-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Transaction ledger</CardTitle>
              <CardDescription>
                Recent international membership payments
              </CardDescription>
            </div>
            <Badge variant="outline">USD view</Badge>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search transaction, member, or email"
              />
            </div>
            <FilterMenu
              label={status}
              options={[
                "All statuses",
                "Paid",
                "Pending",
                "Failed",
                "Refunded",
              ]}
              onSelect={setStatus}
            />
            <FilterMenu
              label={method}
              options={["All methods", "Cards", "PayPal"]}
              onSelect={setMethod}
            />
            {selected.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    {selected.length} selected <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Bulk actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => applyBulk("Receipts sent for")}
                  >
                    <ReceiptText /> Send receipts
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulk("Exported")}>
                    <Download /> Export selected
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => applyBulk("Retried")}>
                    <RefreshCw /> Retry failed
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => applyBulk("Refund requested for")}
                  >
                    <RotateCcw /> Issue refunds
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={
                      allSelected
                        ? true
                        : selected.length
                          ? "indeterminate"
                          : false
                    }
                    onCheckedChange={() =>
                      setSelected(
                        allSelected ? [] : rows.map((payment) => payment.id),
                      )
                    }
                    aria-label="Select all payments"
                  />
                </TableHead>
                <TableHead>Transaction</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((payment) => (
                <TableRow
                  key={payment.id}
                  data-state={
                    selected.includes(payment.id) ? "selected" : undefined
                  }
                >
                  <TableCell className="pl-6">
                    <Checkbox
                      checked={selected.includes(payment.id)}
                      onCheckedChange={() =>
                        setSelected((current) =>
                          current.includes(payment.id)
                            ? current.filter((id) => id !== payment.id)
                            : [...current, payment.id],
                        )
                      }
                      aria-label={`Select ${payment.id}`}
                    />
                  </TableCell>
                  <TableCell>
                    <p className="font-mono text-xs font-medium">
                      {payment.id}
                    </p>
                    <p className="text-xs text-slate-400">{payment.currency}</p>
                  </TableCell>
                  <TableCell>
                    <div className="min-w-[190px]">
                      <p className="text-sm font-medium">{payment.member}</p>
                      <p className="text-xs text-slate-500">{payment.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{payment.plan}</Badge>
                  </TableCell>
                  <TableCell className="text-sm font-medium">
                    {payment.amount}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-sm text-slate-600">
                    {payment.method}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        payment.status === "Paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : payment.status === "Pending"
                            ? "bg-amber-100 text-amber-700"
                            : payment.status === "Failed"
                              ? "bg-rose-100 text-rose-700"
                              : "bg-slate-100 text-slate-600"
                      }
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs text-slate-500">
                    {payment.date}
                  </TableCell>
                  <TableCell>
                    <PaymentRowMenu payment={payment.id} notify={notify} />
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="h-40 text-center">
                    <CircleDollarSign className="mx-auto mb-2 size-6 text-slate-400" />
                    <p className="text-sm font-medium">No matching payments</p>
                    <p className="text-xs text-slate-500">
                      Try another status, payment method, or search.
                    </p>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setStatus("All statuses");
                        setMethod("All methods");
                      }}
                    >
                      Clear filters
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500">
            <span>Showing {rows.length} demo transactions</span>
            <span>Last reconciled 8 minutes ago</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function PaymentSummary({
  label,
  value,
  note,
  icon: Icon,
  warning = false,
  danger = false,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
  warning?: boolean;
  danger?: boolean;
}) {
  const tone = danger
    ? "bg-rose-50 text-rose-700"
    : warning
      ? "bg-amber-50 text-amber-700"
      : "bg-emerald-50 text-emerald-700";
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-5">
        <span className={`grid size-11 place-items-center rounded-xl ${tone}`}>
          <Icon className="size-5" />
        </span>
        <div>
          <strong className="text-2xl font-semibold">{value}</strong>
          <p className="text-sm text-slate-700">{label}</p>
          <small className="text-xs text-slate-400">{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function PaymentRowMenu({
  payment,
  notify,
}: {
  payment: string;
  notify: (message: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => notify(`${payment} details opened`)}>
          <Eye /> View transaction
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify(`${payment} receipt opened`)}>
          <ReceiptText /> View receipt
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify(`${payment} receipt sent`)}>
          <Mail /> Email receipt
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => notify(`${payment} refund panel opened`)}
        >
          <RotateCcw /> Issue refund
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminCertificatesWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [selected, setSelected] = useState<string[]>([]);
  const rows = adminCertificateRequests.filter(
    (request) =>
      (status === "All statuses" || request.status === status) &&
      `${request.id} ${request.member} ${request.course} ${request.country}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const allSelected =
    rows.length > 0 && rows.every((request) => selected.includes(request.id));
  const applyBulk = (action: string) => {
    notify(
      `${action} ${selected.length} certificate request${selected.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelected([]);
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Credential management
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Certificates
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Review eligibility, issue credentials, and manage verification
            records.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => notify("Certificate template manager opened")}
          >
            <Pencil /> Templates
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify("Manual certificate issue form opened")}
          >
            <Plus /> Issue certificate
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <CertificateSummary
          label="Issued certificates"
          value="3,846"
          note="126 this month"
          icon={BadgeCheck}
        />
        <CertificateSummary
          label="Pending review"
          value="28"
          note="Oldest request: 2 days"
          icon={CalendarClock}
          warning
        />
        <CertificateSummary
          label="Eligible"
          value="64"
          note="Ready to request"
          icon={CheckCircle2}
        />
        <CertificateSummary
          label="Verification views"
          value="9.2k"
          note="Public checks this month"
          icon={Eye}
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Review pipeline</CardTitle>
            <CardDescription>
              Certificate requests by current workflow stage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-4">
              {[
                ["Requested", "12", "bg-sky-50 text-sky-700"],
                ["Under review", "28", "bg-amber-50 text-amber-700"],
                ["Approved", "41", "bg-emerald-50 text-emerald-700"],
                ["Needs action", "7", "bg-rose-50 text-rose-700"],
              ].map(([label, value, tone]) => (
                <div key={label} className={`rounded-xl p-4 ${tone}`}>
                  <strong className="text-2xl font-semibold">{value}</strong>
                  <p className="mt-1 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Credential integrity</CardTitle>
            <CardDescription>Verification health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Active credentials</span>
              <strong>99.8%</strong>
            </div>
            <Progress value={99.8} className="[&>div]:bg-emerald-500" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Revoked</span>
              <strong>8</strong>
            </div>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => notify("Public verification portal opened")}
            >
              <Eye /> Verification portal
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="gap-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Certificate request queue</CardTitle>
              <CardDescription>
                Confirm completion and assessment requirements before issuing
              </CardDescription>
            </div>
            <Badge variant="outline">28 pending</Badge>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search request, learner, course, or country"
              />
            </div>
            <FilterMenu
              label={status}
              options={[
                "All statuses",
                "Requested",
                "Under review",
                "Eligible",
                "Needs action",
                "Approved",
              ]}
              onSelect={setStatus}
            />
            {selected.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    {selected.length} selected <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Bulk review</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => applyBulk("Approved")}>
                    <CheckCircle2 /> Approve requests
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => applyBulk("Moved to review:")}
                  >
                    <Eye /> Mark under review
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => applyBulk("Information requested for")}
                  >
                    <Mail /> Request information
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    variant="destructive"
                    onClick={() => applyBulk("Rejected")}
                  >
                    <X /> Reject requests
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={
                      allSelected
                        ? true
                        : selected.length
                          ? "indeterminate"
                          : false
                    }
                    onCheckedChange={() =>
                      setSelected(
                        allSelected ? [] : rows.map((request) => request.id),
                      )
                    }
                    aria-label="Select all certificate requests"
                  />
                </TableHead>
                <TableHead>Request</TableHead>
                <TableHead>Learner</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Completion</TableHead>
                <TableHead>Assessment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Requested</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((request) => (
                <TableRow
                  key={request.id}
                  data-state={
                    selected.includes(request.id) ? "selected" : undefined
                  }
                >
                  <TableCell className="pl-6">
                    <Checkbox
                      checked={selected.includes(request.id)}
                      onCheckedChange={() =>
                        setSelected((current) =>
                          current.includes(request.id)
                            ? current.filter((id) => id !== request.id)
                            : [...current, request.id],
                        )
                      }
                      aria-label={`Select ${request.id}`}
                    />
                  </TableCell>
                  <TableCell>
                    <p className="font-mono text-xs font-medium">
                      {request.id}
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="min-w-[150px]">
                      <p className="text-sm font-medium">{request.member}</p>
                      <p className="text-xs text-slate-500">
                        {request.country}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="min-w-[210px] text-sm text-slate-600">
                    {request.course}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.progress === "100%" ? "secondary" : "outline"
                      }
                    >
                      {request.progress}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm font-medium">
                    {request.score}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        request.status === "Approved" ||
                        request.status === "Eligible"
                          ? "bg-emerald-100 text-emerald-700"
                          : request.status === "Needs action"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-amber-100 text-amber-700"
                      }
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-xs text-slate-500">
                    {request.requested}
                  </TableCell>
                  <TableCell>
                    <CertificateRowMenu request={request.id} notify={notify} />
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={9} className="h-40 text-center">
                    <Award className="mx-auto mb-2 size-6 text-slate-400" />
                    <p className="text-sm font-medium">No matching requests</p>
                    <p className="text-xs text-slate-500">
                      Try another status or search phrase.
                    </p>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setStatus("All statuses");
                      }}
                    >
                      Clear filters
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500">
            <span>Showing {rows.length} demo requests</span>
            <span>Eligibility rules checked automatically</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function CertificateSummary({
  label,
  value,
  note,
  icon: Icon,
  warning = false,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
  warning?: boolean;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-5">
        <span
          className={`grid size-11 place-items-center rounded-xl ${warning ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}
        >
          <Icon className="size-5" />
        </span>
        <div>
          <strong className="text-2xl font-semibold">{value}</strong>
          <p className="text-sm text-slate-700">{label}</p>
          <small className="text-xs text-slate-400">{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function CertificateRowMenu({
  request,
  notify,
}: {
  request: string;
  notify: (message: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => notify(`${request} review opened`)}>
          <Eye /> Review eligibility
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`${request} approved and credential previewed`)}
        >
          <CheckCircle2 /> Approve and issue
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`${request} upload panel opened`)}
        >
          <FileUp /> Upload certificate
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`${request} information request opened`)}
        >
          <Mail /> Request information
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => notify(`${request} rejection confirmation opened`)}
        >
          <X /> Reject request
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminAnnouncementsWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [audience, setAudience] = useState("All audiences");
  const rows = adminAnnouncements.filter(
    (announcement) =>
      (status === "All statuses" || announcement.status === status) &&
      (audience === "All audiences" || announcement.audience === audience) &&
      `${announcement.title} ${announcement.excerpt} ${announcement.author}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Member communication
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Announcements
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Create targeted updates and schedule messages across member
            channels.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => notify("Announcement templates opened")}
          >
            <Copy /> Templates
          </Button>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify("Announcement composer opened")}
          >
            <Plus /> New announcement
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AnnouncementSummary
          label="Published"
          value="48"
          note="6 this month"
          icon={Send}
        />
        <AnnouncementSummary
          label="Scheduled"
          value="3"
          note="Next: July 24"
          icon={Clock3}
          warning
        />
        <AnnouncementSummary
          label="Total reach"
          value="18.4k"
          note="Across all channels"
          icon={Users}
        />
        <AnnouncementSummary
          label="Open rate"
          value="64.8%"
          note="Email announcements"
          icon={Eye}
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_340px]">
        <Card>
          <CardHeader>
            <CardTitle>Quick announcement</CardTitle>
            <CardDescription>
              Draft a short in-app update for members
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Announcement title" />
            <Textarea
              className="min-h-28 resize-none"
              placeholder="Write your announcement message…"
            />
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div className="flex gap-2">
                <FilterMenu
                  label="All members"
                  options={[
                    "All members",
                    "Paid members",
                    "Free members",
                    "New members",
                  ]}
                  onSelect={() => notify("Composer audience updated")}
                />
                <FilterMenu
                  label="In-app"
                  options={["In-app", "Email", "In-app + Email"]}
                  onSelect={() => notify("Composer channel updated")}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => notify("Announcement saved as draft")}
                >
                  Save draft
                </Button>
                <Button onClick={() => notify("Announcement preview opened")}>
                  <Eye /> Preview
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-slate-900 text-white">
          <CardHeader>
            <CardTitle className="text-white">Communication health</CardTitle>
            <CardDescription className="text-slate-400">
              Last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-300">Delivered</span>
                <strong>98.7%</strong>
              </div>
              <Progress
                value={98.7}
                className="bg-white/10 [&>div]:bg-emerald-400"
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-300">Opened</span>
                <strong>64.8%</strong>
              </div>
              <Progress
                value={64.8}
                className="bg-white/10 [&>div]:bg-sky-400"
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-300">Clicked</span>
                <strong>22.4%</strong>
              </div>
              <Progress
                value={22.4}
                className="bg-white/10 [&>div]:bg-amber-400"
              />
            </div>
            <Separator className="bg-white/10" />
            <p className="text-xs leading-5 text-slate-400">
              Email and in-app announcements are measured separately in the
              production analytics view.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader className="gap-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Announcement history</CardTitle>
              <CardDescription>
                Published, scheduled, and draft member messages
              </CardDescription>
            </div>
            <Badge variant="outline">54 total</Badge>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search announcements or author"
              />
            </div>
            <FilterMenu
              label={audience}
              options={[
                "All audiences",
                "All members",
                "Paid members",
                "New members",
              ]}
              onSelect={setAudience}
            />
            <FilterMenu
              label={status}
              options={["All statuses", "Published", "Scheduled", "Draft"]}
              onSelect={setStatus}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {rows.map((announcement) => (
            <div
              key={announcement.title}
              className="flex flex-col gap-4 rounded-xl border p-4 transition-colors hover:bg-slate-50 lg:flex-row lg:items-center"
            >
              <span
                className={`grid size-11 shrink-0 place-items-center rounded-xl ${announcement.status === "Published" ? "bg-emerald-50 text-emerald-700" : announcement.status === "Scheduled" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}
              >
                {announcement.pinned ? (
                  <Pin className="size-5" />
                ) : announcement.status === "Scheduled" ? (
                  <Clock3 className="size-5" />
                ) : (
                  <Megaphone className="size-5" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold">
                    {announcement.title}
                  </h3>
                  {announcement.pinned && (
                    <Badge variant="secondary">Pinned</Badge>
                  )}
                </div>
                <p className="text-sm leading-6 text-slate-500">
                  {announcement.excerpt}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span>{announcement.author}</span>
                  <span>{announcement.date}</span>
                  <span>{announcement.channel}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:flex-col lg:items-end">
                <Badge
                  className={
                    announcement.status === "Published"
                      ? "bg-emerald-100 text-emerald-700"
                      : announcement.status === "Scheduled"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                  }
                >
                  {announcement.status}
                </Badge>
                <Badge variant="outline">
                  <Globe2 /> {announcement.audience}
                </Badge>
                {announcement.views !== "—" && (
                  <small className="text-xs text-slate-400">
                    {announcement.views} views
                  </small>
                )}
              </div>
              <AnnouncementRowMenu title={announcement.title} notify={notify} />
            </div>
          ))}
          {rows.length === 0 && (
            <div className="py-14 text-center">
              <Megaphone className="mx-auto mb-2 size-6 text-slate-400" />
              <p className="text-sm font-medium">No matching announcements</p>
              <p className="text-xs text-slate-500">
                Try another audience, status, or search.
              </p>
              <Button
                variant="link"
                size="sm"
                onClick={() => {
                  setQuery("");
                  setAudience("All audiences");
                  setStatus("All statuses");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

function AnnouncementSummary({
  label,
  value,
  note,
  icon: Icon,
  warning = false,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
  warning?: boolean;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-5">
        <span
          className={`grid size-11 place-items-center rounded-xl ${warning ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}
        >
          <Icon className="size-5" />
        </span>
        <div>
          <strong className="text-2xl font-semibold">{value}</strong>
          <p className="text-sm text-slate-700">{label}</p>
          <small className="text-xs text-slate-400">{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function AnnouncementRowMenu({
  title,
  notify,
}: {
  title: string;
  notify: (message: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => notify(`${title} preview opened`)}>
          <Eye /> Preview
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify(`${title} editor opened`)}>
          <Pencil /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`${title} duplicated as draft`)}
        >
          <Copy /> Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => notify(`${title} schedule editor opened`)}
        >
          <CalendarClock /> Reschedule
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onClick={() => notify(`${title} archive confirmation opened`)}
        >
          <Archive /> Archive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function AdminReportsWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  const [range, setRange] = useState("Last 30 days");
  const coursePerformance = [
    ["Project Management Foundations", "2,840", "78%", "4.9", "$12,460"],
    ["Data Analysis with Excel", "1,936", "64%", "4.8", "$9,820"],
    ["Workplace Health & Safety", "3,260", "91%", "4.9", "$6,140"],
    ["Effective Team Leadership", "1,458", "57%", "4.8", "$5,760"],
  ];
  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Analytics workspace
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Reports
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track growth, learning outcomes, engagement, and financial
            performance.
          </p>
        </div>
        <div className="flex gap-2">
          <FilterMenu
            label={range}
            options={[
              "Last 7 days",
              "Last 30 days",
              "Last 90 days",
              "This year",
            ]}
            onSelect={setRange}
          />
          <Button
            className="bg-emerald-600 hover:bg-emerald-700"
            onClick={() => notify(`${range} analytics export prepared`)}
          >
            <Download /> Export report
          </Button>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ReportSummary
          label="New members"
          value="1,284"
          change="+12.5%"
          note="vs previous period"
          icon={Users}
        />
        <ReportSummary
          label="Course enrollments"
          value="3,946"
          change="+9.8%"
          note="vs previous period"
          icon={BookOpen}
        />
        <ReportSummary
          label="Completion rate"
          value="72.4%"
          change="+4.1%"
          note="vs previous period"
          icon={Award}
        />
        <ReportSummary
          label="Net revenue"
          value="$27,776"
          change="+6.4%"
          note="after refunds"
          icon={TrendingUp}
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.45fr_.8fr]">
        <Card>
          <CardHeader className="flex-row items-start justify-between">
            <div>
              <CardTitle>Growth overview</CardTitle>
              <CardDescription>
                Members and course enrollments · {range}
              </CardDescription>
            </div>
            <div className="flex gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-slate-500">
                <i className="size-2 rounded-full bg-emerald-500" /> Members
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <i className="size-2 rounded-full bg-sky-400" /> Enrollments
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 border-b border-l border-slate-200">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[1, 2, 3, 4].map((line) => (
                  <span
                    key={line}
                    className="border-t border-dashed border-slate-100"
                  />
                ))}
              </div>
              <svg
                viewBox="0 0 700 230"
                className="relative h-full w-full"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,190 100,165 200,172 300,118 400,128 500,75 600,88 700,38"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                />
                <polyline
                  points="0,210 100,184 200,150 300,164 400,105 500,120 600,58 700,72"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div className="mt-3 flex justify-between text-xs text-slate-400">
              {["Week 1", "Week 2", "Week 3", "Week 4", "Today"].map(
                (label) => (
                  <span key={label}>{label}</span>
                ),
              )}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Members by region</CardTitle>
            <CardDescription>Top learner locations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              ["Africa", 34, "4,245"],
              ["Asia Pacific", 29, "3,621"],
              ["Europe", 21, "2,622"],
              ["Americas", 16, "1,998"],
            ].map(([region, percent, count]) => (
              <div key={region as string}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{region}</span>
                  <span className="text-slate-500">
                    {count} · {percent}%
                  </span>
                </div>
                <Progress
                  value={percent as number}
                  className="[&>div]:bg-emerald-500"
                />
              </div>
            ))}
            <Separator />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => notify("Geographic report opened")}
            >
              <Globe2 /> Full geography report
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Course performance</CardTitle>
              <CardDescription>
                Learning and revenue outcomes by course
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => notify("Course report opened")}
            >
              View all
            </Button>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pl-6">Course</TableHead>
                  <TableHead>Enrollments</TableHead>
                  <TableHead>Completion</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="pr-6 text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coursePerformance.map(
                  ([course, enrollments, completion, rating, revenue]) => (
                    <TableRow key={course}>
                      <TableCell className="pl-6 text-sm font-medium">
                        {course}
                      </TableCell>
                      <TableCell className="text-sm text-slate-600">
                        {enrollments}
                      </TableCell>
                      <TableCell>
                        <div className="flex min-w-24 items-center gap-2">
                          <Progress
                            value={Number(completion.replace("%", ""))}
                            className="h-1.5 [&>div]:bg-emerald-500"
                          />
                          <span className="text-xs text-slate-500">
                            {completion}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">★ {rating}</TableCell>
                      <TableCell className="pr-6 text-right text-sm font-medium">
                        {revenue}
                      </TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Learning outcomes</CardTitle>
            <CardDescription>Platform-wide engagement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <OutcomeRow
              label="Learning hours"
              value="18,420h"
              change="+14.2%"
            />
            <OutcomeRow
              label="Lessons completed"
              value="42,816"
              change="+11.7%"
            />
            <OutcomeRow
              label="Documents downloaded"
              value="12,604"
              change="+18.6%"
            />
            <OutcomeRow
              label="Certificates issued"
              value="126"
              change="+7.4%"
            />
            <Separator />
            <Button
              variant="outline"
              className="w-full"
              onClick={() => notify("Learning outcomes report opened")}
            >
              <BarChart3 /> Detailed outcomes
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function ReportSummary({
  label,
  value,
  change,
  note,
  icon: Icon,
}: {
  label: string;
  value: string;
  change: string;
  note: string;
  icon: typeof Users;
}) {
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="mb-4 flex items-start justify-between">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            <Icon className="size-5" />
          </span>
          <Badge className="bg-emerald-100 text-emerald-700">
            <ArrowUpRight /> {change}
          </Badge>
        </div>
        <strong className="text-2xl font-semibold">{value}</strong>
        <p className="mt-1 text-sm text-slate-700">{label}</p>
        <small className="text-xs text-slate-400">{note}</small>
      </CardContent>
    </Card>
  );
}

function OutcomeRow({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <strong className="text-lg font-semibold">{value}</strong>
      </div>
      <Badge variant="secondary" className="text-emerald-700">
        {change}
      </Badge>
    </div>
  );
}

function AdminSettingsWorkspace({
  notify,
}: {
  notify: (message: string) => void;
}) {
  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge variant="secondary" className="mb-2 text-emerald-700">
            Platform configuration
          </Badge>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Settings
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage platform identity, learning rules, communication, and
            security.
          </p>
        </div>
        <Button
          className="bg-emerald-600 hover:bg-emerald-700"
          onClick={() => notify("All settings saved — UI demo")}
        >
          <CheckCircle2 /> Save changes
        </Button>
      </div>
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="h-auto flex-wrap justify-start">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="membership">Membership</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <div className="grid gap-4 xl:grid-cols-[1fr_340px]">
            <Card>
              <CardHeader>
                <CardTitle>Platform details</CardTitle>
                <CardDescription>
                  Public identity and regional defaults
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <SettingField label="Platform name" defaultValue="CertiLearn" />
                <SettingField
                  label="Support email"
                  defaultValue="support@certilearn.com"
                />
                <SettingField label="Default language" defaultValue="English" />
                <SettingField label="Default time zone" defaultValue="UTC" />
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Platform description
                  </label>
                  <Textarea defaultValue="Global training and certification platform for professional learners." />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Brand identity</CardTitle>
                <CardDescription>Logo and interface appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="grid size-16 place-items-center rounded-2xl bg-emerald-600 text-white">
                    <GraduationCap className="size-8" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">Primary logo</p>
                    <p className="text-xs text-slate-500">
                      SVG or PNG · 2 MB max
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => notify("Logo picker opened")}
                    >
                      <FileUp /> Replace
                    </Button>
                  </div>
                </div>
                <Separator />
                <SettingField label="Brand color" defaultValue="#059669" />
                <SettingToggle
                  title="Show CertiLearn wordmark"
                  description="Display the name beside the logo"
                  defaultChecked
                />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Regional formats</CardTitle>
              <CardDescription>
                Defaults used for new accounts and financial summaries
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              <SettingField label="Currency" defaultValue="USD — US Dollar" />
              <SettingField label="Date format" defaultValue="MMM D, YYYY" />
              <SettingField label="First day of week" defaultValue="Monday" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="membership" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Membership rules</CardTitle>
              <CardDescription>
                Control upgrades, renewals, grace periods, and premium access
              </CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              <SettingToggle
                title="Allow self-service upgrades"
                description="Free members can upgrade from their dashboard"
                defaultChecked
              />
              <SettingToggle
                title="Automatic subscription renewal"
                description="Paid plans renew automatically when a payment method is available"
                defaultChecked
              />
              <SettingToggle
                title="Allow member cancellation"
                description="Members may disable renewal without contacting support"
                defaultChecked
              />
              <SettingToggle
                title="Premium access during grace period"
                description="Keep premium content available while a failed renewal is retried"
                defaultChecked
              />
            </CardContent>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Renewal policy</CardTitle>
                <CardDescription>
                  Timing for lifecycle communication
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <SettingField
                  label="Reminder before renewal"
                  defaultValue="7 days"
                />
                <SettingField
                  label="Past-due grace period"
                  defaultValue="5 days"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Certificate eligibility</CardTitle>
                <CardDescription>
                  Default rules for certificate requests
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <SettingField label="Minimum progress" defaultValue="100%" />
                <SettingField label="Minimum assessment" defaultValue="80%" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automated member notifications</CardTitle>
              <CardDescription>
                Choose which lifecycle events produce messages
              </CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              <SettingToggle
                title="Welcome email"
                description="Send onboarding instructions after email verification"
                defaultChecked
              />
              <SettingToggle
                title="Course completion"
                description="Celebrate completion and explain certificate eligibility"
                defaultChecked
              />
              <SettingToggle
                title="Renewal reminders"
                description="Notify members before monthly or yearly renewal"
                defaultChecked
              />
              <SettingToggle
                title="Failed payment alerts"
                description="Notify members when recurring payment attempts fail"
                defaultChecked
              />
              <SettingToggle
                title="Certificate status updates"
                description="Send updates when requests move through review"
                defaultChecked
              />
              <SettingToggle
                title="Weekly learning summary"
                description="Share progress and recommended next lessons"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Admin alerts</CardTitle>
              <CardDescription>
                Operational notifications for the administration team
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <SettingField
                label="Alert recipients"
                defaultValue="admin@certilearn.com"
              />
              <SettingField label="Daily digest time" defaultValue="08:00" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <div className="grid gap-4 xl:grid-cols-[1fr_340px]">
            <Card>
              <CardHeader>
                <CardTitle>Access security</CardTitle>
                <CardDescription>
                  Authentication and administrative session policies
                </CardDescription>
              </CardHeader>
              <CardContent className="divide-y">
                <SettingToggle
                  title="Require email verification"
                  description="New members must verify before accessing their account"
                  defaultChecked
                />
                <SettingToggle
                  title="Admin two-factor authentication"
                  description="Require an additional verification step for administrators"
                  defaultChecked
                />
                <SettingToggle
                  title="Strong password policy"
                  description="Require at least 10 characters and mixed character types"
                  defaultChecked
                />
                <SettingToggle
                  title="Login anomaly alerts"
                  description="Notify admins about unusual sign-in activity"
                  defaultChecked
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Session policy</CardTitle>
                <CardDescription>Automatic account protection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <SettingField
                  label="Admin session timeout"
                  defaultValue="30 minutes"
                />
                <SettingField
                  label="Member session lifetime"
                  defaultValue="14 days"
                />
                <SettingField
                  label="Failed login limit"
                  defaultValue="5 attempts"
                />
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => notify("All other admin sessions revoked")}
                >
                  <ShieldCheck /> Revoke other sessions
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>System status</CardTitle>
              <CardDescription>
                UI-only preview of platform services
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Authentication",
                "Email delivery",
                "File storage",
                "Certificate verification",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <div>
                    <p className="text-sm font-medium">{service}</p>
                    <p className="text-xs text-emerald-700">Operational</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

function SettingField({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <Input defaultValue={defaultValue} />
    </div>
  );
}

function SettingToggle({
  title,
  description,
  defaultChecked = false,
}: {
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} aria-label={title} />
    </div>
  );
}

function MemberSummary({
  label,
  value,
  note,
  icon: Icon,
  warning = false,
}: {
  label: string;
  value: string;
  note: string;
  icon: typeof Users;
  warning?: boolean;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-5">
        <span
          className={`grid size-11 place-items-center rounded-xl ${warning ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}
        >
          <Icon className="size-5" />
        </span>
        <div>
          <strong className="text-2xl font-semibold">{value}</strong>
          <p className="text-sm text-slate-700">{label}</p>
          <small className="text-xs text-slate-400">{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function AdminModulePreview({
  active,
  notify,
}: {
  active: string;
  notify: (message: string) => void;
}) {
  return (
    <div className="grid min-h-[65vh] place-items-center">
      <Card className="w-full max-w-xl text-center">
        <CardContent className="space-y-4 py-12">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
            <Settings className="size-6" />
          </span>
          <div>
            <Badge variant="secondary">Next module</Badge>
            <h1 className="mt-3 text-2xl font-semibold">{active}</h1>
            <p className="mt-2 text-sm text-slate-500">
              The navigation structure is ready. This module&apos;s detailed UI
              will be added in the next design slice.
            </p>
          </div>
          <Button
            onClick={() => notify(`${active} quick action opened — UI demo`)}
          >
            <Plus /> Create {active.toLowerCase()} item
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function RowMenu({ notify }: { notify: (message: string) => void }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => notify("Member profile opened")}>
          View profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify("Member status editor opened")}>
          Change status
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => notify("Message composer opened")}>
          Send message
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
