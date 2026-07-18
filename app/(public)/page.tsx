"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bell,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CirclePlay,
  Clock3,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  ListVideo,
  LockKeyhole,
  Maximize,
  Menu,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Volume2,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { CertificateVerification } from "@/components/certificate-verification";

type Course = {
  title: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  rating: string;
  students: string;
  premium: boolean;
  color: string;
  icon: string;
};

const courses: Course[] = [
  {
    title: "Project Management Foundations",
    category: "Leadership",
    level: "Beginner",
    duration: "6h 30m",
    lessons: 24,
    rating: "4.9",
    students: "3.2k",
    premium: false,
    color: "coral",
    icon: "PM",
  },
  {
    title: "Data Analysis with Excel",
    category: "Business",
    level: "Intermediate",
    duration: "8h 15m",
    lessons: 32,
    rating: "4.8",
    students: "2.7k",
    premium: true,
    color: "violet",
    icon: "DA",
  },
  {
    title: "Workplace Health & Safety",
    category: "Compliance",
    level: "Beginner",
    duration: "4h 20m",
    lessons: 18,
    rating: "4.9",
    students: "5.1k",
    premium: false,
    color: "gold",
    icon: "HS",
  },
  {
    title: "Digital Marketing Strategy",
    category: "Marketing",
    level: "Advanced",
    duration: "10h 40m",
    lessons: 36,
    rating: "4.7",
    students: "1.9k",
    premium: true,
    color: "blue",
    icon: "DM",
  },
  {
    title: "Effective Team Leadership",
    category: "Leadership",
    level: "Intermediate",
    duration: "7h 10m",
    lessons: 28,
    rating: "4.8",
    students: "2.4k",
    premium: true,
    color: "mint",
    icon: "TL",
  },
  {
    title: "Sustainable Development Goals",
    category: "Compliance",
    level: "Beginner",
    duration: "5h 45m",
    lessons: 20,
    rating: "4.9",
    students: "4.3k",
    premium: false,
    color: "green",
    icon: "SD",
  },
];

const categories = [
  "All courses",
  "Leadership",
  "Business",
  "Compliance",
  "Marketing",
];

export default function Home() {
  const [view, setView] = useState<"home" | "course" | "verify">("home");
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);
  const [activeCategory, setActiveCategory] = useState("All courses");
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState("");

  const filtered = useMemo(
    () =>
      courses.filter(
        (course) =>
          (activeCategory === "All courses" ||
            course.category === activeCategory) &&
          course.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [activeCategory, query],
  );

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2600);
  };

  const goHome = () => {
    setView("home");
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goAdmin = () => {
    window.location.assign("/admin");
  };
  const goLogin = () => {
    window.location.assign("/login");
  };
  const goRegister = () => {
    window.location.assign("/register");
  };
  const goVerify = () => {
    setView("verify");
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openCourse = (course: Course) => {
    setSelectedCourse(course);
    setView("course");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={goHome} aria-label="CertiLearn home">
          <span className="brand-mark">
            <GraduationCap size={22} />
          </span>
          <span>
            Certi<span>Learn</span>
          </span>
        </button>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
          <button onClick={goHome}>Explore</button>
          <button
            onClick={() => {
              goHome();
              setTimeout(
                () =>
                  document
                    .querySelector("#courses")
                    ?.scrollIntoView({ behavior: "smooth" }),
                30,
              );
            }}
          >
            Courses
          </button>
          <button
            onClick={() => {
              goHome();
              setTimeout(
                () =>
                  document
                    .querySelector("#plans")
                    ?.scrollIntoView({ behavior: "smooth" }),
                30,
              );
            }}
          >
            Plans
          </button>
          <button onClick={goVerify}>Verify certificate</button>
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Notifications"
            onClick={() => showToast("You have 3 new notifications")}
          >
            <Bell size={19} />
            <i />
          </button>
          <button className="admin-link" onClick={goAdmin}>
            <ShieldCheck size={16} /> Admin
          </button>
          <button className="login-link" onClick={goLogin}>
            Log in
          </button>
          <button className="register-link" onClick={goRegister}>
            Create account
          </button>
          <button
            className="menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {view === "home" ? (
        <>
          <section className="hero">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={14} /> Skills that move you forward
              </div>
              <h1>
                Learn globally.
                <br />
                Get <em>recognized.</em>
              </h1>
              <p>
                Build practical skills with expert-led training, premium
                resources, and certificates trusted across borders.
              </p>
              <div className="hero-actions">
                <button
                  className="primary-btn"
                  onClick={() =>
                    document
                      .querySelector("#courses")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore courses <ArrowRight size={18} />
                </button>
                <button
                  className="watch-btn"
                  onClick={() => showToast("Welcome video started")}
                >
                  <span>
                    <Play size={16} fill="currentColor" />
                  </span>{" "}
                  See how it works
                </button>
              </div>
              <div className="social-proof">
                <div className="avatar-stack">
                  <b>JT</b>
                  <b>LM</b>
                  <b>AK</b>
                  <b>+2k</b>
                </div>
                <span>
                  <strong>12,000+ learners</strong>
                  <small>from 80+ countries</small>
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-card main-visual">
                <div className="visual-top">
                  <span>FEATURED LEARNING PATH</span>
                  <button>
                    <Globe2 size={16} />
                  </button>
                </div>
                <div className="course-art">
                  <div className="art-lines" />
                  <div className="play-disc">
                    <Play fill="currentColor" />
                  </div>
                  <span className="floating-pill">Leadership</span>
                </div>
                <div className="visual-info">
                  <small>PROFESSIONAL CERTIFICATE</small>
                  <h3>Lead teams with clarity & confidence</h3>
                  <div className="progress-line">
                    <i />
                    <span>68%</span>
                  </div>
                </div>
              </div>
              <div className="mini-card certificate-float">
                <span>
                  <Award />
                </span>
                <div>
                  <small>Certificate earned</small>
                  <strong>Project Management</strong>
                </div>
                <Check />
              </div>
              <div className="mini-card learners-float">
                <span>
                  <Users />
                </span>
                <div>
                  <strong>2,450</strong>
                  <small>learning now</small>
                </div>
              </div>
            </div>
          </section>

          <section className="trust-strip">
            <span>Trusted learning for teams at</span>
            <div>
              <b>Northstar</b>
              <b>SUMMIT</b>
              <b>Acumen</b>
              <b>greenline</b>
              <b>VANTAGE</b>
            </div>
          </section>

          <section className="courses-section" id="courses">
            <div className="section-head">
              <div>
                <span className="kicker">EXPLORE COURSES</span>
                <h2>Skills for your next chapter</h2>
                <p>
                  Practical, expert-led training designed to fit your goals and
                  schedule.
                </p>
              </div>
              <button
                className="text-btn"
                onClick={() => {
                  setActiveCategory("All courses");
                  setQuery("");
                }}
              >
                View all courses <ArrowRight size={17} />
              </button>
            </div>
            <div className="course-tools">
              <div className="category-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={activeCategory === category ? "active" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <label className="search-box">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses"
                />
              </label>
            </div>
            <div className="course-grid">
              {filtered.map((course) => (
                <CourseCard
                  key={course.title}
                  course={course}
                  onOpen={() => openCourse(course)}
                />
              ))}
              {!filtered.length && (
                <div className="empty-state">
                  <Search />
                  <h3>No courses found</h3>
                  <p>Try another keyword or category.</p>
                </div>
              )}
            </div>
          </section>

          <section className="how-section">
            <div className="section-head centered">
              <div>
                <span className="kicker">YOUR LEARNING JOURNEY</span>
                <h2>From curious to certified</h2>
                <p>
                  Everything you need to learn, grow, and prove your skills.
                </p>
              </div>
            </div>
            <div className="steps">
              <Step
                n="01"
                icon={<Search />}
                title="Choose your path"
                copy="Explore free and premium courses built around practical outcomes."
              />
              <Step
                n="02"
                icon={<CirclePlay />}
                title="Learn at your pace"
                copy="Watch lessons, use resources, and track every milestone."
              />
              <Step
                n="03"
                icon={<Award />}
                title="Earn your certificate"
                copy="Complete your course and receive a verifiable credential."
              />
            </div>
          </section>

          <section className="plans-section" id="plans">
            <div className="plan-copy">
              <span className="kicker light">MEMBERSHIP</span>
              <h2>One plan. Unlimited growth.</h2>
              <p>
                Get full access to premium training, downloadable resources, and
                professional certificates.
              </p>
              <ul>
                <li>
                  <Check /> 80+ premium courses
                </li>
                <li>
                  <Check /> Downloadable templates & guides
                </li>
                <li>
                  <Check /> Verifiable course certificates
                </li>
                <li>
                  <Check /> Learn anytime, on any device
                </li>
              </ul>
            </div>
            <div className="price-card">
              <span className="popular">BEST VALUE</span>
              <div className="billing">
                <button>Monthly</button>
                <button className="active">
                  Yearly <small>Save 35%</small>
                </button>
              </div>
              <div className="price">
                <sup>$</sup>
                <strong>99</strong>
                <span>
                  / year<small>Just $8.25 per month</small>
                </span>
              </div>
              <button
                className="white-btn"
                onClick={() => showToast("Plan selected — checkout is UI-only")}
              >
                Start your membership <ArrowRight />
              </button>
              <p>
                <ShieldCheck /> 14-day money-back guarantee
              </p>
            </div>
          </section>

          <footer>
            <div className="brand footer-brand">
              <span className="brand-mark">
                <GraduationCap size={22} />
              </span>
              <span>
                Certi<span>Learn</span>
              </span>
            </div>
            <p>Learning without borders. Recognition without limits.</p>
            <div>
              <button>About</button>
              <button>Support</button>
              <Link
                className="text-[10px] text-[#6f7a8c]"
                href="/privacy-policy"
              >
                Privacy
              </Link>
              <Link className="text-[10px] text-[#6f7a8c]" href="/terms">
                Terms
              </Link>
            </div>
            <small>© 2026 CertiLearn. UI concept only.</small>
          </footer>
        </>
      ) : view === "course" ? (
        <CourseDetail
          course={selectedCourse}
          onBack={goHome}
          showToast={showToast}
        />
      ) : (
        <CertificateVerification onBack={goHome} notify={showToast} />
      )}

      {toast && (
        <div className="toast">
          <Check size={17} />
          {toast}
        </div>
      )}
    </main>
  );
}

function CourseCard({
  course,
  onOpen,
}: {
  course: Course;
  onOpen: () => void;
}) {
  return (
    <article className="course-card">
      <div className={`course-cover ${course.color}`}>
        <span className="course-monogram">{course.icon}</span>
        <button className="cover-play" onClick={onOpen}>
          <Play size={17} fill="currentColor" />
        </button>
        {course.premium && (
          <span className="premium-tag">
            <LockKeyhole size={11} /> Premium
          </span>
        )}
      </div>
      <div className="course-body">
        <div className="course-meta">
          <span>{course.category}</span>
          <span>
            <Star size={13} fill="currentColor" /> {course.rating}
          </span>
        </div>
        <h3>{course.title}</h3>
        <div className="course-facts">
          <span>
            <Clock3 />
            {course.duration}
          </span>
          <span>
            <BookOpen />
            {course.lessons} lessons
          </span>
          <span>
            <Users />
            {course.students}
          </span>
        </div>
        <div className="course-footer">
          <span className="level">{course.level}</span>
          <button onClick={onOpen}>
            View course <ChevronRight />
          </button>
        </div>
      </div>
    </article>
  );
}

function Step({
  n,
  icon,
  title,
  copy,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="step-card">
      <span className="step-number">{n}</span>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
}

const lessonGroups = [
  {
    title: "Getting started",
    duration: "42 min",
    lessons: [
      "Welcome & course roadmap",
      "How projects create value",
      "The project lifecycle",
    ],
  },
  {
    title: "Planning for success",
    duration: "1h 35 min",
    lessons: [
      "Defining goals and scope",
      "Building a practical timeline",
      "People, roles and responsibility",
    ],
  },
  {
    title: "Managing the work",
    duration: "2h 10 min",
    lessons: [
      "Leading productive meetings",
      "Tracking delivery and quality",
      "Managing risk with confidence",
    ],
  },
  {
    title: "Close and certify",
    duration: "58 min",
    lessons: [
      "Closing a project well",
      "Final knowledge check",
      "Your certificate pathway",
    ],
  },
];

function CourseDetail({
  course,
  onBack,
  showToast,
}: {
  course: Course;
  onBack: () => void;
  showToast: (m: string) => void;
}) {
  const [activeLesson, setActiveLesson] = useState("Welcome & course roadmap");
  const [enrolled, setEnrolled] = useState(false);
  const [tab, setTab] = useState<"overview" | "curriculum" | "resources">(
    "overview",
  );

  return (
    <div className="course-page">
      <section className="course-detail-hero">
        <button className="back-link" onClick={onBack}>
          <ArrowLeft /> Back to courses
        </button>
        <div className="course-detail-grid">
          <div className="course-detail-copy">
            <div className="detail-badges">
              <span>{course.category}</span>
              <span>{course.level}</span>
              {course.premium && (
                <span className="premium">
                  <LockKeyhole /> Premium
                </span>
              )}
            </div>
            <h1>{course.title}</h1>
            <p>
              Build practical, job-ready skills through clear video lessons,
              guided exercises, and downloadable tools you can use immediately.
            </p>
            <div className="detail-rating">
              <strong>{course.rating}</strong>
              <span className="stars">★★★★★</span>
              <span>({course.students} learners)</span>
            </div>
            <div className="instructor-line">
              <span className="instructor-avatar">JN</span>
              <div>
                <small>YOUR INSTRUCTOR</small>
                <strong>Dr. Jordan Nwosu</strong>
              </div>
              <i />
              <span>
                <Globe2 /> English · Captions included
              </span>
            </div>
          </div>
          <div className={`detail-preview ${course.color}`}>
            <span className="course-monogram">{course.icon}</span>
            <button onClick={() => setActiveLesson("Course preview")}>
              <Play fill="currentColor" />
            </button>
            <small>PREVIEW THIS COURSE</small>
          </div>
        </div>
      </section>

      <section className="course-detail-body">
        <div className="course-main-column">
          <div className="detail-tabs">
            <button
              className={tab === "overview" ? "active" : ""}
              onClick={() => setTab("overview")}
            >
              Overview
            </button>
            <button
              className={tab === "curriculum" ? "active" : ""}
              onClick={() => setTab("curriculum")}
            >
              Curriculum
            </button>
            <button
              className={tab === "resources" ? "active" : ""}
              onClick={() => setTab("resources")}
            >
              Resources
            </button>
          </div>
          {tab === "overview" && (
            <div className="detail-content">
              <h2>What you&apos;ll learn</h2>
              <div className="learning-outcomes">
                {[
                  "Turn broad goals into a clear, actionable project plan",
                  "Build realistic timelines and assign responsibility",
                  "Track progress, communicate risks, and keep teams aligned",
                  "Complete the course requirements for a verified certificate",
                ].map((x) => (
                  <div key={x}>
                    <CheckCircle2 />
                    {x}
                  </div>
                ))}
              </div>
              <h2>About this course</h2>
              <p>
                This course combines concise instruction with practical examples
                from global organizations. Each module includes a downloadable
                field guide and a short reflection activity, so learning stays
                focused and useful.
              </p>
              <div className="course-numbers">
                <span>
                  <Clock3 />
                  <strong>{course.duration}</strong>
                  <small>on-demand video</small>
                </span>
                <span>
                  <ListVideo />
                  <strong>{course.lessons} lessons</strong>
                  <small>across 4 modules</small>
                </span>
                <span>
                  <FileText />
                  <strong>12 resources</strong>
                  <small>templates and guides</small>
                </span>
                <span>
                  <Award />
                  <strong>Certificate</strong>
                  <small>after completion</small>
                </span>
              </div>
            </div>
          )}
          {tab === "curriculum" && (
            <Curriculum
              activeLesson={activeLesson}
              setActiveLesson={setActiveLesson}
            />
          )}
          {tab === "resources" && (
            <div className="detail-content">
              <h2>Course resources</h2>
              <p>Preview the practical downloads included with this course.</p>
              <div className="resource-list">
                {[
                  "Project charter template.pdf",
                  "Timeline planning worksheet.xlsx",
                  "Risk assessment checklist.pdf",
                  "Stakeholder communication guide.pdf",
                ].map((name, i) => (
                  <div key={name}>
                    <span>
                      <FileText />
                    </span>
                    <div>
                      <strong>{name}</strong>
                      <small>{i === 1 ? "XLSX · 48 KB" : "PDF · 1.2 MB"}</small>
                    </div>
                    <button
                      onClick={() =>
                        showToast(
                          enrolled
                            ? `${name} ready to download`
                            : "Enroll to unlock course resources",
                        )
                      }
                    >
                      {enrolled ? <Download /> : <LockKeyhole />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <aside className="enroll-card">
          <div className="enroll-price">
            {course.premium ? (
              <>
                <strong>Included</strong>
                <span>with Premium membership</span>
              </>
            ) : (
              <>
                <strong>Free</strong>
                <span>Full course access</span>
              </>
            )}
          </div>
          <button
            className="primary-btn"
            onClick={() => {
              setEnrolled(true);
              showToast("You’re enrolled — welcome to the course!");
            }}
          >
            {enrolled ? (
              <>
                <Check /> Enrolled
              </>
            ) : (
              <>
                Start learning <ArrowRight />
              </>
            )}
          </button>
          <small>No credit card required</small>
          <hr />
          <h3>This course includes</h3>
          <ul>
            <li>
              <CirclePlay /> {course.duration} video
            </li>
            <li>
              <FileText /> 12 downloadable resources
            </li>
            <li>
              <Globe2 /> English captions
            </li>
            <li>
              <Award /> Verified certificate
            </li>
          </ul>
          <div className="certificate-note">
            <ShieldCheck />
            <span>
              <strong>Certificate eligible</strong>
              <small>Complete all lessons and the final check.</small>
            </span>
          </div>
        </aside>
      </section>

      {activeLesson && activeLesson !== "Welcome & course roadmap" && (
        <LessonPlayer
          title={activeLesson}
          onClose={() => setActiveLesson("Welcome & course roadmap")}
          onComplete={() => showToast("Lesson marked complete — great work!")}
        />
      )}
    </div>
  );
}

function Curriculum({
  activeLesson,
  setActiveLesson,
}: {
  activeLesson: string;
  setActiveLesson: (lesson: string) => void;
}) {
  return (
    <div className="curriculum">
      <div className="curriculum-head">
        <div>
          <h2>Course curriculum</h2>
          <p>4 modules · 12 lessons · 6h 30m total</p>
        </div>
        <span>1 of 12 complete</span>
      </div>
      {lessonGroups.map((group, gi) => (
        <div className="module" key={group.title}>
          <div className="module-head">
            <span>{String(gi + 1).padStart(2, "0")}</span>
            <div>
              <strong>{group.title}</strong>
              <small>
                {group.lessons.length} lessons · {group.duration}
              </small>
            </div>
            <ChevronDown />
          </div>
          {group.lessons.map((lesson, li) => (
            <button
              className={activeLesson === lesson ? "active" : ""}
              onClick={() => setActiveLesson(lesson)}
              key={lesson}
            >
              <span
                className={gi === 0 && li === 0 ? "lesson-done" : "lesson-play"}
              >
                {gi === 0 && li === 0 ? (
                  <Check />
                ) : (
                  <Play fill="currentColor" />
                )}
              </span>
              <div>
                <strong>{lesson}</strong>
                <small>Video · {8 + li * 4} min</small>
              </div>
              {gi > 0 && <LockKeyhole />}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

function LessonPlayer({
  title,
  onClose,
  onComplete,
}: {
  title: string;
  onClose: () => void;
  onComplete: () => void;
}) {
  return (
    <div className="player-overlay">
      <div className="player-modal">
        <div className="player-top">
          <div>
            <small>PROJECT MANAGEMENT FOUNDATIONS</small>
            <strong>{title}</strong>
          </div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="video-stage">
          <div className="video-symbol">
            <Play fill="currentColor" />
          </div>
          <div className="video-caption">Interactive video preview</div>
          <div className="video-controls">
            <button>
              <Play fill="currentColor" />
            </button>
            <span>02:18</span>
            <i>
              <b />
            </i>
            <span>12:40</span>
            <button>
              <Volume2 />
            </button>
            <button>
              <Maximize />
            </button>
          </div>
        </div>
        <div className="player-bottom">
          <div>
            <span>Lesson 2 of 12</span>
            <p>Use this mock player to preview the learner experience.</p>
          </div>
          <button onClick={onComplete}>
            Mark complete <Check />
          </button>
        </div>
      </div>
    </div>
  );
}
