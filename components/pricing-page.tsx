"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const comparison = [
  ["Free courses", true, true, true],
  ["Premium courses", false, true, true],
  ["Free downloads", true, true, true],
  ["Premium downloads", false, true, true],
  ["Progress tracking", true, true, true],
  ["Certificate requests", false, true, true],
  ["Priority certificate review", false, false, true],
] as const;

export function PricingPage() {
  const [yearly, setYearly] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    [
      "Can I start for free?",
      "Yes. Free membership includes selected courses, documents, and progress tracking.",
    ],
    [
      "Can I change plans later?",
      "Yes. Members can switch between Monthly and Yearly access from the dashboard.",
    ],
    [
      "What happens when I cancel?",
      "Renewal turns off while premium access continues until the paid period ends.",
    ],
    [
      "Are certificates included?",
      "Paid members may request certificates after meeting course requirements.",
    ],
  ];
  return (
    <main className="min-h-screen bg-slate-50">
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
      <section className="bg-slate-950 px-5 pb-32 pt-16 text-center text-white">
        <Badge className="mb-5 bg-emerald-400/10 text-emerald-300">
          <Sparkles /> Simple membership
        </Badge>
        <h1 className="text-4xl font-semibold md:text-5xl">
          Choose how you want to learn.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300">
          Start free, upgrade for premium training, and request certificates
          after eligible courses.
        </p>
        <div className="mx-auto mt-7 flex w-fit rounded-xl bg-white/10 p-1">
          <Button
            variant={!yearly ? "secondary" : "ghost"}
            className={
              yearly ? "text-slate-300 hover:bg-white/10 hover:text-white" : ""
            }
            onClick={() => setYearly(false)}
          >
            Monthly
          </Button>
          <Button
            variant={yearly ? "secondary" : "ghost"}
            className={
              !yearly ? "text-slate-300 hover:bg-white/10 hover:text-white" : ""
            }
            onClick={() => setYearly(true)}
          >
            Yearly{" "}
            <Badge className="ml-1 bg-emerald-100 text-emerald-700">
              Save 35%
            </Badge>
          </Button>
        </div>
      </section>
      <section className="mx-auto -mt-20 max-w-6xl px-5 pb-14">
        <div className="grid gap-5 lg:grid-cols-3">
          <Plan
            name="Free"
            price="$0"
            period="forever"
            copy="Explore selected learning content."
            features={[
              "Selected free courses",
              "Free documents",
              "Progress tracking",
            ]}
            action="Start free"
          />
          <Plan
            name="Monthly"
            price="$19"
            period="month"
            copy="Flexible premium access."
            features={[
              "All premium courses",
              "Premium downloads",
              "Certificate requests",
            ]}
            action="Choose monthly"
          />
          <Plan
            name="Yearly"
            price={yearly ? "$149" : "$19"}
            period={yearly ? "year" : "month"}
            copy="Best value for continuous growth."
            features={[
              "Everything in Monthly",
              "Lower average monthly cost",
              "Priority certificate review",
            ]}
            action={yearly ? "Choose yearly" : "Choose monthly"}
            featured={yearly}
          />
        </div>
        <Card className="mt-10 overflow-hidden shadow-none">
          <CardHeader>
            <CardTitle>Compare all features</CardTitle>
            <CardDescription>
              See what each membership level includes
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[680px] text-sm">
              <thead>
                <tr className="border-y bg-slate-50">
                  <th className="px-6 py-4 text-left">Feature</th>
                  {["Free", "Monthly", "Yearly"].map((x) => (
                    <th key={x} className="px-6 py-4 text-center">
                      {x}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ...values]) => (
                  <tr key={label} className="border-b last:border-0">
                    <td className="px-6 py-4 text-slate-600">{label}</td>
                    {values.map((ok, index) => (
                      <td key={index} className="px-6 py-4">
                        {ok ? (
                          <Check className="mx-auto size-4 text-emerald-600" />
                        ) : (
                          <X className="mx-auto size-4 text-slate-300" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
        <div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Badge variant="secondary">Questions</Badge>
            <h2 className="mt-3 text-3xl font-semibold">Membership FAQs</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Understand billing lifecycle, cancellation, and certificate
              eligibility.
            </p>
            <div className="mt-6 flex gap-3">
              <ShieldCheck className="size-5 text-emerald-700" />
              <p className="text-xs leading-5 text-slate-500">
                This is UI-only pricing. No real payment details are collected.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <Card key={question} className="shadow-none">
                <Button
                  variant="ghost"
                  className="h-auto w-full justify-between p-5"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  {question}
                  <ChevronDown
                    className={openFaq === index ? "rotate-180" : ""}
                  />
                </Button>
                {openFaq === index && (
                  <CardContent className="px-5 pb-5 pt-0 text-sm leading-7 text-slate-500">
                    {answer}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
        <Card className="mt-12 border-0 bg-emerald-600 text-white">
          <CardContent className="flex flex-col justify-between gap-5 p-7 sm:flex-row sm:items-center">
            <div className="flex gap-4">
              <Award />
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Start building skills today
                </h2>
                <p className="mt-2 text-sm text-emerald-100">
                  Create a free account and upgrade only when needed.
                </p>
              </div>
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

function Plan({
  name,
  price,
  period,
  copy,
  features,
  action,
  featured = false,
}: {
  name: string;
  price: string;
  period: string;
  copy: string;
  features: string[];
  action: string;
  featured?: boolean;
}) {
  return (
    <Card
      className={`relative shadow-xl shadow-slate-200/50 ${featured ? "border-emerald-400" : ""}`}
    >
      {featured && (
        <Badge className="absolute -top-3 right-5 bg-emerald-600">
          Best value
        </Badge>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div>
          <strong className="text-4xl font-semibold">{price}</strong>
          <span className="text-sm text-slate-500"> / {period}</span>
        </div>
        <CardDescription>{copy}</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="mb-5" />
        <ul className="space-y-3">
          {features.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-slate-600">
              <Check className="size-4 text-emerald-600" />
              {item}
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant={featured ? "default" : "outline"}
          className="mt-6 w-full"
        >
          <Link href="/register">
            {action} <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
