"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  LockKeyhole,
  Search,
  SlidersHorizontal,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const courses = [
  {
    slug: "project-management-foundations",
    title: "Project Management Foundations",
    category: "Leadership",
    level: "Beginner",
    duration: "6h 30m",
    lessons: 24,
    rating: 4.9,
    students: 3200,
    premium: false,
    color: "from-rose-400 to-orange-400",
    initials: "PM",
  },
  {
    slug: "data-analysis-with-excel",
    title: "Data Analysis with Excel",
    category: "Business",
    level: "Intermediate",
    duration: "8h 15m",
    lessons: 32,
    rating: 4.8,
    students: 2700,
    premium: true,
    color: "from-violet-500 to-indigo-500",
    initials: "DA",
  },
  {
    slug: "workplace-health-safety",
    title: "Workplace Health & Safety",
    category: "Compliance",
    level: "Beginner",
    duration: "4h 20m",
    lessons: 18,
    rating: 4.9,
    students: 5100,
    premium: false,
    color: "from-amber-400 to-orange-500",
    initials: "HS",
  },
  {
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    category: "Marketing",
    level: "Advanced",
    duration: "10h 40m",
    lessons: 36,
    rating: 4.7,
    students: 1900,
    premium: true,
    color: "from-sky-500 to-blue-600",
    initials: "DM",
  },
  {
    slug: "effective-team-leadership",
    title: "Effective Team Leadership",
    category: "Leadership",
    level: "Intermediate",
    duration: "7h 10m",
    lessons: 28,
    rating: 4.8,
    students: 2400,
    premium: true,
    color: "from-emerald-500 to-teal-600",
    initials: "TL",
  },
  {
    slug: "sustainable-development-goals",
    title: "Sustainable Development Goals",
    category: "Compliance",
    level: "Beginner",
    duration: "5h 45m",
    lessons: 20,
    rating: 4.9,
    students: 4300,
    premium: false,
    color: "from-lime-500 to-green-600",
    initials: "SD",
  },
  {
    slug: "business-communication-essentials",
    title: "Business Communication Essentials",
    category: "Business",
    level: "Beginner",
    duration: "3h 50m",
    lessons: 16,
    rating: 4.6,
    students: 1800,
    premium: false,
    color: "from-cyan-500 to-teal-500",
    initials: "BC",
  },
  {
    slug: "strategic-decision-making",
    title: "Strategic Decision Making",
    category: "Leadership",
    level: "Advanced",
    duration: "9h 25m",
    lessons: 30,
    rating: 4.8,
    students: 1400,
    premium: true,
    color: "from-fuchsia-500 to-purple-600",
    initials: "SM",
  },
  {
    slug: "social-media-campaign-planning",
    title: "Social Media Campaign Planning",
    category: "Marketing",
    level: "Intermediate",
    duration: "6h 05m",
    lessons: 22,
    rating: 4.7,
    students: 2200,
    premium: true,
    color: "from-pink-500 to-rose-500",
    initials: "SC",
  },
];

const categories = ["All", "Leadership", "Business", "Compliance", "Marketing"];
const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];

export function CoursesCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All levels");
  const [access, setAccess] = useState<"All" | "Free" | "Premium">("All");
  const [sort, setSort] = useState<"Popular" | "Rating" | "Newest">("Popular");

  const filtered = useMemo(() => {
    const result = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) &&
        (category === "All" || course.category === category) &&
        (level === "All levels" || course.level === level) &&
        (access === "All" ||
          (access === "Premium" ? course.premium : !course.premium)),
    );
    return [...result].sort((a, b) =>
      sort === "Rating"
        ? b.rating - a.rating
        : sort === "Newest"
          ? b.lessons - a.lessons
          : b.students - a.students,
    );
  }, [access, category, level, query, sort]);

  const reset = () => {
    setQuery("");
    setCategory("All");
    setLevel("All levels");
    setAccess("All");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-600 text-white">
              <GraduationCap className="size-5" />
            </span>
            <strong className="text-lg font-semibold">
              Certi<span className="text-emerald-600">Learn</span>
            </strong>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            <Button asChild variant="ghost">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="secondary">Courses</Button>
            <Button asChild variant="ghost">
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/about">About</Link>
            </Button>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/register">Start learning</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="border-b bg-slate-950 px-5 py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <Badge className="mb-4 bg-emerald-400/10 text-emerald-300">
            <BookOpen /> Course library
          </Badge>
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Build practical skills at your own pace.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Explore free and premium training designed for measurable
                progress and recognized certificates.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by course title..."
                className="h-12 border-white/10 bg-white pl-12 text-slate-950 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <Card className="mb-8 gap-4 py-4 shadow-none">
          <CardContent className="flex flex-col gap-4 px-4 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2 text-sm font-medium">
              <SlidersHorizontal className="size-4 text-emerald-600" /> Filters
            </div>
            <div className="flex flex-1 flex-wrap gap-2">
              {categories.map((item) => (
                <Button
                  key={item}
                  size="sm"
                  variant={category === item ? "default" : "outline"}
                  className={cn(category === item && "bg-slate-900")}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                aria-label="Filter by level"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                className="h-8 rounded-lg border bg-white px-3 text-xs outline-none focus:ring-2 focus:ring-emerald-500/30"
              >
                {levels.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              <select
                aria-label="Filter by access"
                value={access}
                onChange={(event) =>
                  setAccess(event.target.value as typeof access)
                }
                className="h-8 rounded-lg border bg-white px-3 text-xs outline-none focus:ring-2 focus:ring-emerald-500/30"
              >
                <option>All</option>
                <option>Free</option>
                <option>Premium</option>
              </select>
            </div>
          </CardContent>
        </Card>

        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Available courses</h2>
            <p className="mt-1 text-sm text-slate-500">
              Showing {filtered.length} of {courses.length} courses
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            Sort by{" "}
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as typeof sort)}
              className="h-8 rounded-lg border bg-white px-3 font-medium text-slate-900"
            >
              <option>Popular</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {filtered.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((course) => (
              <Card
                key={course.title}
                className="group gap-0 py-0 shadow-none transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={cn(
                    "relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br",
                    course.color,
                  )}
                >
                  <span className="text-5xl font-semibold tracking-tighter text-white/25">
                    {course.initials}
                  </span>
                  <Badge className="absolute left-4 top-4 bg-slate-950/70 text-white">
                    {course.premium ? (
                      <>
                        <LockKeyhole /> Premium
                      </>
                    ) : (
                      <>
                        <CheckCircle2 /> Free
                      </>
                    )}
                  </Badge>
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-900">
                    {course.level}
                  </span>
                </div>
                <CardContent className="flex-1 p-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-emerald-700">
                      {course.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Star className="size-3.5 fill-amber-400 text-amber-400" />{" "}
                      {course.rating}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6">
                    {course.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock3 className="size-3.5" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="size-3.5" /> {course.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="size-3.5" />{" "}
                      {(course.students / 1000).toFixed(1)}k
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="justify-between bg-slate-50/80 px-5 py-3">
                  <span className="text-xs text-slate-500">
                    Certificate eligible
                  </span>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-emerald-700"
                  >
                    <Link href={`/courses/${course.slug}`}>
                      View course <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="items-center py-16 text-center shadow-none">
            <span className="grid size-12 place-items-center rounded-full bg-slate-100 text-slate-500">
              <Search className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">No matching courses</h3>
            <p className="max-w-sm text-sm text-slate-500">
              Try another keyword or clear your current filters.
            </p>
            <Button onClick={reset} variant="outline">
              Clear all filters
            </Button>
          </Card>
        )}
      </section>
    </main>
  );
}
