import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Home,
  Search,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-950 px-5 py-12 text-white">
      <div className="absolute -left-32 top-1/4 size-96 rounded-full border-[70px] border-white/[.035]" />
      <div className="absolute -right-24 -top-24 size-80 rounded-full bg-emerald-400/[.06]" />
      <div className="relative w-full max-w-3xl text-center">
        <Link href="/" className="mx-auto flex w-fit items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-500">
            <GraduationCap className="size-5" />
          </span>
          <strong className="text-xl">
            Certi<span className="text-emerald-400">Learn</span>
          </strong>
        </Link>
        <Badge className="mt-10 bg-emerald-400/10 text-emerald-300">
          404 · Page not found
        </Badge>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          This lesson isn&apos;t here.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
          The page may have moved, the link may be incomplete, or this part of
          the learning platform has not been published.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-400"
          >
            <Link href="/">
              <Home /> Back to homepage
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/dashboard">
              <BookOpen /> Open dashboard
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-3 text-left sm:grid-cols-3">
          <RecoveryLink
            href="/#courses"
            icon={<Search />}
            title="Browse courses"
            copy="Explore available learning paths."
          />
          <RecoveryLink
            href="/support"
            icon={<ShieldCheck />}
            title="Get support"
            copy="Search help or contact the team."
          />
          <RecoveryLink
            href="/announcements"
            icon={<BookOpen />}
            title="Platform news"
            copy="See recent updates and releases."
          />
        </div>
        <Button
          asChild
          variant="ghost"
          className="mt-8 text-slate-400 hover:bg-white/5 hover:text-white"
        >
          <Link href="/">
            <ArrowLeft /> Return to CertiLearn
          </Link>
        </Button>
      </div>
    </main>
  );
}

function RecoveryLink({
  href,
  icon,
  title,
  copy,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <Card className="border-white/10 bg-white/[.04] text-white shadow-none">
      <CardContent className="flex gap-3 p-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-400/10 text-emerald-300 [&>svg]:size-4">
          {icon}
        </span>
        <div>
          <Link
            href={href}
            className="text-sm font-medium hover:text-emerald-300"
          >
            {title}
          </Link>
          <p className="mt-1 text-xs leading-5 text-slate-400">{copy}</p>
        </div>
      </CardContent>
    </Card>
  );
}
