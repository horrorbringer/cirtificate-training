"use client";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  Eye,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  LockKeyhole,
  LogIn,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const resources = [
  {
    title: "Project Charter Template",
    course: "Project Management Foundations",
    category: "Templates",
    type: "DOCX",
    size: "84 KB",
    downloads: 1842,
    premium: false,
    description:
      "A practical charter template for defining goals, scope, owners, and success measures.",
  },
  {
    title: "Risk Register Workbook",
    course: "Project Management Foundations",
    category: "Worksheets",
    type: "XLSX",
    size: "126 KB",
    downloads: 1276,
    premium: true,
    description:
      "Track risks, probability, impact, mitigation actions, and ownership in one workbook.",
  },
  {
    title: "Workplace Safety Checklist",
    course: "Workplace Health & Safety",
    category: "Checklists",
    type: "PDF",
    size: "1.2 MB",
    downloads: 2319,
    premium: false,
    description:
      "A printable checklist for routine workplace safety inspections and follow-up.",
  },
  {
    title: "Campaign Planning Canvas",
    course: "Digital Marketing Strategy",
    category: "Templates",
    type: "PDF",
    size: "2.4 MB",
    downloads: 906,
    premium: true,
    description:
      "Plan campaign audiences, channels, messages, milestones, and performance indicators.",
  },
  {
    title: "Team Feedback Guide",
    course: "Effective Team Leadership",
    category: "Guides",
    type: "PDF",
    size: "980 KB",
    downloads: 3054,
    premium: false,
    description:
      "Conversation prompts and practical frameworks for useful, respectful feedback.",
  },
  {
    title: "SDG Impact Mapping Tool",
    course: "Sustainable Development Goals",
    category: "Worksheets",
    type: "XLSX",
    size: "168 KB",
    downloads: 774,
    premium: true,
    description:
      "Connect organizational initiatives to SDG targets and document measurable impact.",
  },
  {
    title: "Meeting Notes Framework",
    course: "Business Communication Essentials",
    category: "Templates",
    type: "DOCX",
    size: "72 KB",
    downloads: 1655,
    premium: false,
    description:
      "Capture decisions, action owners, deadlines, and unresolved questions clearly.",
  },
  {
    title: "Decision Quality Scorecard",
    course: "Strategic Decision Making",
    category: "Checklists",
    type: "PDF",
    size: "640 KB",
    downloads: 1128,
    premium: true,
    description:
      "Evaluate assumptions, evidence, alternatives, risks, and decision readiness.",
  },
];

const categories = ["All", "Templates", "Worksheets", "Checklists", "Guides"];

export function PublicResources() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [access, setAccess] = useState<"All" | "Free" | "Premium">("All");
  const [sort, setSort] = useState<"Popular" | "Name" | "File type">("Popular");
  const [selected, setSelected] = useState<(typeof resources)[number] | null>(
    null,
  );
  const [gatedResource, setGatedResource] = useState<
    (typeof resources)[number] | null
  >(null);

  const rows = useMemo(() => {
    const filtered = resources.filter(
      (resource) =>
        `${resource.title} ${resource.course} ${resource.category}`
          .toLowerCase()
          .includes(query.toLowerCase()) &&
        (category === "All" || resource.category === category) &&
        (access === "All" ||
          (access === "Premium" ? resource.premium : !resource.premium)),
    );
    return [...filtered].sort((a, b) =>
      sort === "Name"
        ? a.title.localeCompare(b.title)
        : sort === "File type"
          ? a.type.localeCompare(b.type)
          : b.downloads - a.downloads,
    );
  }, [access, category, query, sort]);

  const requestDownload = (resource: (typeof resources)[number]) => {
    setSelected(null);
    setGatedResource(resource);
    window.setTimeout(
      () =>
        document
          .querySelector("#resource-access")
          ?.scrollIntoView({ behavior: "smooth", block: "center" }),
      20,
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white">
        <div className="absolute -left-24 top-8 size-72 rounded-full border-[55px] border-white/[.035]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_410px] lg:items-end">
          <div>
            <Badge className="mb-5 bg-emerald-400/10 text-emerald-300">
              <FolderOpen /> Resource library
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Practical tools for better work.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Browse templates, worksheets, guides, and checklists created to
              support your learning beyond each lesson.
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search resources or courses..."
              className="h-12 border-white/10 bg-white pl-12 text-slate-950 shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Card className="shadow-none">
            <CardContent className="flex items-center gap-4 p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                <FileText />
              </span>
              <div>
                <strong className="text-xl">48</strong>
                <p className="text-xs text-slate-500">Learning resources</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex items-center gap-4 p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-sky-50 text-sky-700">
                <Download />
              </span>
              <div>
                <strong className="text-xl">12.9k</strong>
                <p className="text-xs text-slate-500">Community downloads</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex items-center gap-4 p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-amber-50 text-amber-700">
                <ShieldCheck />
              </span>
              <div>
                <strong className="text-xl">Verified</strong>
                <p className="text-xs text-slate-500">Safe learning files</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {gatedResource && (
          <Card
            id="resource-access"
            className="mb-7 overflow-hidden border-emerald-200 py-0 shadow-sm"
          >
            <CardContent className="flex flex-col gap-5 bg-emerald-50/60 p-5 sm:flex-row sm:items-center">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm">
                <LogIn />
              </span>
              <div className="flex-1">
                <Badge className="bg-emerald-100 text-emerald-700">
                  Free member download
                </Badge>
                <h2 className="mt-2 text-base font-semibold">
                  Sign in to download {gatedResource.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Free accounts can download selected resources and keep a
                  personal download history.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setGatedResource(null)}
                >
                  Not now
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-white"
                >
                  <Link href="/login">Log in</Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/register">Create free account</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-7 gap-4 py-4 shadow-none">
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
            <select
              aria-label="Access filter"
              value={access}
              onChange={(event) =>
                setAccess(event.target.value as typeof access)
              }
              className="h-8 rounded-lg border bg-white px-3 text-xs"
            >
              <option>All</option>
              <option>Free</option>
              <option>Premium</option>
            </select>
          </CardContent>
        </Card>

        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Browse resources</h2>
            <p className="mt-1 text-sm text-slate-500">
              {rows.length} resources match your filters
            </p>
          </div>
          <select
            aria-label="Sort resources"
            value={sort}
            onChange={(event) => setSort(event.target.value as typeof sort)}
            className="h-8 rounded-lg border bg-white px-3 text-xs font-medium"
          >
            <option>Popular</option>
            <option>Name</option>
            <option>File type</option>
          </select>
        </div>

        {rows.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {rows.map((resource) => (
              <Card
                key={resource.title}
                className="gap-0 py-0 shadow-none transition hover:shadow-md"
              >
                <CardContent className="flex gap-4 p-5">
                  <span
                    className={cn(
                      "grid size-12 shrink-0 place-items-center rounded-xl",
                      resource.type === "XLSX"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700",
                    )}
                  >
                    {resource.type === "XLSX" ? (
                      <FileSpreadsheet />
                    ) : (
                      <FileText />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-medium text-emerald-700">
                          {resource.category}
                        </p>
                        <h3 className="mt-1 font-semibold">{resource.title}</h3>
                      </div>
                      <Badge
                        variant={resource.premium ? "secondary" : "outline"}
                      >
                        {resource.premium ? (
                          <>
                            <LockKeyhole /> Premium
                          </>
                        ) : (
                          <>
                            <CheckCircle2 /> Free
                          </>
                        )}
                      </Badge>
                    </div>
                    <p className="mt-2 truncate text-xs text-slate-500">
                      {resource.course}
                    </p>
                    <div className="mt-4 flex gap-4 text-xs text-slate-400">
                      <span>
                        {resource.type} · {resource.size}
                      </span>
                      <span>
                        {resource.downloads.toLocaleString()} downloads
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end gap-2 bg-slate-50/80 px-5 py-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelected(resource)}
                  >
                    <Eye /> Preview
                  </Button>
                  {resource.premium ? (
                    <Button
                      asChild
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      <Link href="/pricing">
                        <LockKeyhole /> Unlock
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => requestDownload(resource)}
                    >
                      <Download /> Download
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="items-center py-16 text-center shadow-none">
            <Search className="size-8 text-slate-400" />
            <CardTitle>No resources found</CardTitle>
            <p className="text-sm text-slate-500">
              Try a different keyword or filter.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setQuery("");
                setCategory("All");
                setAccess("All");
              }}
            >
              Clear filters
            </Button>
          </Card>
        )}

        <Card className="mt-8 overflow-hidden border-0 bg-slate-950 text-white">
          <CardContent className="flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center">
            <div>
              <Badge className="mb-3 bg-emerald-400/10 text-emerald-300">
                Premium library
              </Badge>
              <h2 className="text-2xl font-semibold">
                Unlock every premium learning resource.
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Premium membership includes all courses, documents, and
                certificate requests.
              </p>
            </div>
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
              <Link href="/pricing">
                Compare plans <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/75 p-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <Card
            className="w-full max-w-lg shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <CardHeader className="border-b">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="secondary">{selected.category}</Badge>
                  <CardTitle className="mt-3 text-xl">
                    {selected.title}
                  </CardTitle>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSelected(null)}
                >
                  <X />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 pt-5">
              <div className="grid aspect-[16/8] place-items-center rounded-xl bg-slate-100">
                <span className="grid size-16 place-items-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                  {selected.type === "XLSX" ? (
                    <FileSpreadsheet className="size-8" />
                  ) : (
                    <FileText className="size-8" />
                  )}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                {selected.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <BookOpen className="size-4" /> From {selected.course}
              </div>
              {selected.premium ? (
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/pricing">
                    <LockKeyhole /> Unlock with Premium
                  </Link>
                </Button>
              ) : (
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => requestDownload(selected)}
                >
                  <Download /> Download free resource
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
