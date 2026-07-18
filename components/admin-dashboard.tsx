"use client"

import {
  Activity, ArrowDownRight, ArrowUpRight, Award, Bell, BookOpen, ChevronDown,
  CircleDollarSign, FileText, GraduationCap, LayoutDashboard, Megaphone, Menu,
  Archive, Download, Eye, FileSpreadsheet, FileUp, Filter, HardDrive, Mail,
  MoreHorizontal, Pencil, Plus, Search, Settings, ShieldCheck, UserCheck, Users,
  UserX, WalletCards, X,
} from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const nav = [
  ["Overview", LayoutDashboard], ["Members", Users], ["Courses", BookOpen],
  ["Documents", FileText], ["Subscriptions", WalletCards], ["Payments", CircleDollarSign],
  ["Certificates", Award], ["Announcements", Megaphone], ["Reports", Activity],
] as const

const members = [
  { name: "Amina Mensah", email: "amina@example.com", country: "Ghana", plan: "Yearly", status: "Active", joined: "Jul 18, 2026", initials: "AM" },
  { name: "Sophea Lim", email: "sophea@example.com", country: "Cambodia", plan: "Monthly", status: "Active", joined: "Jul 18, 2026", initials: "SL" },
  { name: "Lucas Martin", email: "lucas@example.com", country: "France", plan: "Free", status: "Active", joined: "Jul 17, 2026", initials: "LM" },
  { name: "Nadia Rahman", email: "nadia@example.com", country: "Malaysia", plan: "Yearly", status: "Pending", joined: "Jul 17, 2026", initials: "NR" },
  { name: "James Okafor", email: "james@example.com", country: "Nigeria", plan: "Monthly", status: "Active", joined: "Jul 16, 2026", initials: "JO" },
]

const certificates = [
  ["Amina Mensah", "Project Management Foundations", "Under review", "2h ago"],
  ["Sophea Lim", "Workplace Health & Safety", "Eligible", "5h ago"],
  ["Diego Alvarez", "Data Analysis with Excel", "Requested", "Yesterday"],
] as const

const adminCourses = [
  { title: "Project Management Foundations", category: "Leadership", instructor: "Dr. Maya Chen", lessons: 32, students: 2840, access: "Premium", status: "Published", updated: "Jul 18, 2026", code: "PM", color: "bg-rose-100 text-rose-700" },
  { title: "Data Analysis with Excel", category: "Data & Analytics", instructor: "Omar Diallo", lessons: 24, students: 1936, access: "Premium", status: "Published", updated: "Jul 17, 2026", code: "DA", color: "bg-violet-100 text-violet-700" },
  { title: "Workplace Health & Safety", category: "Compliance", instructor: "Sarah Okafor", lessons: 18, students: 3260, access: "Free", status: "Published", updated: "Jul 15, 2026", code: "HS", color: "bg-amber-100 text-amber-700" },
  { title: "Effective Team Leadership", category: "Leadership", instructor: "Daniel Kim", lessons: 28, students: 1458, access: "Premium", status: "Draft", updated: "Jul 14, 2026", code: "TL", color: "bg-emerald-100 text-emerald-700" },
  { title: "Customer Service Essentials", category: "Business", instructor: "Nadia Rahman", lessons: 16, students: 892, access: "Free", status: "Review", updated: "Jul 12, 2026", code: "CS", color: "bg-sky-100 text-sky-700" },
] as const

const adminDocuments = [
  { title: "Project charter template", course: "Project Management Foundations", category: "Templates", type: "PDF", size: "1.2 MB", access: "Free", downloads: 1842, status: "Published", updated: "Jul 18, 2026" },
  { title: "Risk assessment worksheet", course: "Project Management Foundations", category: "Worksheets", type: "XLSX", size: "86 KB", access: "Premium", downloads: 1276, status: "Published", updated: "Jul 18, 2026" },
  { title: "Excel formulas quick reference", course: "Data Analysis with Excel", category: "Guides", type: "PDF", size: "2.4 MB", access: "Premium", downloads: 2319, status: "Published", updated: "Jul 17, 2026" },
  { title: "Leadership conversation planner", course: "Effective Team Leadership", category: "Templates", type: "DOCX", size: "140 KB", access: "Premium", downloads: 906, status: "Draft", updated: "Jul 15, 2026" },
  { title: "Workplace safety checklist", course: "Workplace Health & Safety", category: "Checklists", type: "PDF", size: "940 KB", access: "Free", downloads: 3054, status: "Published", updated: "Jul 14, 2026" },
] as const

export function AdminDashboard({ onExit, notify }: { onExit: () => void; notify: (message: string) => void }) {
  const [active, setActive] = useState("Overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [memberQuery, setMemberQuery] = useState("")
  const [planFilter, setPlanFilter] = useState("All plans")
  const [statusFilter, setStatusFilter] = useState("All statuses")
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [memberSort, setMemberSort] = useState("Newest")
  const [memberPage, setMemberPage] = useState(1)
  const memberPageSize = 3
  const filteredMembers = members.filter(member =>
    (planFilter === "All plans" || member.plan === planFilter) &&
    (statusFilter === "All statuses" || member.status === statusFilter) &&
    `${member.name} ${member.email} ${member.country}`.toLowerCase().includes(memberQuery.toLowerCase())
  ).sort((a, b) => memberSort === "Name A–Z" ? a.name.localeCompare(b.name) : memberSort === "Country A–Z" ? a.country.localeCompare(b.country) : members.indexOf(a) - members.indexOf(b))
  const memberPageCount = Math.max(1, Math.ceil(filteredMembers.length / memberPageSize))
  const safeMemberPage = Math.min(memberPage, memberPageCount)
  const visibleMembers = filteredMembers.slice((safeMemberPage - 1) * memberPageSize, safeMemberPage * memberPageSize)
  const allVisibleSelected = visibleMembers.length > 0 && visibleMembers.every(member => selectedMembers.includes(member.email))
  const toggleAllMembers = () => setSelectedMembers(allVisibleSelected ? selectedMembers.filter(email => !visibleMembers.some(member => member.email === email)) : [...new Set([...selectedMembers, ...visibleMembers.map(member => member.email)])])
  const runMemberBulkAction = (action: string) => {
    notify(`${action} applied to ${selectedMembers.length} member${selectedMembers.length === 1 ? "" : "s"} — UI demo`)
    setSelectedMembers([])
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[245px_1fr]">
        {sidebarOpen && <button className="fixed inset-0 z-30 bg-slate-950/35 lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close admin navigation" />}
        <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 flex w-[245px] flex-col border-r bg-white transition-transform lg:static lg:translate-x-0`}>
          <div className="flex h-[78px] items-center justify-between px-5">
            <button className="flex items-center gap-2.5" onClick={onExit}>
              <span className="grid size-9 place-items-center rounded-xl bg-emerald-600 text-white"><GraduationCap className="size-5" /></span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">Certi<span className="text-emerald-600">Learn</span></span>
            </button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}><X /></Button>
          </div>
          <Separator />
          <div className="flex-1 space-y-1 p-3">
            <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">Workspace</p>
            {nav.map(([label, Icon]) => <Button key={label} variant="ghost" onClick={() => { setActive(label); setSidebarOpen(false); label !== "Overview" && notify(`${label} module selected — demo data shown`); }} className={`h-10 w-full justify-start gap-3 px-3 ${active === label ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-700" : "text-slate-600"}`}><Icon className="size-4" />{label}{label === "Certificates" && <Badge className="ml-auto bg-amber-100 text-amber-700">8</Badge>}</Button>)}
          </div>
          <div className="p-3">
            <Button variant="ghost" className="mb-3 w-full justify-start gap-3 text-slate-600"><Settings /> Settings</Button>
            <Card className="border-0 bg-slate-900 py-4 text-white shadow-none"><CardContent className="px-4"><div className="mb-3 flex items-center gap-3"><Avatar><AvatarFallback className="bg-emerald-500 text-white">SA</AvatarFallback></Avatar><div className="min-w-0"><p className="truncate text-sm font-semibold">Sophia Admin</p><p className="truncate text-[10px] text-slate-400">Super administrator</p></div></div><Button size="sm" variant="secondary" className="w-full" onClick={onExit}>View learner site</Button></CardContent></Card>
          </div>
        </aside>

        <main className="min-w-0">
          <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-white/95 px-4 backdrop-blur md:px-7">
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}><Menu /></Button>
            <div className="relative hidden w-full max-w-sm md:block"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><Input className="pl-9" placeholder="Search members, courses, payments…" /></div>
            <div className="ml-auto flex items-center gap-2"><Button variant="outline" size="icon" className="relative" onClick={() => notify("You have 5 admin notifications")}><Bell /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-rose-500" /></Button><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="gap-2"><Avatar className="size-7"><AvatarFallback className="bg-emerald-100 text-[10px] text-emerald-700">SA</AvatarFallback></Avatar><span className="hidden text-xs md:inline">Sophia Admin</span><ChevronDown className="size-3" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuLabel>Admin account</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem>Profile</DropdownMenuItem><DropdownMenuItem>Security</DropdownMenuItem><DropdownMenuItem onClick={onExit}>Return to website</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div>
          </header>

          <div className="space-y-6 p-4 md:p-7">
            {active === "Overview" ? <>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge variant="secondary" className="mb-2 text-emerald-700">Live overview</Badge><h1 className="text-2xl font-bold tracking-tight md:text-3xl">Good morning, Sophia</h1><p className="mt-1 text-sm text-slate-500">Here&apos;s what&apos;s happening across CertiLearn today.</p></div><div className="flex gap-2"><Button variant="outline" onClick={() => notify("Report export prepared with fake data")}><FileText /> Export report</Button><Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => notify("New course form opened — UI demo")}><Plus /> New course</Button></div></div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <Metric title="Total members" value="12,486" change="12.5%" detail="vs. last month" icon={Users} positive />
              <Metric title="Active subscribers" value="4,892" change="8.2%" detail="39.2% conversion" icon={ShieldCheck} positive />
              <Metric title="Monthly revenue" value="$28,460" change="6.4%" detail="vs. last month" icon={CircleDollarSign} positive />
              <Metric title="Pending certificates" value="28" change="4.1%" detail="needs attention" icon={Award} />
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.55fr_.75fr]">
              <Card>
                <CardHeader className="flex-row items-start justify-between"><div><CardTitle>Revenue overview</CardTitle><CardDescription>Membership income over the last 8 months</CardDescription></div><Badge variant="outline">USD <ChevronDown /></Badge></CardHeader>
                <CardContent><div className="mb-5 flex items-end gap-3"><span className="text-3xl font-bold">$168,240</span><Badge className="mb-1 bg-emerald-100 text-emerald-700"><ArrowUpRight /> 14.8%</Badge></div><div className="flex h-52 items-end gap-3 border-b border-slate-200 px-2">{[43,55,48,70,62,77,69,91].map((h,i)=><div key={i} className="group flex h-full flex-1 items-end"><div className={`w-full rounded-t-md ${i===7?"bg-emerald-500":"bg-emerald-100 group-hover:bg-emerald-200"}`} style={{height:`${h}%`}} /></div>)}</div><div className="mt-2 flex justify-between px-1 text-[10px] text-slate-400">{["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul"].map(x=><span key={x}>{x}</span>)}</div></CardContent>
              </Card>
              <Card><CardHeader><CardTitle>Membership mix</CardTitle><CardDescription>Active users by plan</CardDescription></CardHeader><CardContent className="space-y-6"><PlanRow label="Yearly" value="2,164" percent={44} color="[&>div]:bg-emerald-500" /><PlanRow label="Monthly" value="2,728" percent={56} color="[&>div]:bg-sky-500" /><Separator /><div className="grid grid-cols-2 gap-3"><div className="rounded-lg bg-slate-50 p-3"><p className="text-[10px] text-slate-500">Renewal rate</p><strong className="text-xl">87.4%</strong></div><div className="rounded-lg bg-slate-50 p-3"><p className="text-[10px] text-slate-500">Churn rate</p><strong className="text-xl">3.8%</strong></div></div><Button variant="outline" className="w-full" onClick={() => notify("Subscriptions report selected")}>View subscriptions</Button></CardContent></Card>
            </div>

            <Tabs defaultValue="members" className="space-y-4">
              <TabsList><TabsTrigger value="members">Recent members</TabsTrigger><TabsTrigger value="certificates">Certificate queue</TabsTrigger></TabsList>
              <TabsContent value="members">
                <Card><CardHeader className="gap-4"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><CardTitle>New members</CardTitle><CardDescription>Latest registrations from around the world</CardDescription></div><Button variant="outline" size="sm" onClick={() => notify("Member directory opened")}>View all</Button></div><div className="flex flex-col gap-2 lg:flex-row lg:items-center"><div className="relative min-w-0 flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><Input value={memberQuery} onChange={event => { setMemberQuery(event.target.value); setMemberPage(1); }} className="pl-9" placeholder="Search name, email, or country" /></div><FilterMenu label={planFilter} options={["All plans", "Free", "Monthly", "Yearly"]} onSelect={value => { setPlanFilter(value); setMemberPage(1); }} /><FilterMenu label={statusFilter} options={["All statuses", "Active", "Pending"]} onSelect={value => { setStatusFilter(value); setMemberPage(1); }} /><FilterMenu label={memberSort} options={["Newest", "Name A–Z", "Country A–Z"]} onSelect={value => { setMemberSort(value); setMemberPage(1); }} />{selectedMembers.length > 0 && <DropdownMenu><DropdownMenuTrigger asChild><Button className="bg-emerald-600 hover:bg-emerald-700">{selectedMembers.length} selected <ChevronDown /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuLabel>Bulk actions</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem onClick={() => runMemberBulkAction("Activated")}><UserCheck /> Mark active</DropdownMenuItem><DropdownMenuItem onClick={() => runMemberBulkAction("Message queued")}><Mail /> Send message</DropdownMenuItem><DropdownMenuItem variant="destructive" onClick={() => runMemberBulkAction("Suspended")}><UserX /> Suspend members</DropdownMenuItem></DropdownMenuContent></DropdownMenu>}</div></CardHeader><CardContent className="px-0"><Table><TableHeader><TableRow><TableHead className="w-12 pl-6"><Checkbox aria-label="Select all visible members" checked={allVisibleSelected ? true : selectedMembers.some(email => visibleMembers.some(member => member.email === email)) ? "indeterminate" : false} onCheckedChange={toggleAllMembers} /></TableHead><TableHead>Member</TableHead><TableHead>Country</TableHead><TableHead>Plan</TableHead><TableHead>Status</TableHead><TableHead>Joined</TableHead><TableHead className="w-12" /></TableRow></TableHeader><TableBody>{visibleMembers.map(member=><TableRow key={member.email} data-state={selectedMembers.includes(member.email) ? "selected" : undefined}><TableCell className="pl-6"><Checkbox aria-label={`Select ${member.name}`} checked={selectedMembers.includes(member.email)} onCheckedChange={() => setSelectedMembers(current => current.includes(member.email) ? current.filter(email => email !== member.email) : [...current, member.email])} /></TableCell><TableCell><div className="flex items-center gap-3"><Avatar className="size-8"><AvatarFallback className="bg-slate-100 text-[10px]">{member.initials}</AvatarFallback></Avatar><div><p className="text-xs font-semibold">{member.name}</p><p className="text-[10px] text-slate-500">{member.email}</p></div></div></TableCell><TableCell className="text-xs text-slate-600">{member.country}</TableCell><TableCell><Badge variant={member.plan === "Free" ? "secondary" : "outline"}>{member.plan}</Badge></TableCell><TableCell><Badge className={member.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>{member.status}</Badge></TableCell><TableCell className="text-xs text-slate-500">{member.joined}</TableCell><TableCell><RowMenu notify={notify} /></TableCell></TableRow>)}{visibleMembers.length === 0 && <TableRow><TableCell colSpan={7} className="h-32 text-center"><Search className="mx-auto mb-2 size-5 text-slate-400" /><p className="text-sm font-medium">No members found</p><p className="text-xs text-slate-500">Try changing your search or filters.</p></TableCell></TableRow>}</TableBody></Table><div className="flex flex-col gap-3 border-t px-6 py-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>Showing {filteredMembers.length === 0 ? 0 : (safeMemberPage - 1) * memberPageSize + 1}–{Math.min(safeMemberPage * memberPageSize, filteredMembers.length)} of {filteredMembers.length} members</span><div className="flex items-center gap-2">{(memberQuery || planFilter !== "All plans" || statusFilter !== "All statuses") && <Button variant="ghost" size="sm" onClick={() => { setMemberQuery(""); setPlanFilter("All plans"); setStatusFilter("All statuses"); setMemberPage(1); }}>Clear filters</Button>}<Button variant="outline" size="sm" disabled={safeMemberPage === 1} onClick={() => setMemberPage(page => Math.max(1, page - 1))}>Previous</Button><span>Page {safeMemberPage} of {memberPageCount}</span><Button variant="outline" size="sm" disabled={safeMemberPage === memberPageCount} onClick={() => setMemberPage(page => Math.min(memberPageCount, page + 1))}>Next</Button></div></div></CardContent></Card>
              </TabsContent>
              <TabsContent value="certificates"><Card><CardHeader><CardTitle>Certificate requests</CardTitle><CardDescription>Review eligibility before approving certificates</CardDescription></CardHeader><CardContent className="space-y-3">{certificates.map(([name, course, status, time])=><div key={name} className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center"><span className="grid size-10 place-items-center rounded-lg bg-amber-50 text-amber-600"><Award /></span><div className="flex-1"><p className="text-sm font-semibold">{name}</p><p className="text-xs text-slate-500">{course} · {time}</p></div><Badge variant="outline">{status}</Badge><Button size="sm" onClick={() => notify(`${name}'s eligibility review opened`)}>Review</Button></div>)}</CardContent></Card></TabsContent>
            </Tabs>
            </> : active === "Members" ? <AdminMembersWorkspace notify={notify} /> : active === "Courses" ? <AdminCoursesWorkspace notify={notify} /> : active === "Documents" ? <AdminDocumentsWorkspace notify={notify} /> : <AdminModulePreview active={active} notify={notify} />}
          </div>
        </main>
      </div>
    </div>
  )
}

function Metric({ title, value, change, detail, icon: Icon, positive = false }: { title: string; value: string; change: string; detail: string; icon: typeof Users; positive?: boolean }) {
  return <Card><CardContent className="pt-5"><div className="mb-4 flex items-start justify-between"><span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="size-5" /></span><Badge variant="secondary" className={positive ? "text-emerald-700" : "text-amber-700"}>{positive ? <ArrowUpRight /> : <ArrowDownRight />}{change}</Badge></div><p className="text-2xl font-bold tracking-tight">{value}</p><p className="mt-1 text-xs font-medium text-slate-700">{title}</p><p className="mt-1 text-[10px] text-slate-400">{detail}</p></CardContent></Card>
}

function PlanRow({ label, value, percent, color }: { label: string; value: string; percent: number; color: string }) {
  return <div><div className="mb-2 flex justify-between text-xs"><span className="font-medium">{label}</span><span className="text-slate-500">{value} members</span></div><Progress value={percent} className={color} /></div>
}

function FilterMenu({ label, options, onSelect }: { label: string; options: string[]; onSelect: (value: string) => void }) {
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" className="justify-between lg:min-w-32"><Filter />{label}<ChevronDown className="ml-auto" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end">{options.map(option => <DropdownMenuItem key={option} onClick={() => onSelect(option)}>{option}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
}

function AdminMembersWorkspace({ notify }: { notify: (message: string) => void }) {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("All statuses")
  const [plan, setPlan] = useState("All plans")
  const [selected, setSelected] = useState<string[]>([])
  const rows = members.filter(member => (status === "All statuses" || member.status === status) && (plan === "All plans" || member.plan === plan) && `${member.name} ${member.email} ${member.country}`.toLowerCase().includes(query.toLowerCase()))
  const allSelected = rows.length > 0 && rows.every(member => selected.includes(member.email))
  const applyBulk = (action: string) => { notify(`${action} ${selected.length} member${selected.length === 1 ? "" : "s"} — UI demo`); setSelected([]) }

  return <>
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge variant="secondary" className="mb-2 text-emerald-700">Member management</Badge><h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Members</h1><p className="mt-1 text-sm text-slate-500">Manage access, plans, account status, and member communication.</p></div><div className="flex gap-2"><Button variant="outline" onClick={() => notify("Member export prepared with fake data")}><FileText /> Export</Button><Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => notify("Invite member form opened")}><Plus /> Invite member</Button></div></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><MemberSummary label="All members" value="12,486" note="+142 this month" icon={Users} /><MemberSummary label="Paid members" value="4,892" note="39.2% of members" icon={ShieldCheck} /><MemberSummary label="Pending review" value="86" note="Requires attention" icon={Activity} warning /><MemberSummary label="Suspended" value="34" note="0.3% of members" icon={UserX} /></div>
    <Card><CardHeader className="gap-4"><div><CardTitle>Member directory</CardTitle><CardDescription>Showing representative client-side demo records</CardDescription></div><div className="flex flex-col gap-2 lg:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><Input value={query} onChange={event => setQuery(event.target.value)} className="pl-9" placeholder="Search members" /></div><FilterMenu label={plan} options={["All plans", "Free", "Monthly", "Yearly"]} onSelect={setPlan} /><FilterMenu label={status} options={["All statuses", "Active", "Pending"]} onSelect={setStatus} />{selected.length > 0 && <DropdownMenu><DropdownMenuTrigger asChild><Button>{selected.length} selected <ChevronDown /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuLabel>Bulk actions</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem onClick={() => applyBulk("Activated")}><UserCheck /> Mark active</DropdownMenuItem><DropdownMenuItem onClick={() => applyBulk("Messaged")}><Mail /> Send message</DropdownMenuItem><DropdownMenuItem variant="destructive" onClick={() => applyBulk("Suspended")}><UserX /> Suspend</DropdownMenuItem></DropdownMenuContent></DropdownMenu>}</div></CardHeader><CardContent className="px-0"><Table><TableHeader><TableRow><TableHead className="w-12 pl-6"><Checkbox checked={allSelected ? true : selected.length ? "indeterminate" : false} onCheckedChange={() => setSelected(allSelected ? [] : rows.map(member => member.email))} aria-label="Select all members" /></TableHead><TableHead>Member</TableHead><TableHead>Location</TableHead><TableHead>Plan</TableHead><TableHead>Status</TableHead><TableHead>Joined</TableHead><TableHead className="w-12" /></TableRow></TableHeader><TableBody>{rows.map(member => <TableRow key={member.email} data-state={selected.includes(member.email) ? "selected" : undefined}><TableCell className="pl-6"><Checkbox checked={selected.includes(member.email)} onCheckedChange={() => setSelected(current => current.includes(member.email) ? current.filter(email => email !== member.email) : [...current, member.email])} aria-label={`Select ${member.name}`} /></TableCell><TableCell><div className="flex items-center gap-3"><Avatar className="size-9"><AvatarFallback className="bg-emerald-50 text-xs text-emerald-700">{member.initials}</AvatarFallback></Avatar><div><p className="text-sm font-medium">{member.name}</p><p className="text-xs text-slate-500">{member.email}</p></div></div></TableCell><TableCell className="text-sm text-slate-600">{member.country}</TableCell><TableCell><Badge variant={member.plan === "Free" ? "secondary" : "outline"}>{member.plan}</Badge></TableCell><TableCell><Badge className={member.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>{member.status}</Badge></TableCell><TableCell className="text-sm text-slate-500">{member.joined}</TableCell><TableCell><RowMenu notify={notify} /></TableCell></TableRow>)}{rows.length === 0 && <TableRow><TableCell colSpan={7} className="h-40 text-center"><Users className="mx-auto mb-2 size-6 text-slate-400" /><p className="text-sm font-medium">No matching members</p><Button variant="link" size="sm" onClick={() => { setQuery(""); setPlan("All plans"); setStatus("All statuses"); }}>Clear filters</Button></TableCell></TableRow>}</TableBody></Table><div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500"><span>{rows.length} of {members.length} demo members</span><span>Directory total: 12,486</span></div></CardContent></Card>
  </>
}

function AdminCoursesWorkspace({ notify }: { notify: (message: string) => void }) {
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("All statuses")
  const [access, setAccess] = useState("All access")
  const [selected, setSelected] = useState<string[]>([])
  const rows = adminCourses.filter(course => (status === "All statuses" || course.status === status) && (access === "All access" || course.access === access) && `${course.title} ${course.category} ${course.instructor}`.toLowerCase().includes(query.toLowerCase()))
  const allSelected = rows.length > 0 && rows.every(course => selected.includes(course.title))
  const applyBulk = (action: string) => { notify(`${action} ${selected.length} course${selected.length === 1 ? "" : "s"} — UI demo`); setSelected([]) }

  return <>
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge variant="secondary" className="mb-2 text-emerald-700">Training management</Badge><h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Courses</h1><p className="mt-1 text-sm text-slate-500">Create, organize, review, and publish learning content.</p></div><div className="flex gap-2"><Button variant="outline" onClick={() => notify("Course catalog preview opened")}><Eye /> Preview catalog</Button><Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => notify("New course editor opened — UI demo")}><Plus /> New course</Button></div></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><CourseSummary label="Total courses" value="48" note="5 updated this week" icon={BookOpen} /><CourseSummary label="Published" value="36" note="75% of catalog" icon={Eye} /><CourseSummary label="Drafts" value="7" note="Continue editing" icon={Pencil} /><CourseSummary label="In review" value="5" note="Ready for approval" icon={Activity} warning /></div>
    <Card><CardHeader className="gap-4"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><CardTitle>Course catalog</CardTitle><CardDescription>Manage course visibility, access, and learning content</CardDescription></div><Badge variant="outline">48 courses total</Badge></div><div className="flex flex-col gap-2 lg:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><Input value={query} onChange={event => setQuery(event.target.value)} className="pl-9" placeholder="Search course, category, or instructor" /></div><FilterMenu label={status} options={["All statuses", "Published", "Draft", "Review"]} onSelect={setStatus} /><FilterMenu label={access} options={["All access", "Free", "Premium"]} onSelect={setAccess} />{selected.length > 0 && <DropdownMenu><DropdownMenuTrigger asChild><Button>{selected.length} selected <ChevronDown /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuLabel>Bulk actions</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem onClick={() => applyBulk("Published")}><Eye /> Publish</DropdownMenuItem><DropdownMenuItem onClick={() => applyBulk("Moved to draft:")}><Pencil /> Move to draft</DropdownMenuItem><DropdownMenuItem variant="destructive" onClick={() => applyBulk("Archived")}><Archive /> Archive</DropdownMenuItem></DropdownMenuContent></DropdownMenu>}</div></CardHeader><CardContent className="px-0"><Table><TableHeader><TableRow><TableHead className="w-12 pl-6"><Checkbox checked={allSelected ? true : selected.length ? "indeterminate" : false} onCheckedChange={() => setSelected(allSelected ? [] : rows.map(course => course.title))} aria-label="Select all courses" /></TableHead><TableHead>Course</TableHead><TableHead>Instructor</TableHead><TableHead>Content</TableHead><TableHead>Students</TableHead><TableHead>Access</TableHead><TableHead>Status</TableHead><TableHead>Updated</TableHead><TableHead className="w-12" /></TableRow></TableHeader><TableBody>{rows.map(course => <TableRow key={course.title} data-state={selected.includes(course.title) ? "selected" : undefined}><TableCell className="pl-6"><Checkbox checked={selected.includes(course.title)} onCheckedChange={() => setSelected(current => current.includes(course.title) ? current.filter(title => title !== course.title) : [...current, course.title])} aria-label={`Select ${course.title}`} /></TableCell><TableCell><div className="flex min-w-[230px] items-center gap-3"><span className={`grid size-10 shrink-0 place-items-center rounded-lg text-xs font-semibold ${course.color}`}>{course.code}</span><div><p className="text-sm font-medium">{course.title}</p><p className="text-xs text-slate-500">{course.category}</p></div></div></TableCell><TableCell className="text-sm text-slate-600">{course.instructor}</TableCell><TableCell><p className="text-sm">{course.lessons} lessons</p><p className="text-xs text-slate-400">8 modules</p></TableCell><TableCell className="text-sm text-slate-600">{course.students.toLocaleString()}</TableCell><TableCell><Badge variant={course.access === "Free" ? "secondary" : "outline"}>{course.access}</Badge></TableCell><TableCell><Badge className={course.status === "Published" ? "bg-emerald-100 text-emerald-700" : course.status === "Review" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}>{course.status}</Badge></TableCell><TableCell className="whitespace-nowrap text-xs text-slate-500">{course.updated}</TableCell><TableCell><CourseRowMenu course={course.title} notify={notify} /></TableCell></TableRow>)}{rows.length === 0 && <TableRow><TableCell colSpan={9} className="h-40 text-center"><BookOpen className="mx-auto mb-2 size-6 text-slate-400" /><p className="text-sm font-medium">No matching courses</p><p className="text-xs text-slate-500">Try changing the search or filters.</p><Button variant="link" size="sm" onClick={() => { setQuery(""); setStatus("All statuses"); setAccess("All access"); }}>Clear filters</Button></TableCell></TableRow>}</TableBody></Table><div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500"><span>Showing {rows.length} demo courses</span><span>5 of 48 catalog records loaded</span></div></CardContent></Card>
  </>
}

function CourseSummary({ label, value, note, icon: Icon, warning = false }: { label: string; value: string; note: string; icon: typeof Users; warning?: boolean }) {
  return <Card><CardContent className="flex items-center gap-4 pt-5"><span className={`grid size-11 place-items-center rounded-xl ${warning ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}><Icon className="size-5" /></span><div><strong className="text-2xl font-semibold">{value}</strong><p className="text-sm text-slate-700">{label}</p><small className="text-xs text-slate-400">{note}</small></div></CardContent></Card>
}

function CourseRowMenu({ course, notify }: { course: string; notify: (message: string) => void }) {
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => notify(`${course} preview opened`)}><Eye /> Preview</DropdownMenuItem><DropdownMenuItem onClick={() => notify(`${course} editor opened`)}><Pencil /> Edit course</DropdownMenuItem><DropdownMenuItem onClick={() => notify(`${course} curriculum opened`)}><BookOpen /> Manage curriculum</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem variant="destructive" onClick={() => notify(`${course} archive confirmation opened`)}><Archive /> Archive</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
}

function AdminDocumentsWorkspace({ notify }: { notify: (message: string) => void }) {
  const [query, setQuery] = useState("")
  const [access, setAccess] = useState("All access")
  const [type, setType] = useState("All files")
  const [selected, setSelected] = useState<string[]>([])
  const rows = adminDocuments.filter(document => (access === "All access" || document.access === access) && (type === "All files" || document.type === type) && `${document.title} ${document.course} ${document.category}`.toLowerCase().includes(query.toLowerCase()))
  const allSelected = rows.length > 0 && rows.every(document => selected.includes(document.title))
  const applyBulk = (action: string) => { notify(`${action} ${selected.length} document${selected.length === 1 ? "" : "s"} — UI demo`); setSelected([]) }

  return <>
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge variant="secondary" className="mb-2 text-emerald-700">Resource management</Badge><h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Documents</h1><p className="mt-1 text-sm text-slate-500">Organize downloadable learning files and control member access.</p></div><div className="flex gap-2"><Button variant="outline" onClick={() => notify("Storage usage report opened")}><HardDrive /> Storage</Button><Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => notify("Document upload panel opened — UI demo")}><FileUp /> Upload document</Button></div></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><DocumentSummary label="Documents" value="186" note="14 added this month" icon={FileText} /><DocumentSummary label="Total downloads" value="42.8k" note="+18.6% this month" icon={Download} /><DocumentSummary label="Premium files" value="112" note="60% of library" icon={ShieldCheck} /><DocumentSummary label="Storage used" value="8.4 GB" note="of 25 GB available" icon={HardDrive} /></div>
    <Card><CardHeader className="gap-4"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><CardTitle>Document library</CardTitle><CardDescription>Training files, templates, worksheets, and guides</CardDescription></div><Badge variant="outline">186 files</Badge></div><div className="flex flex-col gap-2 lg:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><Input value={query} onChange={event => setQuery(event.target.value)} className="pl-9" placeholder="Search file, course, or category" /></div><FilterMenu label={type} options={["All files", "PDF", "XLSX", "DOCX"]} onSelect={setType} /><FilterMenu label={access} options={["All access", "Free", "Premium"]} onSelect={setAccess} />{selected.length > 0 && <DropdownMenu><DropdownMenuTrigger asChild><Button>{selected.length} selected <ChevronDown /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuLabel>Bulk actions</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem onClick={() => applyBulk("Published")}><Eye /> Publish</DropdownMenuItem><DropdownMenuItem onClick={() => applyBulk("Changed to premium:")}><ShieldCheck /> Set premium</DropdownMenuItem><DropdownMenuItem onClick={() => applyBulk("Downloaded")}><Download /> Download files</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem variant="destructive" onClick={() => applyBulk("Archived")}><Archive /> Archive</DropdownMenuItem></DropdownMenuContent></DropdownMenu>}</div></CardHeader><CardContent className="px-0"><Table><TableHeader><TableRow><TableHead className="w-12 pl-6"><Checkbox checked={allSelected ? true : selected.length ? "indeterminate" : false} onCheckedChange={() => setSelected(allSelected ? [] : rows.map(document => document.title))} aria-label="Select all documents" /></TableHead><TableHead>Document</TableHead><TableHead>Course</TableHead><TableHead>File</TableHead><TableHead>Access</TableHead><TableHead>Downloads</TableHead><TableHead>Status</TableHead><TableHead>Updated</TableHead><TableHead className="w-12" /></TableRow></TableHeader><TableBody>{rows.map(document => <TableRow key={document.title} data-state={selected.includes(document.title) ? "selected" : undefined}><TableCell className="pl-6"><Checkbox checked={selected.includes(document.title)} onCheckedChange={() => setSelected(current => current.includes(document.title) ? current.filter(title => title !== document.title) : [...current, document.title])} aria-label={`Select ${document.title}`} /></TableCell><TableCell><div className="flex min-w-[230px] items-center gap-3"><span className={`grid size-10 shrink-0 place-items-center rounded-lg ${document.type === "XLSX" ? "bg-emerald-50 text-emerald-700" : document.type === "DOCX" ? "bg-sky-50 text-sky-700" : "bg-rose-50 text-rose-700"}`}>{document.type === "XLSX" ? <FileSpreadsheet className="size-5" /> : <FileText className="size-5" />}</span><div><p className="text-sm font-medium">{document.title}</p><p className="text-xs text-slate-500">{document.category}</p></div></div></TableCell><TableCell className="max-w-[220px] text-sm text-slate-600">{document.course}</TableCell><TableCell><p className="text-sm">{document.type}</p><p className="text-xs text-slate-400">{document.size}</p></TableCell><TableCell><Badge variant={document.access === "Free" ? "secondary" : "outline"}>{document.access}</Badge></TableCell><TableCell className="text-sm text-slate-600">{document.downloads.toLocaleString()}</TableCell><TableCell><Badge className={document.status === "Published" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}>{document.status}</Badge></TableCell><TableCell className="whitespace-nowrap text-xs text-slate-500">{document.updated}</TableCell><TableCell><DocumentRowMenu document={document.title} notify={notify} /></TableCell></TableRow>)}{rows.length === 0 && <TableRow><TableCell colSpan={9} className="h-40 text-center"><FileText className="mx-auto mb-2 size-6 text-slate-400" /><p className="text-sm font-medium">No matching documents</p><p className="text-xs text-slate-500">Try another file type, access level, or search.</p><Button variant="link" size="sm" onClick={() => { setQuery(""); setType("All files"); setAccess("All access"); }}>Clear filters</Button></TableCell></TableRow>}</TableBody></Table><div className="flex items-center justify-between border-t px-6 py-3 text-xs text-slate-500"><span>Showing {rows.length} demo documents</span><span>8.4 GB of 25 GB used</span></div></CardContent></Card>
  </>
}

function DocumentSummary({ label, value, note, icon: Icon }: { label: string; value: string; note: string; icon: typeof Users }) {
  return <Card><CardContent className="flex items-center gap-4 pt-5"><span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="size-5" /></span><div><strong className="text-2xl font-semibold">{value}</strong><p className="text-sm text-slate-700">{label}</p><small className="text-xs text-slate-400">{note}</small></div></CardContent></Card>
}

function DocumentRowMenu({ document, notify }: { document: string; notify: (message: string) => void }) {
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => notify(`${document} preview opened`)}><Eye /> Preview</DropdownMenuItem><DropdownMenuItem onClick={() => notify(`${document} details editor opened`)}><Pencil /> Edit details</DropdownMenuItem><DropdownMenuItem onClick={() => notify(`${document} download ready`)}><Download /> Download</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem variant="destructive" onClick={() => notify(`${document} archive confirmation opened`)}><Archive /> Archive</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
}

function MemberSummary({ label, value, note, icon: Icon, warning = false }: { label: string; value: string; note: string; icon: typeof Users; warning?: boolean }) {
  return <Card><CardContent className="flex items-center gap-4 pt-5"><span className={`grid size-11 place-items-center rounded-xl ${warning ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}><Icon className="size-5" /></span><div><strong className="text-2xl font-semibold">{value}</strong><p className="text-sm text-slate-700">{label}</p><small className="text-xs text-slate-400">{note}</small></div></CardContent></Card>
}

function AdminModulePreview({ active, notify }: { active: string; notify: (message: string) => void }) {
  return <div className="grid min-h-[65vh] place-items-center"><Card className="w-full max-w-xl text-center"><CardContent className="space-y-4 py-12"><span className="mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><Settings className="size-6" /></span><div><Badge variant="secondary">Next module</Badge><h1 className="mt-3 text-2xl font-semibold">{active}</h1><p className="mt-2 text-sm text-slate-500">The navigation structure is ready. This module&apos;s detailed UI will be added in the next design slice.</p></div><Button onClick={() => notify(`${active} quick action opened — UI demo`)}><Plus /> Create {active.toLowerCase()} item</Button></CardContent></Card></div>
}

function RowMenu({ notify }: { notify: (message: string) => void }) {
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => notify("Member profile opened")}>View profile</DropdownMenuItem><DropdownMenuItem onClick={() => notify("Member status editor opened")}>Change status</DropdownMenuItem><DropdownMenuItem onClick={() => notify("Message composer opened")}>Send message</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
}
