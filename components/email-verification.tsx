"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  GraduationCap,
  MailCheck,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function EmailVerification() {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [resent, setResent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVerified(true);
  };
  return (
    <div className="grid min-h-screen lg:grid-cols-[.85fr_1.15fr]">
      <section className="relative hidden overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col">
        <div className="absolute -left-28 top-1/3 size-72 rounded-full border-[55px] border-white/[.035]" />
        <div className="absolute -right-20 -top-20 size-64 rounded-full bg-emerald-400/[.07]" />
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2.5 self-start"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-emerald-500">
            <GraduationCap className="size-5" />
          </span>
          <span className="text-xl font-semibold">
            Certi<span className="text-emerald-400">Learn</span>
          </span>
        </Link>
        <div className="relative z-10 my-auto max-w-md">
          <span className="grid size-14 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-300">
            <MailCheck className="size-7" />
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight">
            One quick step before learning.
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Verify your email to protect your account, receive certificate
            updates, and recover access safely.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Protects your course progress",
              "Required for verified certificates",
              "Keeps account recovery secure",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <Check className="size-4 text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-emerald-700"
            >
              <ArrowLeft className="size-4" /> Back to registration
            </Link>
            <Link href="/" className="flex items-center gap-2 lg:hidden">
              <span className="grid size-8 place-items-center rounded-lg bg-emerald-600 text-white">
                <GraduationCap className="size-4" />
              </span>
              <strong>CertiLearn</strong>
            </Link>
          </div>
          {verified ? (
            <Card className="border-0 text-center shadow-xl shadow-slate-200/60">
              <CardContent className="p-8">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="size-8" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold">Email verified</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Your demo account is active. Your courses, resources, and
                  certificate history are ready.
                </p>
                <Button
                  asChild
                  className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                >
                  <Link href="/dashboard">
                    Open my dashboard <ArrowRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-xl shadow-slate-200/60">
              <CardHeader>
                <span className="mb-2 grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <MailCheck />
                </span>
                <CardTitle className="text-2xl">Check your email</CardTitle>
                <CardDescription className="leading-6">
                  We sent a six-digit verification code to{" "}
                  <strong className="text-slate-700">amina@example.com</strong>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5" onSubmit={submit}>
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-slate-700">
                      Verification code
                    </span>
                    <Input
                      required
                      inputMode="numeric"
                      maxLength={6}
                      value={code}
                      onChange={(event) =>
                        setCode(event.target.value.replace(/\D/g, ""))
                      }
                      className="h-14 text-center font-mono text-2xl tracking-[.5em]"
                      placeholder="000000"
                    />
                  </label>
                  <Button
                    type="submit"
                    disabled={code.length !== 6}
                    className="h-11 w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    Verify email <ArrowRight />
                  </Button>
                </form>
                <div className="mt-5 flex flex-col items-center gap-3 text-xs">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setResent(true)}
                  >
                    <RefreshCw />{" "}
                    {resent ? "New code sent" : "Resend verification code"}
                  </Button>
                  <Link
                    href="/register"
                    className="text-slate-500 hover:text-emerald-700"
                  >
                    Wrong email? Change address
                  </Link>
                </div>
                <div className="mt-6 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-700" />
                  <p className="text-xs leading-5 text-slate-500">
                    For this UI demonstration, enter any six digits. Production
                    codes will expire after 15 minutes.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
