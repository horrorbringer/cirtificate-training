"use client";

import {
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  CirclePlay,
  Clock3,
  CreditCard,
  Crown,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Globe2,
  GraduationCap,
  Hourglass,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plus,
  ReceiptText,
  RotateCcw,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trash2,
  Users,
  X,
  Zap,
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

type MemberSection =
  | "overview"
  | "courses"
  | "continue"
  | "resources"
  | "certificates"
  | "profile"
  | "membership"
  | "billing"
  | "notifications";

export function LearnerDashboard({
  onBrowse,
  onSignOut,
  notify,
  message,
}: {
  onBrowse: () => void;
  onSignOut: () => void;
  notify: (message: string) => void;
  message: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState<MemberSection>("overview");
  const [notificationsRead, setNotificationsRead] = useState(false);
  return (
    <div className="member-workspace">
      <header className="member-header">
        <Button
          variant="ghost"
          className="brand h-auto p-0 hover:bg-transparent"
          onClick={onBrowse}
        >
          <span className="brand-mark">
            <GraduationCap />
          </span>
          <span>
            Certi<span>Learn</span>
          </span>
        </Button>
        <MemberSearch onSelect={setSection} notify={notify} />
        <div className="member-actions">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="icon-btn"
                aria-label="Open notifications"
              >
                <Bell />
                {!notificationsRead && <i />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[360px] max-w-[calc(100vw-24px)] p-0"
            >
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <DropdownMenuLabel className="p-0">
                    Notifications
                  </DropdownMenuLabel>
                  <p className="text-xs text-slate-500">
                    {notificationsRead
                      ? "You’re all caught up"
                      : "3 unread updates"}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setNotificationsRead(true);
                    notify("All notifications marked as read");
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
                    "Certificate approved",
                    "Your Project Management Foundations certificate is ready.",
                    "8 min ago",
                    "certificates",
                  ],
                  [
                    CirclePlay,
                    "Continue where you left off",
                    "Visualizing your data · 14 minutes remaining.",
                    "2 hours ago",
                    "continue",
                  ],
                  [
                    CreditCard,
                    "Membership renewal scheduled",
                    "Your Yearly Premium plan renews on February 18, 2027.",
                    "Yesterday",
                    "billing",
                  ],
                ].map(([Icon, title, description, time, target]) => {
                  const NoticeIcon = Icon as typeof Award;
                  return (
                    <DropdownMenuItem
                      key={title as string}
                      className="items-start gap-3 p-3"
                      onClick={() => {
                        setNotificationsRead(true);
                        setSection(
                          target as "certificates" | "continue" | "billing",
                        );
                      }}
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                        <NoticeIcon className="size-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <strong className="text-sm font-medium">
                            {title as string}
                          </strong>
                          {!notificationsRead && (
                            <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
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
                onClick={() => setSection("notifications")}
              >
                View all notifications <ArrowRight />
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="member-profile h-auto">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-emerald-100 text-[10px] font-bold text-emerald-700">
                    AM
                  </AvatarFallback>
                </Avatar>
                <div>
                  <strong>Amina Mensah</strong>
                  <small>Premium member</small>
                </div>
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setSection("profile");
                }}
              >
                Profile settings
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSection("membership");
                }}
              >
                Membership
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onSignOut}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="member-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      <div className="dashboard-shell member-shell">
        <aside
          className={
            menuOpen
              ? "dashboard-sidebar member-sidebar open"
              : "dashboard-sidebar member-sidebar"
          }
        >
          <div>
            <small>MY LEARNING</small>
            <Button
              variant="ghost"
              className={section === "overview" ? "active" : ""}
              onClick={() => {
                setSection("overview");
                setMenuOpen(false);
              }}
            >
              <LayoutDashboard /> Overview
            </Button>
            <Button
              variant="ghost"
              className={section === "courses" ? "active" : ""}
              onClick={() => {
                setSection("courses");
                setMenuOpen(false);
              }}
            >
              <BookOpen /> My courses{" "}
              <Badge variant="secondary" className="ml-auto">
                4
              </Badge>
            </Button>
            <Button
              variant="ghost"
              className={section === "continue" ? "active" : ""}
              onClick={() => {
                setSection("continue");
                setMenuOpen(false);
              }}
            >
              <CirclePlay /> Continue learning
            </Button>
            <Button
              variant="ghost"
              className={section === "resources" ? "active" : ""}
              onClick={() => {
                setSection("resources");
                setMenuOpen(false);
              }}
            >
              <FileText /> Resources
            </Button>
            <Button
              variant="ghost"
              className={section === "certificates" ? "active" : ""}
              onClick={() => {
                setSection("certificates");
                setMenuOpen(false);
              }}
            >
              <Award /> Certificates{" "}
              <Badge variant="secondary" className="ml-auto">
                2
              </Badge>
            </Button>
          </div>
          <div>
            <small>ACCOUNT</small>
            <Button
              variant="ghost"
              className={section === "profile" ? "active" : ""}
              onClick={() => {
                setSection("profile");
                setMenuOpen(false);
              }}
            >
              <Users /> Profile
            </Button>
            <Button
              variant="ghost"
              className={section === "membership" ? "active" : ""}
              onClick={() => {
                setSection("membership");
                setMenuOpen(false);
              }}
            >
              <ShieldCheck /> Membership
            </Button>
            <Button
              variant="ghost"
              className={section === "billing" ? "active" : ""}
              onClick={() => {
                setSection("billing");
                setMenuOpen(false);
              }}
            >
              <CreditCard /> Billing & payments
            </Button>
            <Button variant="ghost" onClick={onSignOut}>
              <ArrowRight /> Sign out
            </Button>
          </div>
          <Card className="upgrade-card py-0">
            <CardContent className="p-4">
              <Sparkles />
              <strong>Premium active</strong>
              <span>Renews Feb 18, 2027</span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSection("membership");
                  setMenuOpen(false);
                }}
              >
                Manage plan
              </Button>
            </CardContent>
          </Card>
        </aside>
        <section className="dashboard-content">
          {section === "overview" ? (
            <>
              <div className="dash-title">
                <div>
                  <span>Sunday, July 19</span>
                  <h1>Welcome back, Amina 👋</h1>
                  <p>Keep going — you&apos;re making excellent progress.</p>
                </div>
                <Button className="primary-btn" onClick={onBrowse}>
                  Browse courses <ArrowRight />
                </Button>
              </div>
              <div className="stats-row">
                <Stat
                  icon={<Clock3 />}
                  value="18.5h"
                  label="Learning time"
                  note="+2.5h this week"
                />
                <Stat
                  icon={<BookOpen />}
                  value="4"
                  label="Courses enrolled"
                  note="2 in progress"
                />
                <Stat
                  icon={<Award />}
                  value="2"
                  label="Certificates"
                  note="1 newly earned"
                />
                <Stat
                  icon={<Download />}
                  value="14"
                  label="Resources saved"
                  note="3 this month"
                />
              </div>
              <div className="dash-grid">
                <Card className="continue-panel py-0 shadow-none">
                  <CardContent className="p-5">
                    <div className="panel-head">
                      <div>
                        <h2>Continue learning</h2>
                        <p>Pick up right where you left off</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View all <ArrowRight />
                      </Button>
                    </div>
                    <Card className="continue-card grid py-0 shadow-none">
                      <div className="continue-art violet">
                        <span>DA</span>
                        <Button variant="secondary" size="icon">
                          <CirclePlay />
                        </Button>
                      </div>
                      <CardContent className="continue-info">
                        <Badge variant="secondary">Data & Analytics</Badge>
                        <h3>Data Analysis with Excel</h3>
                        <p>Module 4 of 8 · Visualizing your data</p>
                        <Progress value={62} className="long-progress" />
                        <small>
                          62% complete <b>3h 10m left</b>
                        </small>
                        <Button
                          size="sm"
                          onClick={() => notify("Lesson player opened")}
                        >
                          Continue lesson <CirclePlay />
                        </Button>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
                <Card className="weekly-panel py-0 text-center shadow-none">
                  <CardContent className="p-5">
                    <div className="panel-head">
                      <div>
                        <h2>Weekly goal</h2>
                        <p>July 13–19</p>
                      </div>
                      <Button variant="ghost" size="icon-sm">
                        •••
                      </Button>
                    </div>
                    <div className="goal-ring">
                      <div>
                        <strong>3.5</strong>
                        <small>of 5 hours</small>
                      </div>
                    </div>
                    <p>
                      You&apos;re <strong>70%</strong> there. Just 1.5 hours to
                      go!
                    </p>
                    <div className="week-dots">
                      {[1, 1, 1, 1, 0, 0, 0].map((on, i) => (
                        <Badge
                          variant={on ? "default" : "secondary"}
                          key={i}
                          className={on ? "done" : ""}
                        >
                          {["M", "T", "W", "T", "F", "S", "S"][i]}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="cert-panel py-0 text-white">
                  <CardContent className="flex w-full items-center gap-3 p-4">
                    <div className="cert-icon">
                      <Award />
                    </div>
                    <div>
                      <Badge>New certificate</Badge>
                      <h3>Project Management Foundations</h3>
                      <p>Issued July 12, 2026 · ID CL-2026-1842</p>
                    </div>
                    <Button
                      variant="outline"
                      className="ml-auto bg-white/10 text-white"
                      onClick={() => notify("Certificate download ready")}
                    >
                      <span>Download</span>
                      <Download />
                    </Button>
                  </CardContent>
                </Card>
                <Card className="activity-panel py-0 shadow-none">
                  <CardContent className="p-5">
                    <div className="panel-head">
                      <div>
                        <h2>Recent activity</h2>
                        <p>Your latest learning moments</p>
                      </div>
                    </div>
                    {[
                      [
                        "Completed a lesson",
                        "Creating effective project timelines",
                        "2 hours ago",
                      ],
                      [
                        "Downloaded a resource",
                        "Risk assessment template.pdf",
                        "Yesterday",
                      ],
                      [
                        "Earned a certificate",
                        "Project Management Foundations",
                        "July 12",
                      ],
                    ].map(([a, b, c], i) => (
                      <div className="activity" key={b}>
                        <span>
                          {i === 2 ? (
                            <Award />
                          ) : i === 1 ? (
                            <Download />
                          ) : (
                            <Check />
                          )}
                        </span>
                        <div>
                          <strong>{a}</strong>
                          <p>{b}</p>
                        </div>
                        <small>{c}</small>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </>
          ) : section === "courses" ? (
            <MyCourses onBrowse={onBrowse} notify={notify} />
          ) : section === "continue" ? (
            <ContinueLearning notify={notify} />
          ) : section === "resources" ? (
            <MyResources notify={notify} />
          ) : section === "certificates" ? (
            <MyCertificates notify={notify} />
          ) : section === "profile" ? (
            <MyProfile notify={notify} />
          ) : section === "membership" ? (
            <MyMembership notify={notify} />
          ) : section === "billing" ? (
            <MyBilling notify={notify} />
          ) : (
            <NotificationHistory onSelect={setSection} notify={notify} />
          )}
        </section>
      </div>
      {message && (
        <div className="toast">
          <Check />
          {message}
        </div>
      )}
    </div>
  );
}

const notificationRecords = [
  {
    id: 1,
    title: "Certificate approved",
    description:
      "Your Project Management Foundations credential is ready to download.",
    category: "Certificates",
    time: "8 minutes ago",
    section: "certificates" as MemberSection,
    icon: Award,
    unread: true,
  },
  {
    id: 2,
    title: "Continue where you left off",
    description: "You have 14 minutes remaining in Visualizing your data.",
    category: "Learning",
    time: "2 hours ago",
    section: "continue" as MemberSection,
    icon: CirclePlay,
    unread: true,
  },
  {
    id: 3,
    title: "Membership renewal scheduled",
    description: "Your Yearly Premium membership renews on February 18, 2027.",
    category: "Billing",
    time: "Yesterday",
    section: "billing" as MemberSection,
    icon: CreditCard,
    unread: true,
  },
  {
    id: 4,
    title: "New resource available",
    description:
      "The Excel formulas quick-reference guide was added to your course.",
    category: "Resources",
    time: "July 18",
    section: "resources" as MemberSection,
    icon: FileText,
    unread: false,
  },
  {
    id: 5,
    title: "Weekly learning goal reached",
    description:
      "You completed 5.2 hours of learning this week. Excellent work.",
    category: "Learning",
    time: "July 17",
    section: "overview" as MemberSection,
    icon: Award,
    unread: false,
  },
  {
    id: 6,
    title: "Payment receipt available",
    description: "Your Yearly Premium receipt is ready in Billing & payments.",
    category: "Billing",
    time: "February 18",
    section: "billing" as MemberSection,
    icon: ReceiptText,
    unread: false,
  },
];

function NotificationHistory({
  onSelect,
  notify,
}: {
  onSelect: (section: MemberSection) => void;
  notify: (message: string) => void;
}) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [readIds, setReadIds] = useState<number[]>(
    notificationRecords.filter((item) => !item.unread).map((item) => item.id),
  );
  const rows = notificationRecords.filter(
    (item) =>
      (filter === "All" ||
        item.category === filter ||
        (filter === "Unread" && !readIds.includes(item.id))) &&
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <div className="space-y-6">
      <div className="member-section-title">
        <div>
          <span>ACTIVITY CENTER</span>
          <h1>Notifications</h1>
          <p>Review learning, certificate, membership, and billing updates.</p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setReadIds(notificationRecords.map((item) => item.id));
            notify("All notifications marked as read");
          }}
        >
          <Check /> Mark all read
        </Button>
      </div>
      <Card className="shadow-none">
        <CardHeader className="gap-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Notification history</CardTitle>
              <CardDescription>
                {notificationRecords.length - readIds.length} unread updates
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="pl-9"
                placeholder="Search notifications"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "Unread",
              "Learning",
              "Certificates",
              "Resources",
              "Billing",
            ].map((item) => (
              <Button
                key={item}
                variant={filter === item ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(item)}
              >
                {item}
                {item === "Unread" && (
                  <Badge variant="secondary">
                    {notificationRecords.length - readIds.length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="divide-y p-0">
          {rows.map((item) => {
            const NoticeIcon = item.icon;
            const unread = !readIds.includes(item.id);
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`h-auto w-full justify-start gap-4 rounded-none p-5 text-left ${unread ? "bg-emerald-50/30" : ""}`}
                onClick={() => {
                  setReadIds((current) => [...new Set([...current, item.id])]);
                  onSelect(item.section);
                  notify(`${item.title} opened`);
                }}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <NoticeIcon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <strong className="text-sm font-medium">
                      {item.title}
                    </strong>
                    {unread && (
                      <i className="size-2 rounded-full bg-emerald-500" />
                    )}
                  </span>
                  <span className="mt-1 block whitespace-normal text-sm leading-6 text-slate-500">
                    {item.description}
                  </span>
                  <span className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <Badge variant="secondary">{item.category}</Badge>
                    {item.time}
                  </span>
                </span>
                <ArrowRight className="mt-2 size-4 shrink-0 text-slate-400" />
              </Button>
            );
          })}
          {rows.length === 0 && (
            <div className="py-16 text-center">
              <Bell className="mx-auto size-6 text-slate-400" />
              <p className="mt-2 text-sm font-medium">No notifications found</p>
              <p className="mt-1 text-xs text-slate-500">
                Try another filter or search phrase.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function MemberSearch({
  onSelect,
  notify,
}: {
  onSelect: (section: MemberSection) => void;
  notify: (message: string) => void;
}) {
  const [query, setQuery] = useState("");
  const items: {
    title: string;
    description: string;
    type: string;
    section: MemberSection;
    icon: typeof BookOpen;
  }[] = [
    {
      title: "Data Analysis with Excel",
      description: "Course · 62% complete",
      type: "Course",
      section: "courses",
      icon: BookOpen,
    },
    {
      title: "Visualizing your data",
      description: "Current lesson · Module 4",
      type: "Lesson",
      section: "continue",
      icon: CirclePlay,
    },
    {
      title: "Project charter template",
      description: "PDF resource · Free",
      type: "Resource",
      section: "resources",
      icon: FileText,
    },
    {
      title: "Excel formulas quick reference",
      description: "PDF resource · Premium",
      type: "Resource",
      section: "resources",
      icon: FileSpreadsheet,
    },
    {
      title: "Project Management Foundations",
      description: "Verified certificate",
      type: "Certificate",
      section: "certificates",
      icon: Award,
    },
    {
      title: "Billing & payment receipts",
      description: "Account settings",
      type: "Account",
      section: "billing",
      icon: CreditCard,
    },
    {
      title: "Membership plan",
      description: "Yearly Premium · Active",
      type: "Account",
      section: "membership",
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
    <div className="member-search relative">
      <Search />
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search courses, lessons, resources…"
      />
      {query && (
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2"
          onClick={() => setQuery("")}
          aria-label="Clear search"
        >
          <X />
        </Button>
      )}
      {query && (
        <Card className="absolute left-0 top-[calc(100%+10px)] z-50 w-[430px] max-w-[calc(100vw-32px)] gap-0 overflow-hidden py-0 shadow-xl">
          <div className="border-b px-4 py-3">
            <p className="text-xs text-slate-500">
              {results.length} result{results.length === 1 ? "" : "s"} for{" "}
              <strong className="text-slate-700">“{query}”</strong>
            </p>
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
                    notify(`${result.title} opened`);
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
                  No learning content found
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Try a course, lesson, file, or certificate name.
                </p>
              </div>
            )}
          </div>
          <div className="border-t px-4 py-2 text-xs text-slate-400">
            Press a result to open its dashboard section
          </div>
        </Card>
      )}
    </div>
  );
}

const learningLessons = [
  {
    title: "Organizing data for analysis",
    meta: "Video · 14 min",
    state: "done",
  },
  {
    title: "Creating effective formulas",
    meta: "Video · 18 min",
    state: "done",
  },
  { title: "Visualizing your data", meta: "Video · 22 min", state: "current" },
  {
    title: "Building an interactive dashboard",
    meta: "Video · 26 min",
    state: "next",
  },
  {
    title: "Module knowledge check",
    meta: "Assessment · 10 questions",
    state: "locked",
  },
] as const;

function ContinueLearning({ notify }: { notify: (message: string) => void }) {
  const [activeLesson, setActiveLesson] = useState("Visualizing your data");
  const [notes, setNotes] = useState(
    "Remember to use consistent colors and labels when comparing multiple data series.",
  );
  return (
    <div className="space-y-6">
      <div className="member-section-title">
        <div>
          <span>ACTIVE COURSE</span>
          <h1>Continue learning</h1>
          <p>Data Analysis with Excel · Module 4 of 8</p>
        </div>
        <Badge className="bg-emerald-100 text-emerald-700">62% complete</Badge>
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <Card className="overflow-hidden border-0 bg-slate-950 py-0 text-white">
            <div className="relative grid aspect-video place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_30%,#334155,#0f172a_62%)]">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:42px_42px]" />
              <Button
                size="icon"
                className="relative size-16 rounded-full bg-emerald-500 hover:bg-emerald-400"
                onClick={() => notify(`${activeLesson} playback started`)}
              >
                <CirclePlay className="size-8" />
              </Button>
              <Badge className="absolute left-4 top-4 bg-black/40 text-white">
                Module 4 · Lesson 3
              </Badge>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-14">
                <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-[38%] rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="text-white hover:bg-white/10 hover:text-white"
                  >
                    <CirclePlay />
                  </Button>
                  <span>08:24 / 22:10</span>
                  <span className="ml-auto">HD · CC</span>
                </div>
              </div>
            </div>
            <CardContent className="p-5">
              <Badge variant="secondary">Data & Analytics</Badge>
              <h2 className="mt-3 text-xl font-semibold text-white">
                {activeLesson}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Learn how to select the right chart, format data clearly, and
                communicate patterns through effective Excel visualizations.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="flex-row items-start justify-between">
              <div>
                <CardTitle>Lesson notes</CardTitle>
                <CardDescription>
                  Private notes saved with this lesson
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => notify("Lesson notes saved")}
              >
                <Save /> Save notes
              </Button>
            </CardHeader>
            <CardContent>
              <Textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="min-h-32"
                placeholder="Write notes while you learn…"
              />
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium">
                  Ready for the next lesson?
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Mark this lesson complete to unlock Building an interactive
                  dashboard.
                </p>
              </div>
              <Button
                onClick={() =>
                  notify("Lesson marked complete — next lesson unlocked")
                }
              >
                <Check /> Mark complete and continue
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-5">
          <Card className="shadow-none">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Course progress</CardTitle>
                <strong className="text-sm">62%</strong>
              </div>
              <Progress value={62} className="mt-2 [&>div]:bg-emerald-500" />
              <CardDescription>15 of 24 lessons completed</CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Module 4 · Visualizing data</CardTitle>
              <CardDescription>3 of 5 activities complete</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {learningLessons.map((lesson, index) => (
                <Button
                  key={lesson.title}
                  variant="ghost"
                  disabled={lesson.state === "locked"}
                  onClick={() => {
                    setActiveLesson(lesson.title);
                    notify(`${lesson.title} selected`);
                  }}
                  className={`h-auto w-full justify-start gap-3 rounded-lg p-3 text-left ${activeLesson === lesson.title ? "bg-emerald-50 text-emerald-800" : ""}`}
                >
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full ${lesson.state === "done" ? "bg-emerald-100 text-emerald-700" : lesson.state === "locked" ? "bg-slate-100 text-slate-400" : "bg-sky-50 text-sky-700"}`}
                  >
                    {lesson.state === "done" ? (
                      <Check className="size-4" />
                    ) : lesson.state === "locked" ? (
                      <LockKeyhole className="size-4" />
                    ) : (
                      <CirclePlay className="size-4" />
                    )}
                  </span>
                  <span className="min-w-0">
                    <strong className="block whitespace-normal text-sm font-medium">
                      {index + 1}. {lesson.title}
                    </strong>
                    <small className="mt-1 block text-xs text-slate-500">
                      {lesson.meta}
                    </small>
                  </span>
                </Button>
              ))}
            </CardContent>
          </Card>
          <Card className="border-emerald-100 bg-emerald-50/50 shadow-none">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Sparkles className="size-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="text-sm font-medium text-emerald-900">
                    Learning tip
                  </p>
                  <p className="mt-1 text-xs leading-5 text-emerald-700">
                    Pause after each chart example and recreate it using your
                    own dataset.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function MyProfile({ notify }: { notify: (message: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="member-section-title">
        <div>
          <span>ACCOUNT SETTINGS</span>
          <h1>My profile</h1>
          <p>Keep your personal details and learning preferences up to date.</p>
        </div>
        <Button
          className="primary-btn"
          onClick={() => notify("Profile changes saved — UI demo")}
        >
          <Save /> Save changes
        </Button>
      </div>
      <div className="grid gap-5 xl:grid-cols-[280px_1fr]">
        <Card className="h-fit shadow-none">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <div className="relative">
              <Avatar className="size-24">
                <AvatarFallback className="bg-emerald-100 text-2xl text-emerald-700">
                  AM
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-1 -right-1 rounded-full"
                onClick={() => notify("Profile photo picker opened")}
              >
                <Camera />
              </Button>
            </div>
            <h2 className="mt-4 text-lg font-semibold">Amina Mensah</h2>
            <p className="text-sm text-slate-500">amina@example.com</p>
            <Badge className="mt-3 bg-emerald-100 text-emerald-700">
              <ShieldCheck /> Premium member
            </Badge>
            <Separator className="my-5" />
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-50 p-3">
                <strong className="text-lg">4</strong>
                <p className="text-xs text-slate-500">Courses</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <strong className="text-lg">2</strong>
                <p className="text-xs text-slate-500">Certificates</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-5 w-full"
              onClick={() => notify("Public learner profile opened")}
            >
              <ExternalLink /> View public profile
            </Button>
          </CardContent>
        </Card>
        <div className="space-y-5">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Personal information</CardTitle>
              <CardDescription>
                Details used on your account and certificates
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <ProfileField
                label="Full name"
                icon={<Users />}
                defaultValue="Amina Mensah"
              />
              <ProfileField
                label="Email address"
                icon={<Mail />}
                defaultValue="amina@example.com"
              />
              <ProfileField
                label="Phone number"
                icon={<Phone />}
                defaultValue="+233 24 555 0184"
              />
              <ProfileField
                label="Country"
                icon={<MapPin />}
                defaultValue="Ghana"
              />
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium">
                  Professional bio
                </label>
                <Textarea defaultValue="Project coordinator focused on building practical leadership and data-analysis skills." />
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Learning preferences</CardTitle>
              <CardDescription>
                Regional and content preferences for your experience
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <ProfileField
                label="Preferred language"
                icon={<Globe2 />}
                defaultValue="English"
              />
              <ProfileField
                label="Time zone"
                icon={<Clock3 />}
                defaultValue="Africa/Accra (GMT)"
              />
              <ProfileField
                label="Learning goal"
                icon={<Award />}
                defaultValue="Career development"
              />
              <ProfileField
                label="Weekly target"
                icon={<Clock3 />}
                defaultValue="5 hours per week"
              />
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Communication preferences</CardTitle>
              <CardDescription>
                Choose which learning updates you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              <ProfileToggle
                title="Course progress reminders"
                description="Helpful reminders when a course has been inactive"
                defaultChecked
              />
              <ProfileToggle
                title="Certificate updates"
                description="Status changes and credential availability"
                defaultChecked
              />
              <ProfileToggle
                title="New course recommendations"
                description="Personalized suggestions based on your learning history"
                defaultChecked
              />
              <ProfileToggle
                title="Product announcements"
                description="Platform news, features, and membership offers"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ProfileField({
  label,
  icon,
  defaultValue,
}: {
  label: string;
  icon: React.ReactNode;
  defaultValue: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 z-10 flex size-4 -translate-y-1/2 text-slate-400 [&>svg]:size-4">
          {icon}
        </span>
        <Input className="pl-9" defaultValue={defaultValue} />
      </div>
    </div>
  );
}

function ProfileToggle({
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
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>
      <Switch defaultChecked={defaultChecked} aria-label={title} />
    </div>
  );
}

function MyMembership({ notify }: { notify: (message: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="member-section-title">
        <div>
          <span>PLAN & ACCESS</span>
          <h1>Membership</h1>
          <p>
            Manage your learning access, renewal preferences, and plan benefits.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => notify("Membership support conversation opened")}
        >
          <Mail /> Contact support
        </Button>
      </div>
      <Card className="overflow-hidden border-0 bg-slate-900 py-0 text-white">
        <CardContent className="grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-emerald-500 text-white">
              <Crown className="size-7" />
            </span>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-semibold text-white">
                  Yearly Premium
                </h2>
                <Badge className="bg-emerald-400/20 text-emerald-200">
                  Active
                </Badge>
              </div>
              <p className="text-sm text-slate-300">
                Unlimited premium courses, resources, and certificate requests.
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" /> Renews February 18, 2027
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5" /> Auto-renew on
                </span>
              </div>
            </div>
          </div>
          <div className="lg:text-right">
            <strong className="text-3xl font-semibold text-white">$149</strong>
            <span className="text-sm text-slate-400"> / year</span>
            <div className="mt-3 flex gap-2">
              <Button
                variant="secondary"
                onClick={() => notify("Plan change options opened")}
              >
                Change plan
              </Button>
              <Button
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => notify("Renewal settings opened")}
              >
                Renewal settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Your premium benefits</CardTitle>
            <CardDescription>
              Everything currently included with your plan
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {[
              [
                BookOpen,
                "All premium courses",
                "Full access to the complete training catalog",
              ],
              [
                Download,
                "Premium downloads",
                "Templates, guides, worksheets, and checklists",
              ],
              [
                Award,
                "Certificate requests",
                "Request verified credentials after completion",
              ],
              [Zap, "Priority review", "Faster certificate eligibility review"],
              [
                Globe2,
                "Global learning access",
                "Learn from any supported region or time zone",
              ],
              [
                ShieldCheck,
                "Secure credential history",
                "Download and verify issued certificates",
              ],
            ].map(([Icon, title, description]) => {
              const BenefitIcon = Icon as typeof BookOpen;
              return (
                <div
                  key={title as string}
                  className="flex gap-3 rounded-xl border p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                    <BenefitIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{title as string}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {description as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card className="h-fit shadow-none">
          <CardHeader>
            <CardTitle>Current usage</CardTitle>
            <CardDescription>This membership year</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <MembershipUsage
              label="Premium courses"
              value="4 accessed"
              progress={40}
            />
            <MembershipUsage
              label="Resources downloaded"
              value="14 files"
              progress={58}
            />
            <MembershipUsage
              label="Certificates issued"
              value="2 credentials"
              progress={50}
            />
            <Separator />
            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="text-sm font-medium text-emerald-900">
                No usage limits
              </p>
              <p className="mt-1 text-xs leading-5 text-emerald-700">
                Your yearly plan includes unlimited course access and downloads.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Compare membership options</CardTitle>
          <CardDescription>
            Choose the access period that works best for you
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <MembershipPlan
            name="Free"
            price="$0"
            period="forever"
            description="Explore selected public learning content."
            features={[
              "Free courses",
              "Free documents",
              "Basic progress tracking",
            ]}
            action="Current fallback"
            onAction={() => notify("Free plan details opened")}
          />
          <MembershipPlan
            name="Monthly"
            price="$19"
            period="month"
            description="Flexible premium access billed monthly."
            features={[
              "All premium courses",
              "Premium downloads",
              "Certificate requests",
            ]}
            action="Switch to monthly"
            onAction={() => notify("Monthly plan switch confirmation opened")}
          />
          <MembershipPlan
            name="Yearly"
            price="$149"
            period="year"
            description="Best value for continuous professional learning."
            features={[
              "Everything in Monthly",
              "Two months equivalent saved",
              "Priority certificate review",
            ]}
            action="Current plan"
            current
            onAction={() => notify("Yearly plan is already active")}
          />
        </CardContent>
      </Card>
      <Card className="border-rose-100 bg-rose-50/30 shadow-none">
        <CardContent className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-sm font-semibold">Cancel membership</h3>
            <p className="mt-1 text-xs text-slate-500">
              You&apos;ll keep premium access until February 18, 2027.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-rose-200 text-rose-700 hover:bg-rose-50"
            onClick={() => notify("Cancellation confirmation opened")}
          >
            Turn off renewal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function MembershipUsage({
  label,
  value,
  progress,
}: {
  label: string;
  value: string;
  progress: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <strong>{value}</strong>
      </div>
      <Progress value={progress} className="[&>div]:bg-emerald-500" />
    </div>
  );
}

function MembershipPlan({
  name,
  price,
  period,
  description,
  features,
  action,
  current = false,
  onAction,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  action: string;
  current?: boolean;
  onAction: () => void;
}) {
  return (
    <Card
      className={`shadow-none ${current ? "border-emerald-300 bg-emerald-50/30" : ""}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          {current && (
            <Badge className="bg-emerald-100 text-emerald-700">Active</Badge>
          )}
        </div>
        <div>
          <strong className="text-3xl font-semibold">{price}</strong>
          <span className="text-sm text-slate-500"> / {period}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mb-5 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <Check className="size-4 text-emerald-600" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant={current ? "secondary" : "outline"}
          className="w-full"
          onClick={onAction}
        >
          {action}
        </Button>
      </CardContent>
    </Card>
  );
}

const memberPayments = [
  {
    id: "PAY-84721",
    date: "Feb 18, 2026",
    description: "Yearly Premium membership",
    method: "Visa •••• 4821",
    amount: "$149.00",
    status: "Paid",
  },
  {
    id: "PAY-59284",
    date: "Feb 18, 2025",
    description: "Yearly Premium membership",
    method: "Visa •••• 4821",
    amount: "$149.00",
    status: "Paid",
  },
  {
    id: "PAY-38142",
    date: "Jan 18, 2025",
    description: "Monthly Premium membership",
    method: "Visa •••• 4821",
    amount: "$19.00",
    status: "Paid",
  },
  {
    id: "PAY-29018",
    date: "Dec 18, 2024",
    description: "Monthly Premium membership",
    method: "Mastercard •••• 1098",
    amount: "$19.00",
    status: "Refunded",
  },
] as const;

function MyBilling({ notify }: { notify: (message: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="member-section-title">
        <div>
          <span>FINANCIAL HISTORY</span>
          <h1>Billing & payments</h1>
          <p>
            Manage payment methods and download receipts for completed
            transactions.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => notify("All receipts prepared as a ZIP file")}
        >
          <Download /> Download all receipts
        </Button>
      </div>
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <Card className="shadow-none">
          <CardHeader className="flex-row items-start justify-between">
            <div>
              <CardTitle>Payment method</CardTitle>
              <CardDescription>
                Used for your next automatic renewal
              </CardDescription>
            </div>
            <Badge className="bg-emerald-100 text-emerald-700">Default</Badge>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-between gap-4 rounded-xl border p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-16 place-items-center rounded-lg bg-slate-900 text-xs font-semibold tracking-wider text-white">
                  VISA
                </span>
                <div>
                  <p className="text-sm font-medium">Visa ending in 4821</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Expires 09/2028 · Amina Mensah
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => notify("Payment method editor opened")}
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => notify("New payment method form opened")}
                >
                  <Plus /> Add new
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-emerald-100 bg-emerald-50/40 shadow-none">
          <CardHeader>
            <CardTitle>Next charge</CardTitle>
            <CardDescription>Upcoming membership renewal</CardDescription>
          </CardHeader>
          <CardContent>
            <strong className="text-3xl font-semibold">$149.00</strong>
            <p className="mt-1 text-sm text-slate-600">February 18, 2027</p>
            <Separator className="my-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Plan</span>
                <strong>Yearly Premium</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Auto-renew</span>
                <Badge className="bg-emerald-100 text-emerald-700">On</Badge>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-5 w-full bg-white"
              onClick={() => notify("Membership renewal settings opened")}
            >
              Manage renewal
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className="overflow-hidden py-0 shadow-none">
        <CardHeader className="border-b py-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <CardTitle>Payment history</CardTitle>
              <CardDescription>
                Individual charges, refunds, and downloadable receipts
              </CardDescription>
            </div>
            <Badge variant="outline">4 transactions</Badge>
          </div>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6">Transaction</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Payment method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="pr-6 text-right">Receipt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {memberPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="pl-6">
                  <p className="font-mono text-xs font-medium">{payment.id}</p>
                  <p className="mt-1 text-xs text-slate-500">{payment.date}</p>
                </TableCell>
                <TableCell className="text-sm text-slate-600">
                  {payment.description}
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-slate-500">
                  {payment.method}
                </TableCell>
                <TableCell className="text-sm font-medium">
                  {payment.amount}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      payment.status === "Paid"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-600"
                    }
                  >
                    {payment.status === "Refunded" && <RotateCcw />}
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell className="pr-6 text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => notify(`${payment.id} receipt opened`)}
                  >
                    <ReceiptText /> Receipt
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="border-t px-6 py-3 text-xs text-slate-500">
          Receipts are generated per transaction and remain separate from
          membership access settings.
        </div>
      </Card>
      <Card className="shadow-none">
        <CardContent className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div className="flex gap-3">
            <ShieldCheck className="size-5 shrink-0 text-emerald-700" />
            <div>
              <p className="text-sm font-medium">Secure payment records</p>
              <p className="mt-1 text-xs text-slate-500">
                The production platform will display processor-hosted payment
                details without storing full card numbers.
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={() => notify("Billing support opened")}
          >
            Get billing help <ArrowRight />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

const enrolledCourses = [
  {
    title: "Data Analysis with Excel",
    category: "Data & Analytics",
    progress: 62,
    lesson: "Module 4 · Visualizing your data",
    time: "3h 10m left",
    color: "violet",
    code: "DA",
    rating: "4.8",
    state: "progress",
  },
  {
    title: "Effective Team Leadership",
    category: "Leadership",
    progress: 28,
    lesson: "Module 2 · Building team trust",
    time: "5h 05m left",
    color: "mint",
    code: "TL",
    rating: "4.8",
    state: "progress",
  },
  {
    title: "Project Management Foundations",
    category: "Leadership",
    progress: 100,
    lesson: "Completed July 12, 2026",
    time: "Certificate earned",
    color: "coral",
    code: "PM",
    rating: "4.9",
    state: "completed",
  },
  {
    title: "Workplace Health & Safety",
    category: "Compliance",
    progress: 100,
    lesson: "Completed June 24, 2026",
    time: "Certificate earned",
    color: "gold",
    code: "HS",
    rating: "4.9",
    state: "completed",
  },
] as const;

function MyCourses({
  onBrowse,
  notify,
}: {
  onBrowse: () => void;
  notify: (message: string) => void;
}) {
  const [filter, setFilter] = useState<"all" | "progress" | "completed">("all");
  const visible =
    filter === "all"
      ? enrolledCourses
      : enrolledCourses.filter((course) => course.state === filter);
  return (
    <div className="my-courses-view">
      <div className="member-section-title">
        <div>
          <span>MY LEARNING</span>
          <h1>My courses</h1>
          <p>
            Continue learning, revisit completed training, and track your
            progress.
          </p>
        </div>
        <Button className="primary-btn" onClick={onBrowse}>
          Explore more courses <ArrowRight />
        </Button>
      </div>
      <div className="course-summary">
        <Card>
          <CardContent>
            <BookOpen />
            <span>
              <strong>4</strong>
              <small>Total courses</small>
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CirclePlay />
            <span>
              <strong>2</strong>
              <small>In progress</small>
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Award />
            <span>
              <strong>2</strong>
              <small>Completed</small>
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Clock3 />
            <span>
              <strong>11.5h</strong>
              <small>Learning time</small>
            </span>
          </CardContent>
        </Card>
      </div>
      <div className="course-filter-row">
        <div>
          {(["all", "progress", "completed"] as const).map((item) => (
            <Button
              variant={filter === item ? "default" : "ghost"}
              size="sm"
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item === "all"
                ? "All courses"
                : item === "progress"
                  ? "In progress"
                  : "Completed"}
            </Button>
          ))}
        </div>
        <label>
          <Search />
          <Input placeholder="Search enrolled courses" />
        </label>
      </div>
      <div className="enrolled-grid">
        {visible.map((course) => (
          <Card className="enrolled-card py-0 shadow-none" key={course.title}>
            <div className={`enrolled-art ${course.color}`}>
              <span>{course.code}</span>
              {course.state === "completed" ? (
                <i>
                  <Check />
                </i>
              ) : (
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => notify(`${course.title} lesson opened`)}
                >
                  <CirclePlay />
                </Button>
              )}
            </div>
            <CardContent className="enrolled-copy">
              <div className="enrolled-category">
                <Badge variant="secondary">{course.category}</Badge>
                <b>
                  <Star fill="currentColor" />
                  {course.rating}
                </b>
              </div>
              <h2>{course.title}</h2>
              <p>{course.lesson}</p>
              <div className="enrolled-progress">
                <Progress value={course.progress} />
                <span>{course.progress}%</span>
              </div>
              <Separator />
              <div className="enrolled-bottom">
                <small>{course.time}</small>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    notify(
                      course.state === "completed"
                        ? `${course.title} review opened`
                        : `${course.title} continued`,
                    )
                  }
                >
                  {course.state === "completed" ? "Review course" : "Continue"}
                  <ArrowRight />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MyCertificates({ notify }: { notify: (message: string) => void }) {
  return (
    <div className="certificates-view">
      <div className="member-section-title">
        <div>
          <span>MY CREDENTIALS</span>
          <h1>Certificates</h1>
          <p>
            Manage your earned credentials and request certificates for eligible
            courses.
          </p>
        </div>
        <Button
          className="primary-btn"
          onClick={() => notify("Certificate request form opened")}
        >
          <Plus /> Request certificate
        </Button>
      </div>
      <div className="certificate-stats">
        <CertificateMetric
          icon={<Award />}
          tone="earned"
          value="2"
          label="Certificates earned"
          note="Both active and verified"
        />
        <CertificateMetric
          icon={<Hourglass />}
          tone="review"
          value="1"
          label="Under review"
          note="Usually completed in 2–3 days"
        />
        <CertificateMetric
          icon={<Check />}
          tone="eligible"
          value="1"
          label="Eligible to request"
          note="Course requirements completed"
        />
      </div>
      <Card className="issued-section py-0 shadow-none">
        <CardContent className="p-5">
          <div className="certificate-heading">
            <div>
              <h2>Issued certificates</h2>
              <p>Your downloadable and publicly verifiable credentials</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => notify("Public verification page opened")}
            >
              How verification works <ExternalLink />
            </Button>
          </div>
          <div className="issued-grid">
            <IssuedCertificate
              title="Project Management Foundations"
              id="CL-2026-1842"
              date="July 12, 2026"
              accent="emerald"
              notify={notify}
            />
            <IssuedCertificate
              title="Workplace Health & Safety"
              id="CL-2026-0914"
              date="June 24, 2026"
              accent="amber"
              notify={notify}
            />
          </div>
        </CardContent>
      </Card>
      <div className="certificate-status-grid">
        <Card className="status-card review-card py-0 shadow-none">
          <CardContent className="flex w-full items-center gap-3 p-4">
            <span>
              <Hourglass />
            </span>
            <div>
              <Badge variant="secondary">Under review</Badge>
              <h3>Data Analysis with Excel</h3>
              <p>
                Requested July 18, 2026 · Your course completion and final
                assessment are being reviewed.
              </p>
              <Progress value={66} className="mt-3" />
              <b>
                Submitted <em>Under review</em> Decision
              </b>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => notify("Certificate request details opened")}
            >
              View request
            </Button>
          </CardContent>
        </Card>
        <Card className="status-card eligible-card py-0 shadow-none">
          <CardContent className="flex w-full items-center gap-3 p-4">
            <span>
              <Check />
            </span>
            <div>
              <Badge variant="secondary">You&apos;re eligible</Badge>
              <h3>Effective Team Leadership</h3>
              <p>
                You completed all 28 lessons. Submit a request to receive your
                verified certificate.
              </p>
            </div>
            <Button
              size="sm"
              onClick={() => notify("Certificate request started")}
            >
              Request now <ArrowRight />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const resources = [
  {
    title: "Project charter template",
    course: "Project Management Foundations",
    type: "PDF",
    size: "1.2 MB",
    category: "Templates",
    downloads: 1842,
    premium: false,
    icon: "pdf",
  },
  {
    title: "Risk assessment worksheet",
    course: "Project Management Foundations",
    type: "XLSX",
    size: "86 KB",
    category: "Worksheets",
    downloads: 1276,
    premium: true,
    icon: "sheet",
  },
  {
    title: "Excel formulas quick reference",
    course: "Data Analysis with Excel",
    type: "PDF",
    size: "2.4 MB",
    category: "Guides",
    downloads: 2319,
    premium: true,
    icon: "pdf",
  },
  {
    title: "Leadership conversation planner",
    course: "Effective Team Leadership",
    type: "DOCX",
    size: "140 KB",
    category: "Templates",
    downloads: 906,
    premium: true,
    icon: "doc",
  },
  {
    title: "Workplace safety checklist",
    course: "Workplace Health & Safety",
    type: "PDF",
    size: "940 KB",
    category: "Checklists",
    downloads: 3054,
    premium: false,
    icon: "pdf",
  },
  {
    title: "Team performance scorecard",
    course: "Effective Team Leadership",
    type: "XLSX",
    size: "112 KB",
    category: "Worksheets",
    downloads: 774,
    premium: true,
    icon: "sheet",
  },
] as const;

function MyResources({ notify }: { notify: (message: string) => void }) {
  const [filter, setFilter] = useState("All resources");
  const [query, setQuery] = useState("");
  const [accessFilter, setAccessFilter] = useState("All access");
  const [selectedResources, setSelectedResources] = useState<string[]>([]);
  const [resourceSort, setResourceSort] = useState("Most downloaded");
  const [resourcePage, setResourcePage] = useState(1);
  const categories = [
    "All resources",
    "Templates",
    "Guides",
    "Worksheets",
    "Checklists",
  ];
  const resourcePageSize = 4;
  const filteredResources = resources
    .filter(
      (resource) =>
        (filter === "All resources" || resource.category === filter) &&
        (accessFilter === "All access" ||
          (accessFilter === "Premium"
            ? resource.premium
            : !resource.premium)) &&
        `${resource.title} ${resource.course} ${resource.type}`
          .toLowerCase()
          .includes(query.toLowerCase()),
    )
    .sort((a, b) =>
      resourceSort === "Name A–Z"
        ? a.title.localeCompare(b.title)
        : resourceSort === "File type"
          ? a.type.localeCompare(b.type)
          : b.downloads - a.downloads,
    );
  const resourcePageCount = Math.max(
    1,
    Math.ceil(filteredResources.length / resourcePageSize),
  );
  const safeResourcePage = Math.min(resourcePage, resourcePageCount);
  const visible = filteredResources.slice(
    (safeResourcePage - 1) * resourcePageSize,
    safeResourcePage * resourcePageSize,
  );
  const allVisibleSelected =
    visible.length > 0 &&
    visible.every((resource) => selectedResources.includes(resource.title));
  const toggleAll = () =>
    setSelectedResources(
      allVisibleSelected
        ? selectedResources.filter(
            (title) => !visible.some((resource) => resource.title === title),
          )
        : [
            ...new Set([
              ...selectedResources,
              ...visible.map((resource) => resource.title),
            ]),
          ],
    );
  const runBulkResourceAction = (action: string) => {
    notify(
      `${action} ${selectedResources.length} resource${selectedResources.length === 1 ? "" : "s"} — UI demo`,
    );
    setSelectedResources([]);
  };
  return (
    <div className="resources-view">
      <div className="member-section-title">
        <div>
          <span>LEARNING LIBRARY</span>
          <h1>Resources & downloads</h1>
          <p>
            Practical templates, guides, and tools included with your courses.
          </p>
        </div>
        <Button
          className="primary-btn"
          onClick={() => notify("Downloaded files view opened")}
        >
          <FolderOpen /> My downloads
        </Button>
      </div>
      <Card className="resource-highlight border-0 py-0 text-white">
        <CardContent className="flex w-full items-center justify-between gap-6 p-6">
          <div>
            <span>
              <Sparkles />
            </span>
            <div>
              <Badge>Premium library</Badge>
              <h2>Everything you need, ready to use</h2>
              <p>
                Your active membership unlocks every premium resource in the
                learning library.
              </p>
            </div>
          </div>
          <Separator orientation="vertical" className="h-12 bg-white/10" />
          <div>
            <strong>48</strong>
            <span>
              Premium resources<small>across 12 categories</small>
            </span>
          </div>
        </CardContent>
      </Card>
      <div className="resource-toolbar">
        <div>
          {categories.map((category) => (
            <Button
              variant={filter === category ? "default" : "ghost"}
              size="sm"
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => {
                setFilter(category);
                setResourcePage(1);
              }}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label>
            <Search />
            <Input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setResourcePage(1);
              }}
              placeholder="Search resources"
            />
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {accessFilter}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {["All access", "Free", "Premium"].map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => {
                    setAccessFilter(option);
                    setResourcePage(1);
                  }}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                {resourceSort}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {["Most downloaded", "Name A–Z", "File type"].map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => {
                    setResourceSort(option);
                    setResourcePage(1);
                  }}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {selectedResources.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm">
                  {selectedResources.length} selected <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Bulk actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => runBulkResourceAction("Downloaded")}
                >
                  <Download /> Download selected
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => runBulkResourceAction("Added to saved files:")}
                >
                  <FolderOpen /> Save to collection
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() =>
                    runBulkResourceAction("Removed from saved files:")
                  }
                >
                  <Trash2 /> Remove saved
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      <Card className="resource-table overflow-hidden py-0 shadow-none">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  aria-label="Select all visible resources"
                  checked={
                    allVisibleSelected
                      ? true
                      : selectedResources.some((title) =>
                            visible.some(
                              (resource) => resource.title === title,
                            ),
                          )
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Resource</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>File</TableHead>
              <TableHead>Access</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map((resource) => (
              <TableRow
                key={resource.title}
                data-state={
                  selectedResources.includes(resource.title)
                    ? "selected"
                    : undefined
                }
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${resource.title}`}
                    checked={selectedResources.includes(resource.title)}
                    onCheckedChange={() =>
                      setSelectedResources((current) =>
                        current.includes(resource.title)
                          ? current.filter((title) => title !== resource.title)
                          : [...current, resource.title],
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className={`file-kind ${resource.icon}`}>
                      {resource.icon === "sheet" ? (
                        <FileSpreadsheet />
                      ) : (
                        <FileText />
                      )}
                    </span>
                    <div className="resource-name">
                      <strong>{resource.title}</strong>
                      <small>
                        {resource.category} ·{" "}
                        {resource.downloads.toLocaleString()} downloads
                      </small>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="resource-course">
                    <BookOpen />
                    <span>{resource.course}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="resource-file">
                    <strong>{resource.type}</strong>
                    <small>{resource.size}</small>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={resource.premium ? "secondary" : "outline"}
                    className={
                      resource.premium ? "access premium" : "access free"
                    }
                  >
                    {resource.premium ? (
                      <>
                        <LockKeyhole /> Premium
                      </>
                    ) : (
                      <>Free</>
                    )}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    className="download-action"
                    onClick={() => notify(`${resource.title} download ready`)}
                  >
                    <Download />
                    <span>Download</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {visible.length === 0 && (
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="resource-empty">
                    <Search />
                    <strong>No resources found</strong>
                    <p>Try another search, category, or access filter.</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery("");
                        setFilter("All resources");
                        setAccessFilter("All access");
                        setResourcePage(1);
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex flex-col gap-3 border-t px-4 py-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Showing{" "}
            {filteredResources.length === 0
              ? 0
              : (safeResourcePage - 1) * resourcePageSize + 1}
            –
            {Math.min(
              safeResourcePage * resourcePageSize,
              filteredResources.length,
            )}{" "}
            of {filteredResources.length} resources
          </span>
          <div className="flex items-center gap-2">
            {(query ||
              filter !== "All resources" ||
              accessFilter !== "All access") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setQuery("");
                  setFilter("All resources");
                  setAccessFilter("All access");
                  setResourcePage(1);
                }}
              >
                Clear filters
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              disabled={safeResourcePage === 1}
              onClick={() => setResourcePage((page) => Math.max(1, page - 1))}
            >
              Previous
            </Button>
            <span>
              Page {safeResourcePage} of {resourcePageCount}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={safeResourcePage === resourcePageCount}
              onClick={() =>
                setResourcePage((page) => Math.min(resourcePageCount, page + 1))
              }
            >
              Next
            </Button>
          </div>
        </div>
      </Card>
      <Card className="download-note py-0 shadow-none">
        <CardContent className="flex w-full items-center gap-3 p-3">
          <ShieldCheck />
          <div>
            <strong>Secure downloads</strong>
            <p>
              Resource links in the production platform will be private and
              expire automatically.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => notify("Download history opened")}
          >
            View download history <ArrowRight />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function IssuedCertificate({
  title,
  id,
  date,
  accent,
  notify,
}: {
  title: string;
  id: string;
  date: string;
  accent: "emerald" | "amber";
  notify: (message: string) => void;
}) {
  return (
    <Card className={`issued-certificate ${accent} py-0 shadow-none`}>
      <div className="certificate-paper">
        <div className="cert-brand">
          <span>
            <GraduationCap />
          </span>
          <strong>CertiLearn</strong>
        </div>
        <small>CERTIFICATE OF COMPLETION</small>
        <p>This certifies that</p>
        <h3>Amina Mensah</h3>
        <i />
        <b>{title}</b>
        <footer>
          <span>
            ISSUED
            <br />
            <strong>{date}</strong>
          </span>
          <Award />
          <span>
            CREDENTIAL ID
            <br />
            <strong>{id}</strong>
          </span>
        </footer>
      </div>
      <CardContent className="certificate-card-copy">
        <div>
          <Badge className="active-badge">
            <ShieldCheck /> Active
          </Badge>
          <h2>{title}</h2>
          <p>Issued {date} · No expiration</p>
        </div>
        <div>
          <Button size="sm" onClick={() => notify(`${title} download ready`)}>
            <Download /> Download PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => notify(`${id} verification opened`)}
          >
            <ExternalLink /> Verify
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function CertificateMetric({
  icon,
  tone,
  value,
  label,
  note,
}: {
  icon: React.ReactNode;
  tone: string;
  value: string;
  label: string;
  note: string;
}) {
  return (
    <Card className="py-0 shadow-none">
      <CardContent className="flex items-center gap-3 p-4">
        <span className={tone}>{icon}</span>
        <div>
          <strong>{value}</strong>
          <p>{label}</p>
          <small>{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({
  icon,
  value,
  label,
  note,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  note: string;
}) {
  return (
    <Card className="stat-card py-0 shadow-none">
      <CardContent className="flex items-center gap-3 p-4">
        <span>{icon}</span>
        <div>
          <strong>{value}</strong>
          <p>{label}</p>
          <small>{note}</small>
        </div>
      </CardContent>
    </Card>
  );
}
