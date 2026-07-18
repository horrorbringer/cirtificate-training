"use client";

import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Clock3,
  GraduationCap,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const news = [
  {
    title: "Data Analysis with Excel is now available",
    copy: "Build practical spreadsheet and visualization skills through eight modules, downloadable templates, and a final assessment.",
    category: "New course",
    date: "July 19, 2026",
    read: "3 min read",
    featured: true,
    icon: BookOpen,
  },
  {
    title: "Scheduled platform maintenance on July 24",
    copy: "The learning portal will be available in read-only mode for approximately 30 minutes during infrastructure updates.",
    category: "Platform update",
    date: "July 18, 2026",
    read: "2 min read",
    featured: false,
    icon: ShieldCheck,
  },
  {
    title: "Certificate reviews now completed within two business days",
    copy: "Updated review workflows are helping eligible learners receive verified credentials faster.",
    category: "Certificates",
    date: "July 16, 2026",
    read: "2 min read",
    featured: false,
    icon: GraduationCap,
  },
  {
    title: "New leadership templates added to the resource library",
    copy: "Premium members can download conversation planners, feedback guides, and team performance scorecards.",
    category: "Resources",
    date: "July 14, 2026",
    read: "3 min read",
    featured: false,
    icon: Sparkles,
  },
  {
    title: "Welcome to our global learning community",
    copy: "Explore how courses, progress tracking, memberships, downloads, and certificate verification work together.",
    category: "Community",
    date: "July 10, 2026",
    read: "4 min read",
    featured: false,
    icon: Megaphone,
  },
] as const;

export function PublicAnnouncements() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof news)[number] | null>(null);
  const categories = [
    "All",
    "New course",
    "Platform update",
    "Certificates",
    "Resources",
    "Community",
  ];
  const rows = news.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      `${item.title} ${item.copy}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-emerald-600 text-white">
              <GraduationCap className="size-5" />
            </span>
            <strong className="text-lg">
              Certi<span className="text-emerald-600">Learn</span>
            </strong>
          </Link>
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft /> Back to website
            </Link>
          </Button>
        </div>
      </header>
      <section className="relative overflow-hidden bg-slate-950 px-5 py-16 text-center text-white">
        <div className="absolute -left-24 top-12 size-72 rounded-full border-[55px] border-white/[.035]" />
        <div className="relative mx-auto max-w-5xl">
          <Badge className="mb-5 bg-emerald-400/10 text-emerald-300">
            <Bell /> Platform news
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Announcements & updates
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Stay informed about new courses, resources, certificates, and
            platform improvements.
          </p>
          <div className="relative mx-auto mt-7 max-w-xl">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-12 bg-white pl-12 text-slate-900"
              placeholder="Search announcements"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mb-7 flex flex-wrap gap-2">
          {categories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        {rows.length ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {rows.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Card
                  key={item.title}
                  className={`overflow-hidden shadow-none ${item.featured ? "border-emerald-200 lg:col-span-2" : ""}`}
                >
                  <CardContent
                    className={`grid gap-5 p-6 ${item.featured ? "md:grid-cols-[auto_1fr_auto] md:items-center" : ""}`}
                  >
                    <span
                      className={`grid size-12 shrink-0 place-items-center rounded-xl ${item.featured ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"}`}
                    >
                      <ItemIcon className="size-6" />
                    </span>
                    <div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        {item.featured && (
                          <Badge className="bg-amber-100 text-amber-700">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h2 className="text-xl font-semibold">{item.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {item.copy}
                      </p>
                      <div className="mt-4 flex gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="size-3.5" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock3 className="size-3.5" />
                          {item.read}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="self-end text-emerald-700"
                      onClick={() => setSelected(item)}
                    >
                      Read update <ArrowRight />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="shadow-none">
            <CardContent className="py-16 text-center">
              <Search className="mx-auto size-6 text-slate-400" />
              <p className="mt-2 text-sm font-medium">No announcements found</p>
              <p className="mt-1 text-xs text-slate-500">
                Try another category or search phrase.
              </p>
              <Button
                variant="link"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Clear filters
              </Button>
            </CardContent>
          </Card>
        )}
        {selected && (
          <Card className="mt-8 border-emerald-200 shadow-none">
            <CardContent className="p-7">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <Badge variant="secondary">{selected.category}</Badge>
                  <h2 className="mt-3 text-2xl font-semibold">
                    {selected.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    {selected.copy} This expanded UI-only article demonstrates
                    how public updates can provide additional context and
                    relevant links.
                  </p>
                </div>
                <Button variant="ghost" onClick={() => setSelected(null)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        <Card className="mt-10 border-0 bg-emerald-600 text-white">
          <CardContent className="flex flex-col justify-between gap-5 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Get updates inside your dashboard
              </h2>
              <p className="mt-2 text-sm text-emerald-100">
                Create a free account to receive relevant learning and
                certificate notifications.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/register">
                Create account <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
