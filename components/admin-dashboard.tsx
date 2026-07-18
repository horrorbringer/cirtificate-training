"use client"

import {
  Activity, ArrowDownRight, ArrowUpRight, Award, Bell, BookOpen, ChevronDown,
  CircleDollarSign, FileText, GraduationCap, LayoutDashboard, Megaphone, Menu,
  MoreHorizontal, Plus, Search, Settings, ShieldCheck, Users, WalletCards, X,
} from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export function AdminDashboard({ onExit, notify }: { onExit: () => void; notify: (message: string) => void }) {
  const [active, setActive] = useState("Overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-[calc(100vh-78px)] bg-slate-50 text-slate-950">
      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-[1600px] lg:grid-cols-[245px_1fr]">
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
          <header className="sticky top-[78px] z-20 flex h-16 items-center gap-3 border-b bg-white/95 px-4 backdrop-blur md:px-7">
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(true)}><Menu /></Button>
            <div className="relative hidden w-full max-w-sm md:block"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" /><Input className="pl-9" placeholder="Search members, courses, payments…" /></div>
            <div className="ml-auto flex items-center gap-2"><Button variant="outline" size="icon" className="relative" onClick={() => notify("You have 5 admin notifications")}><Bell /><span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-rose-500" /></Button><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="gap-2"><Avatar className="size-7"><AvatarFallback className="bg-emerald-100 text-[10px] text-emerald-700">SA</AvatarFallback></Avatar><span className="hidden text-xs md:inline">Sophia Admin</span><ChevronDown className="size-3" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuLabel>Admin account</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem>Profile</DropdownMenuItem><DropdownMenuItem>Security</DropdownMenuItem><DropdownMenuItem onClick={onExit}>Return to website</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div>
          </header>

          <div className="space-y-6 p-4 md:p-7">
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
                <Card><CardHeader className="flex-row items-center justify-between"><div><CardTitle>New members</CardTitle><CardDescription>Latest registrations from around the world</CardDescription></div><Button variant="outline" size="sm" onClick={() => notify("Member directory opened")}>View all</Button></CardHeader><CardContent className="px-0"><Table><TableHeader><TableRow><TableHead className="pl-6">Member</TableHead><TableHead>Country</TableHead><TableHead>Plan</TableHead><TableHead>Status</TableHead><TableHead>Joined</TableHead><TableHead className="w-12" /></TableRow></TableHeader><TableBody>{members.map(member=><TableRow key={member.email}><TableCell className="pl-6"><div className="flex items-center gap-3"><Avatar className="size-8"><AvatarFallback className="bg-slate-100 text-[10px]">{member.initials}</AvatarFallback></Avatar><div><p className="text-xs font-semibold">{member.name}</p><p className="text-[10px] text-slate-500">{member.email}</p></div></div></TableCell><TableCell className="text-xs text-slate-600">{member.country}</TableCell><TableCell><Badge variant={member.plan === "Free" ? "secondary" : "outline"}>{member.plan}</Badge></TableCell><TableCell><Badge className={member.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}>{member.status}</Badge></TableCell><TableCell className="text-xs text-slate-500">{member.joined}</TableCell><TableCell><RowMenu notify={notify} /></TableCell></TableRow>)}</TableBody></Table></CardContent></Card>
              </TabsContent>
              <TabsContent value="certificates"><Card><CardHeader><CardTitle>Certificate requests</CardTitle><CardDescription>Review eligibility before approving certificates</CardDescription></CardHeader><CardContent className="space-y-3">{certificates.map(([name, course, status, time])=><div key={name} className="flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center"><span className="grid size-10 place-items-center rounded-lg bg-amber-50 text-amber-600"><Award /></span><div className="flex-1"><p className="text-sm font-semibold">{name}</p><p className="text-xs text-slate-500">{course} · {time}</p></div><Badge variant="outline">{status}</Badge><Button size="sm" onClick={() => notify(`${name}'s eligibility review opened`)}>Review</Button></div>)}</CardContent></Card></TabsContent>
            </Tabs>
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

function RowMenu({ notify }: { notify: (message: string) => void }) {
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onClick={() => notify("Member profile opened")}>View profile</DropdownMenuItem><DropdownMenuItem onClick={() => notify("Member status editor opened")}>Change status</DropdownMenuItem><DropdownMenuItem onClick={() => notify("Message composer opened")}>Send message</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
}
