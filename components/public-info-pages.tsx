"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  FileText,
  Globe2,
  GraduationCap,
  Mail,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function PublicHeader() {
  return (
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
  );
}

export function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PublicHeader />
      <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white">
        <div className="absolute -left-24 top-10 size-72 rounded-full border-[55px] border-white/[.035]" />
        <div className="absolute -right-20 -top-20 size-72 rounded-full bg-emerald-400/[.06]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <Badge className="mb-5 bg-emerald-400/10 text-emerald-300">
            <Sparkles /> About CertiLearn
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Learning without borders.
            <br />
            <span className="text-emerald-400">
              Recognition without limits.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            CertiLearn is a global training and certificate platform concept
            designed to make practical professional learning accessible,
            trackable, and verifiable.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-12 px-5 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              BookOpen,
              "Practical learning",
              "Expert-led courses focus on skills learners can apply immediately.",
            ],
            [
              Globe2,
              "Global access",
              "Regional preferences and flexible learning support an international community.",
            ],
            [
              Award,
              "Trusted recognition",
              "Verifiable certificates help learners demonstrate completed training.",
            ],
          ].map(([Icon, title, copy]) => {
            const ItemIcon = Icon as typeof BookOpen;
            return (
              <Card key={title as string} className="shadow-none">
                <CardContent className="p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    <ItemIcon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold">
                    {title as string}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {copy as string}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="grid gap-8 rounded-2xl bg-white p-7 shadow-sm lg:grid-cols-2 lg:p-10">
          <div>
            <Badge variant="secondary" className="text-emerald-700">
              Our purpose
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold">
              Help every learner build skills they can prove.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The platform brings course delivery, downloadable resources,
              learning progress, memberships, certificate requests, and public
              verification into one coherent experience.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["12k+", "Learners"],
              ["80+", "Countries"],
              ["48", "Courses"],
              ["3.8k", "Certificates"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-slate-50 p-5">
                <strong className="text-2xl font-semibold">{value}</strong>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-7 text-center">
            <Badge variant="secondary">How it works</Badge>
            <h2 className="mt-3 text-3xl font-semibold">
              A clear path from curiosity to credential
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              [Search, "Discover", "Find training that matches your goals."],
              [BookOpen, "Learn", "Complete lessons and practical resources."],
              [Check, "Complete", "Meet progress and assessment requirements."],
              [ShieldCheck, "Verify", "Share a trusted public credential."],
            ].map(([Icon, title, copy], index) => {
              const StepIcon = Icon as typeof Search;
              return (
                <Card key={title as string} className="shadow-none">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                        <StepIcon className="size-5" />
                      </span>
                      <span className="text-xs text-slate-300">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-semibold">{title as string}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {copy as string}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        <Card className="border-0 bg-emerald-600 text-white">
          <CardContent className="flex flex-col justify-between gap-5 p-7 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Ready to start learning?
              </h2>
              <p className="mt-2 text-sm text-emerald-100">
                Create a free account and explore the course catalog.
              </p>
            </div>
            <Button asChild variant="secondary">
              <Link href="/register">
                Create an account <ArrowRight />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

const helpTopics = [
  [
    "Starting a course",
    "Learn how enrollment, lessons, and progress tracking work.",
  ],
  [
    "Membership access",
    "Understand free, monthly, and yearly learning access.",
  ],
  ["Documents and downloads", "Find free and premium course resources."],
  [
    "Certificate requests",
    "Review eligibility, issuing, and verification steps.",
  ],
  ["Billing and receipts", "Manage payment methods and transaction receipts."],
  ["Account security", "Recover access and protect your learner profile."],
];

export function SupportPage() {
  const [query, setQuery] = useState("");
  const [sent, setSent] = useState(false);
  const topics = helpTopics.filter(([title, copy]) =>
    `${title} ${copy}`.toLowerCase().includes(query.toLowerCase()),
  );
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <PublicHeader />
      <section className="bg-slate-950 px-5 py-16 text-center text-white">
        <Badge className="mb-5 bg-emerald-400/10 text-emerald-300">
          <MessageCircle /> Help center
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          How can we help?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
          Search common learning, membership, certificate, and account topics.
        </p>
        <div className="relative mx-auto mt-7 max-w-xl">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-12 bg-white pl-12 text-slate-900"
            placeholder="Search the help center"
          />
        </div>
      </section>
      <section className="mx-auto max-w-6xl space-y-10 px-5 py-12">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Help topics</h2>
              <p className="mt-1 text-sm text-slate-500">
                Browse guidance for common platform tasks.
              </p>
            </div>
            <Badge variant="outline">{topics.length} topics</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topics.map(([title, copy], index) => (
              <Card
                key={title}
                className="shadow-none transition-colors hover:border-emerald-200"
              >
                <CardContent className="p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    {index % 3 === 0 ? (
                      <BookOpen />
                    ) : index % 3 === 1 ? (
                      <Users />
                    ) : (
                      <FileText />
                    )}
                  </span>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {copy}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3 px-0 text-emerald-700"
                  >
                    Read guide <ArrowRight />
                  </Button>
                </CardContent>
              </Card>
            ))}
            {topics.length === 0 && (
              <Card className="col-span-full shadow-none">
                <CardContent className="py-12 text-center">
                  <Search className="mx-auto size-6 text-slate-400" />
                  <p className="mt-2 text-sm font-medium">
                    No help topics found
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Try another search or send a support message below.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
          <Card>
            <CardHeader>
              <CardTitle>Contact support</CardTitle>
              <CardDescription>
                Send a UI-only support request to the CertiLearn team
              </CardDescription>
            </CardHeader>
            <CardContent>
              {sent ? (
                <div className="py-10 text-center">
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">
                    Message received
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Demo request CL-SUP-1842 has been created.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-5"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="grid gap-4 sm:grid-cols-2" onSubmit={submit}>
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium">Name</span>
                    <Input required defaultValue="Amina Mensah" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium">
                      Email
                    </span>
                    <Input
                      required
                      type="email"
                      defaultValue="amina@example.com"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs font-medium">
                      Subject
                    </span>
                    <Input required placeholder="What do you need help with?" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs font-medium">
                      Message
                    </span>
                    <Textarea
                      required
                      className="min-h-32"
                      placeholder="Describe your question or issue…"
                    />
                  </label>
                  <Button type="submit" className="sm:col-span-2">
                    <Send /> Send support request
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card className="shadow-none">
              <CardContent className="flex gap-3 p-5">
                <Mail className="size-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="text-sm font-medium">Email support</p>
                  <p className="mt-1 text-xs text-slate-500">
                    support@certilearn.com
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Typical reply within one business day
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardContent className="flex gap-3 p-5">
                <Globe2 className="size-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="text-sm font-medium">Global availability</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Support across international time zones
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    English-language demo service
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-emerald-100 bg-emerald-50/40 shadow-none">
              <CardContent className="flex gap-3 p-5">
                <ShieldCheck className="size-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="text-sm font-medium">
                    Certificate verification
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Use the public verification tool before contacting support
                    about credential authenticity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
