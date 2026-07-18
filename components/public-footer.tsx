import { ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const groups = [
  {
    title: "Learn",
    links: [
      ["Browse courses", "/courses"],
      ["Resource library", "/resources"],
      ["Membership plans", "/pricing"],
    ],
  },
  {
    title: "Platform",
    links: [
      ["About CertiLearn", "/about"],
      ["Announcements", "/announcements"],
      ["Help & support", "/support"],
    ],
  },
] as const;

export function PublicFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_.7fr_.7fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-600">
              <GraduationCap className="size-5" />
            </span>
            <strong className="text-lg font-semibold tracking-tight">
              Certi<span className="text-emerald-400">Learn</span>
            </strong>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Practical global learning, premium resources, and credentials that
            anyone can verify.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
            <span className="size-2 rounded-full bg-emerald-400" />
            UI-only platform concept
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[.12em] text-white">
              {group.title}
            </h2>
            <nav className="mt-4 grid gap-3">
              {group.links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-slate-400 transition hover:text-emerald-400"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5">
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-400/10 text-emerald-400">
            <ShieldCheck className="size-5" />
          </span>
          <h2 className="mt-4 text-base font-semibold text-white">
            Verify a credential
          </h2>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            Confirm a certificate&apos;s authenticity using its credential ID.
          </p>
          <Button
            asChild
            variant="ghost"
            className="mt-3 -ml-2 text-emerald-400 hover:bg-white/5 hover:text-emerald-300"
          >
            <Link href="/verify-certificate">
              Verify certificate <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 CertiLearn. UI demonstration only.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="hover:text-slate-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
