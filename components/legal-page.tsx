import { ArrowLeft, FileText, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const termsSections = [
  [
    "Using CertiLearn",
    "CertiLearn provides training courses, downloadable learning resources, progress tracking, memberships, and verifiable certificate experiences. This mockup contains demonstration data and does not process real enrollment or payment activity.",
  ],
  [
    "Accounts and access",
    "Members are responsible for keeping account credentials secure. Access to premium training, downloads, and certificate requests depends on the active membership and eligibility state shown in the platform.",
  ],
  [
    "Learning content",
    "Course videos, documents, templates, and assessments are provided for personal or authorized organizational learning. Content may not be redistributed or resold without permission from the issuing organization.",
  ],
  [
    "Certificates",
    "A certificate represents completion of the stated learning requirements. The issuing organization may review, correct, expire, or revoke a credential when required to protect its integrity.",
  ],
  [
    "Membership and cancellation",
    "Monthly and yearly plans renew according to the selected lifecycle settings. Members may turn off renewal while retaining access through the end of the current paid period.",
  ],
  [
    "Acceptable use",
    "Users may not attempt to bypass access controls, interfere with the service, misuse another learner’s identity, or present altered credentials as authentic.",
  ],
];

const privacySections = [
  [
    "Information we collect",
    "Account details may include name, email, country, phone number, language, time zone, profile image, course activity, downloads, membership state, payment references, and certificate history.",
  ],
  [
    "How information is used",
    "Information supports account access, personalized learning, progress tracking, membership administration, certificate issuing, fraud prevention, support, and required service communication.",
  ],
  [
    "Payments",
    "A production platform should use a certified payment provider. CertiLearn should store payment references and limited card descriptors, not complete card numbers or security codes.",
  ],
  [
    "Certificates and public verification",
    "Public credential verification displays only the information required to confirm the certificate holder, course, issue date, credential ID, issuer, and current status.",
  ],
  [
    "Data sharing",
    "Information may be shared with authorized service providers that support hosting, email, payments, analytics, or credential delivery, subject to appropriate safeguards.",
  ],
  [
    "Your choices",
    "Members can update profile details, communication preferences, renewal settings, and account security controls. Requests for access, correction, or deletion would be handled through support in production.",
  ],
];

export function LegalPage({ type }: { type: "terms" | "privacy" }) {
  const privacy = type === "privacy";
  const sections = privacy ? privacySections : termsSections;
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="border-b bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <Badge className="mb-5 bg-emerald-400/10 text-emerald-300">
            {privacy ? <ShieldCheck /> : <FileText />}
            {privacy ? "Privacy & data" : "Platform terms"}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {privacy ? "Privacy Policy" : "Terms of Service"}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            {privacy
              ? "A clear overview of how a production CertiLearn platform would handle member and credential information."
              : "The principles and conditions for using the CertiLearn training and certificate platform."}
          </p>
          <p className="mt-5 text-xs text-slate-500">
            Last updated July 19, 2026 · UI demonstration content
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[240px_1fr]">
        <aside>
          <Card className="sticky top-6 shadow-none">
            <CardContent className="p-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                On this page
              </p>
              <nav className="space-y-1">
                {sections.map(([title], index) => (
                  <a
                    key={title}
                    href={`#section-${index}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </aside>
        <div className="space-y-4">
          {sections.map(([title, copy], index) => (
            <Card
              id={`section-${index}`}
              key={title}
              className="scroll-mt-6 shadow-none"
            >
              <CardContent className="p-6">
                <span className="text-xs font-medium text-emerald-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
              </CardContent>
            </Card>
          ))}
          <Card className="border-emerald-100 bg-emerald-50/50 shadow-none">
            <CardContent className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-base font-semibold">
                  Questions about {privacy ? "privacy" : "these terms"}?
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Contact the issuing organization for clarification.
                </p>
              </div>
              <Button asChild variant="outline" className="bg-white">
                <Link href="/">Return to CertiLearn</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
