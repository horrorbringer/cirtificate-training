"use client";

import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "/"],
  ["Courses", "/courses"],
  ["Resources", "/resources"],
  ["Pricing", "/pricing"],
  ["Verify", "/verify-certificate"],
  ["Announcements", "/announcements"],
  ["About", "/about"],
  ["Support", "/support"],
] as const;

export function PublicNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-7 px-5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-xl bg-emerald-600 text-white">
            <GraduationCap className="size-5" />
          </span>
          <strong className="text-lg font-semibold tracking-tight">
            Certi<span className="text-emerald-600">Learn</span>
          </strong>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex">
          {links.map(([label, href]) => (
            <Button
              key={href}
              asChild
              variant="ghost"
              className={cn(
                "text-slate-600",
                active(href) &&
                  "bg-emerald-50 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-700",
              )}
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <Button asChild variant="ghost">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild className="bg-emerald-600 px-4 hover:bg-emerald-700">
            <Link href="/register">Create account</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t bg-white px-5 py-4 shadow-lg xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {links.map(([label, href]) => (
              <Button
                key={href}
                asChild
                variant="ghost"
                className={cn(
                  "h-10 justify-start",
                  active(href) && "bg-emerald-50 text-emerald-700",
                )}
              >
                <Link href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              </Button>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t pt-3 sm:hidden">
              <Button asChild variant="outline">
                <Link href="/login" onClick={() => setOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/register" onClick={() => setOpen(false)}>
                  Join free
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
