"use client";

import {
  ArrowLeft,
  Award,
  CalendarDays,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  GraduationCap,
  Printer,
  Search,
  ShieldCheck,
  UserRound,
  XCircle,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const validIds = ["CL-2026-1842", "CL-2026-0914"];

export function CertificateVerification({
  onBack,
  notify,
}: {
  onBack: () => void;
  notify: (message: string) => void;
}) {
  const [certificateId, setCertificateId] = useState("CL-2026-1842");
  const [result, setResult] = useState<"idle" | "valid" | "invalid">("idle");

  const verify = () => {
    setResult(
      validIds.includes(certificateId.trim().toUpperCase())
        ? "valid"
        : "invalid",
    );
  };

  return (
    <div className="min-h-[calc(100vh-78px)] bg-[#f5f8fb] text-slate-950">
      <section className="relative overflow-hidden bg-[#102a43] px-5 pb-28 pt-10 text-white md:px-10 md:pb-36 md:pt-14">
        <div className="absolute -left-28 top-20 size-72 rounded-full border-[55px] border-white/[.035]" />
        <div className="absolute -right-16 -top-24 size-80 rounded-full bg-emerald-400/[.06]" />
        <div className="relative mx-auto max-w-5xl">
          <Button
            variant="ghost"
            className="mb-10 -ml-3 text-slate-300 hover:bg-white/10 hover:text-white"
            onClick={onBack}
          >
            <ArrowLeft /> Back to website
          </Button>
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-5 border border-emerald-300/20 bg-emerald-400/10 text-emerald-300">
              <ShieldCheck /> Secure credential verification
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Verify a certificate
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              Confirm that a CertiLearn credential is authentic, active, and
              issued to the person presenting it.
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-2 rounded-xl bg-white p-2 shadow-2xl shadow-slate-950/25 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <Input
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && verify()}
                  className="h-11 border-0 pl-10 text-sm shadow-none focus-visible:ring-0"
                  placeholder="Enter certificate ID"
                />
              </div>
              <Button
                onClick={verify}
                className="h-11 bg-emerald-600 px-6 hover:bg-emerald-700"
              >
                Verify certificate
              </Button>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              Try the demo ID{" "}
              <button
                className="font-semibold text-emerald-300 underline-offset-2 hover:underline"
                onClick={() => {
                  setCertificateId("CL-2026-1842");
                  setResult("valid");
                }}
              >
                CL-2026-1842
              </button>
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto -mt-20 max-w-5xl px-4 pb-20 md:-mt-24">
        {result === "idle" && <EmptyVerification />}
        {result === "invalid" && (
          <InvalidVerification
            id={certificateId}
            onRetry={() => {
              setCertificateId("");
              setResult("idle");
            }}
          />
        )}
        {result === "valid" && <ValidVerification notify={notify} />}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <TrustItem
            icon={<ShieldCheck />}
            title="Authentic records"
            copy="Credential details match the issuing organization’s record."
          />
          <TrustItem
            icon={<CheckCircle2 />}
            title="Current status"
            copy="See whether a certificate is active, expired, or revoked."
          />
          <TrustItem
            icon={<UserRound />}
            title="Privacy conscious"
            copy="Only information required to verify the credential is shown."
          />
        </div>
      </section>
    </div>
  );
}

function EmptyVerification() {
  return (
    <Card className="border-0 py-12 text-center shadow-xl shadow-slate-200/70">
      <CardContent>
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
          <Award className="size-8" />
        </span>
        <h2 className="mt-5 text-xl font-bold">
          Enter a certificate ID to begin
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          The ID appears at the bottom of every CertiLearn certificate and
          usually follows the format CL-YYYY-0000.
        </p>
      </CardContent>
    </Card>
  );
}

function InvalidVerification({
  id,
  onRetry,
}: {
  id: string;
  onRetry: () => void;
}) {
  return (
    <Card className="border-rose-100 py-10 text-center shadow-xl shadow-slate-200/70">
      <CardContent>
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-rose-50 text-rose-600">
          <XCircle className="size-8" />
        </span>
        <Badge className="mt-5 bg-rose-100 text-rose-700">
          No valid record found
        </Badge>
        <h2 className="mt-3 text-2xl font-bold">
          We couldn&apos;t verify this certificate
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
          No active credential matches{" "}
          <strong className="text-slate-700">{id || "this ID"}</strong>. Check
          every character, or ask the certificate holder for the original
          verification link.
        </p>
        <Button variant="outline" className="mt-6" onClick={onRetry}>
          Try another ID
        </Button>
      </CardContent>
    </Card>
  );
}

function ValidVerification({ notify }: { notify: (message: string) => void }) {
  return (
    <div className="space-y-5">
      <Card className="overflow-hidden border-0 py-0 shadow-xl shadow-slate-200/70">
        <div className="flex flex-col justify-between gap-4 border-b border-emerald-100 bg-emerald-50 px-6 py-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-emerald-600 text-white">
              <Check className="size-6" />
            </span>
            <div>
              <Badge className="bg-emerald-100 text-emerald-700">
                Verified and active
              </Badge>
              <p className="mt-1 text-xs text-emerald-800/70">
                This credential matches our official record.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white"
              onClick={() => notify("Verification link copied")}
            >
              <Copy /> Copy link
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white"
              onClick={() => notify("Print preview opened — UI demo")}
            >
              <Printer /> Print
            </Button>
          </div>
        </div>
        <CardContent className="grid gap-8 p-6 md:grid-cols-[1fr_270px] md:p-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.14em] text-emerald-600">
              Professional certificate
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              Project Management Foundations
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              The learner successfully completed all required lessons, practical
              activities, and the final knowledge check.
            </p>
            <Separator className="my-7" />
            <dl className="grid gap-6 sm:grid-cols-2">
              <CredentialItem
                icon={<UserRound />}
                label="Issued to"
                value="Amina Mensah"
              />
              <CredentialItem
                icon={<GraduationCap />}
                label="Issued by"
                value="CertiLearn Global Academy"
              />
              <CredentialItem
                icon={<CalendarDays />}
                label="Issue date"
                value="July 12, 2026"
              />
              <CredentialItem
                icon={<ShieldCheck />}
                label="Credential ID"
                value="CL-2026-1842"
              />
            </dl>
            <div className="mt-7 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
              <ShieldCheck className="mt-0.5 size-5 text-emerald-600" />
              <div>
                <p className="text-xs font-semibold">No expiration date</p>
                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  This certificate remains valid unless its status is formally
                  revoked by the issuing organization.
                </p>
              </div>
            </div>
          </div>
          <CertificatePreview />
        </CardContent>
      </Card>
      <div className="flex flex-col items-center justify-between gap-3 rounded-xl border bg-white px-5 py-4 sm:flex-row">
        <div>
          <p className="text-xs font-semibold">Need additional confirmation?</p>
          <p className="text-[11px] text-slate-500">
            Contact the issuing organization and include credential ID
            CL-2026-1842.
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => notify("Support contact opened")}
        >
          Contact issuer <ExternalLink />
        </Button>
      </div>
    </div>
  );
}

function CredentialItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600 [&_svg]:size-4">
        {icon}
      </span>
      <div>
        <dt className="text-[10px] uppercase tracking-wide text-slate-400">
          {label}
        </dt>
        <dd className="mt-1 text-xs font-semibold text-slate-800">{value}</dd>
      </div>
    </div>
  );
}

function CertificatePreview() {
  const qr = [
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  ];
  return (
    <div className="relative overflow-hidden rounded-xl border-4 border-double border-amber-300 bg-[#fffdf7] p-5 text-center shadow-sm">
      <div className="absolute -right-8 -top-8 size-24 rounded-full border-[18px] border-emerald-600/[.06]" />
      <span className="mx-auto grid size-10 place-items-center rounded-full bg-[#102a43] text-white">
        <GraduationCap className="size-5" />
      </span>
      <p className="mt-4 text-[8px] font-bold uppercase tracking-[.22em] text-amber-700">
        Certificate of completion
      </p>
      <p className="mt-3 text-[9px] text-slate-500">Proudly presented to</p>
      <strong className="mt-1 block font-serif text-xl italic text-[#102a43]">
        Amina Mensah
      </strong>
      <div className="mx-auto my-3 h-px w-32 bg-amber-300" />
      <p className="text-[9px] font-bold">Project Management Foundations</p>
      <p className="mt-2 text-[7px] leading-3 text-slate-500">
        Issued July 12, 2026
        <br />
        CL-2026-1842
      </p>
      <div className="mx-auto mt-4 grid size-14 grid-cols-7 gap-[1px] bg-white p-1">
        {qr.map((on, i) => (
          <i key={i} className={on ? "bg-slate-900" : "bg-white"} />
        ))}
      </div>
      <p className="mt-2 text-[6px] uppercase tracking-widest text-slate-400">
        Scan to verify
      </p>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  copy,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600 [&_svg]:size-4">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold">{title}</p>
        <p className="mt-1 text-[10px] leading-4 text-slate-500">{copy}</p>
      </div>
    </div>
  );
}
