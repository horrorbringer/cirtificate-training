"use client"

import { ArrowRight, Award, Bell, BookOpen, Check, ChevronDown, CirclePlay, Clock3, Download, FileText, GraduationCap, LayoutDashboard, Menu, Search, ShieldCheck, Sparkles, Star, Users, X } from "lucide-react"
import { useState } from "react"

export function LearnerDashboard({ onBrowse, onSignOut, notify, message }: { onBrowse: () => void; onSignOut: () => void; notify: (message: string) => void; message: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [section, setSection] = useState<"overview" | "courses">("overview")
  return <div className="member-workspace">
    <header className="member-header"><button className="brand" onClick={onBrowse}><span className="brand-mark"><GraduationCap /></span><span>Certi<span>Learn</span></span></button><label className="member-search"><Search /><input placeholder="Search your learning" /></label><div className="member-actions"><button className="icon-btn" onClick={() => notify("You have 3 learning notifications")}><Bell /><i /></button><button className="member-profile" onClick={() => notify("Profile menu opened")}><span>AM</span><div><strong>Amina Mensah</strong><small>Premium member</small></div><ChevronDown /></button><button className="member-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></header>
    <div className="dashboard-shell member-shell">
      <aside className={menuOpen ? "dashboard-sidebar member-sidebar open" : "dashboard-sidebar member-sidebar"}><div><small>MY LEARNING</small><button className={section === "overview" ? "active" : ""} onClick={() => { setSection("overview"); setMenuOpen(false); }}><LayoutDashboard /> Overview</button><button className={section === "courses" ? "active" : ""} onClick={() => { setSection("courses"); setMenuOpen(false); }}><BookOpen /> My courses <i>4</i></button><button onClick={() => notify("Continue learning selected")}><CirclePlay /> Continue learning</button><button onClick={() => notify("Resources selected")}><FileText /> Resources</button><button onClick={() => notify("Certificates selected")}><Award /> Certificates <i>2</i></button></div><div><small>ACCOUNT</small><button onClick={() => notify("Profile settings selected")}><Users /> Profile</button><button onClick={() => notify("Membership selected")}><ShieldCheck /> Membership</button><button onClick={onSignOut}><ArrowRight /> Sign out</button></div><div className="upgrade-card"><Sparkles /><strong>Premium active</strong><span>Renews Feb 18, 2027</span><button onClick={() => notify("Membership settings opened")}>Manage plan</button></div></aside>
      <section className="dashboard-content">
        {section === "overview" ? <>
        <div className="dash-title"><div><span>Sunday, July 19</span><h1>Welcome back, Amina 👋</h1><p>Keep going — you&apos;re making excellent progress.</p></div><button className="primary-btn" onClick={onBrowse}>Browse courses <ArrowRight /></button></div>
        <div className="stats-row"><Stat icon={<Clock3 />} value="18.5h" label="Learning time" note="+2.5h this week" /><Stat icon={<BookOpen />} value="4" label="Courses enrolled" note="2 in progress" /><Stat icon={<Award />} value="2" label="Certificates" note="1 newly earned" /><Stat icon={<Download />} value="14" label="Resources saved" note="3 this month" /></div>
        <div className="dash-grid">
          <div className="continue-panel"><div className="panel-head"><div><h2>Continue learning</h2><p>Pick up right where you left off</p></div><button>View all <ArrowRight /></button></div><div className="continue-card"><div className="continue-art violet"><span>DA</span><button><CirclePlay /></button></div><div className="continue-info"><span>DATA & ANALYTICS</span><h3>Data Analysis with Excel</h3><p>Module 4 of 8 · Visualizing your data</p><div className="long-progress"><i style={{ width: "62%" }} /></div><small>62% complete <b>3h 10m left</b></small><button onClick={() => notify("Lesson player opened")}>Continue lesson <CirclePlay /></button></div></div></div>
          <div className="weekly-panel"><div className="panel-head"><div><h2>Weekly goal</h2><p>July 13–19</p></div><button>•••</button></div><div className="goal-ring"><div><strong>3.5</strong><small>of 5 hours</small></div></div><p>You&apos;re <strong>70%</strong> there. Just 1.5 hours to go!</p><div className="week-dots">{[1,1,1,1,0,0,0].map((on,i)=><span key={i} className={on ? "done" : ""}>{["M","T","W","T","F","S","S"][i]}</span>)}</div></div>
          <div className="cert-panel"><div className="cert-icon"><Award /></div><div><span>NEW CERTIFICATE</span><h3>Project Management Foundations</h3><p>Issued July 12, 2026 · ID CL-2026-1842</p></div><button onClick={() => notify("Certificate download ready")}><span>Download</span><Download /></button></div>
          <div className="activity-panel"><div className="panel-head"><div><h2>Recent activity</h2><p>Your latest learning moments</p></div></div>{[["Completed a lesson","Creating effective project timelines","2 hours ago"],["Downloaded a resource","Risk assessment template.pdf","Yesterday"],["Earned a certificate","Project Management Foundations","July 12"]].map(([a,b,c],i)=><div className="activity" key={b}><span>{i===2?<Award />:i===1?<Download />:<Check />}</span><div><strong>{a}</strong><p>{b}</p></div><small>{c}</small></div>)}</div>
        </div>
        </> : <MyCourses onBrowse={onBrowse} notify={notify} />}
      </section>
    </div>
    {message && <div className="toast"><Check />{message}</div>}
  </div>
}

const enrolledCourses = [
  { title: "Data Analysis with Excel", category: "Data & Analytics", progress: 62, lesson: "Module 4 · Visualizing your data", time: "3h 10m left", color: "violet", code: "DA", rating: "4.8", state: "progress" },
  { title: "Effective Team Leadership", category: "Leadership", progress: 28, lesson: "Module 2 · Building team trust", time: "5h 05m left", color: "mint", code: "TL", rating: "4.8", state: "progress" },
  { title: "Project Management Foundations", category: "Leadership", progress: 100, lesson: "Completed July 12, 2026", time: "Certificate earned", color: "coral", code: "PM", rating: "4.9", state: "completed" },
  { title: "Workplace Health & Safety", category: "Compliance", progress: 100, lesson: "Completed June 24, 2026", time: "Certificate earned", color: "gold", code: "HS", rating: "4.9", state: "completed" },
] as const

function MyCourses({ onBrowse, notify }: { onBrowse: () => void; notify: (message: string) => void }) {
  const [filter, setFilter] = useState<"all" | "progress" | "completed">("all")
  const visible = filter === "all" ? enrolledCourses : enrolledCourses.filter(course => course.state === filter)
  return <div className="my-courses-view">
    <div className="member-section-title"><div><span>MY LEARNING</span><h1>My courses</h1><p>Continue learning, revisit completed training, and track your progress.</p></div><button className="primary-btn" onClick={onBrowse}>Explore more courses <ArrowRight /></button></div>
    <div className="course-summary"><div><BookOpen /><span><strong>4</strong><small>Total courses</small></span></div><div><CirclePlay /><span><strong>2</strong><small>In progress</small></span></div><div><Award /><span><strong>2</strong><small>Completed</small></span></div><div><Clock3 /><span><strong>11.5h</strong><small>Learning time</small></span></div></div>
    <div className="course-filter-row"><div>{(["all","progress","completed"] as const).map(item => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item === "all" ? "All courses" : item === "progress" ? "In progress" : "Completed"}</button>)}</div><label><Search /><input placeholder="Search enrolled courses" /></label></div>
    <div className="enrolled-grid">{visible.map(course => <article className="enrolled-card" key={course.title}><div className={`enrolled-art ${course.color}`}><span>{course.code}</span>{course.state === "completed" ? <i><Check /></i> : <button onClick={() => notify(`${course.title} lesson opened`)}><CirclePlay /></button>}</div><div className="enrolled-copy"><div className="enrolled-category"><span>{course.category}</span><b><Star fill="currentColor" />{course.rating}</b></div><h2>{course.title}</h2><p>{course.lesson}</p><div className="enrolled-progress"><i><b style={{width:`${course.progress}%`}} /></i><span>{course.progress}%</span></div><div className="enrolled-bottom"><small>{course.time}</small><button onClick={() => notify(course.state === "completed" ? `${course.title} review opened` : `${course.title} continued`)}>{course.state === "completed" ? "Review course" : "Continue"}<ArrowRight /></button></div></div></article>)}</div>
  </div>
}

function Stat({ icon, value, label, note }: { icon: React.ReactNode; value: string; label: string; note: string }) {
  return <div className="stat-card"><span>{icon}</span><div><strong>{value}</strong><p>{label}</p><small>{note}</small></div></div>
}
