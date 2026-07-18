"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  GraduationCap,
  KeyRound,
  Mail,
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
import { Progress } from "@/components/ui/progress";

export function PasswordRecovery({ mode }: { mode: "request" | "reset" }) {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const isReset = mode === "reset";
  const strength = Math.min(
    100,
    password.length * 9 +
      (/[A-Z]/.test(password) ? 10 : 0) +
      (/\d/.test(password) ? 10 : 0),
  );
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
            <ShieldCheck className="size-7" />
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight">
            Secure account recovery.
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Reset access safely and return to your courses, certificates, and
            learning progress.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Recovery links expire automatically",
              "Passwords are never displayed or emailed",
              "Other active sessions can be reviewed later",
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
              href="/login"
              className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-emerald-700"
            >
              <ArrowLeft className="size-4" /> Back to sign in
            </Link>
            <Link href="/" className="flex items-center gap-2 lg:hidden">
              <span className="grid size-8 place-items-center rounded-lg bg-emerald-600 text-white">
                <GraduationCap className="size-4" />
              </span>
              <strong>CertiLearn</strong>
            </Link>
          </div>
          {submitted ? (
            <RecoverySuccess reset={isReset} />
          ) : (
            <Card className="border-0 shadow-xl shadow-slate-200/60">
              <CardHeader>
                <span className="mb-2 grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  {isReset ? <KeyRound /> : <Mail />}
                </span>
                <CardTitle className="text-2xl">
                  {isReset ? "Create a new password" : "Forgot your password?"}
                </CardTitle>
                <CardDescription className="leading-6">
                  {isReset
                    ? "Choose a strong password you haven’t used for this account before."
                    : "Enter your account email and we’ll simulate sending a secure reset link."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={submit}>
                  {isReset ? (
                    <>
                      <RecoveryField label="Reset code">
                        <Input required defaultValue="CL-849201" />
                      </RecoveryField>
                      <RecoveryField label="New password">
                        <div className="relative">
                          <Input
                            required
                            minLength={8}
                            value={password}
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                            type={showPassword ? "text" : "password"}
                            className="pr-10"
                            placeholder="At least 8 characters"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </Button>
                        </div>
                        <div className="mt-2">
                          <Progress
                            value={strength}
                            className="h-1.5 [&>div]:bg-emerald-500"
                          />
                          <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                            <span>8+ characters</span>
                            <span>Number</span>
                            <span>Uppercase</span>
                          </div>
                        </div>
                      </RecoveryField>
                      <RecoveryField label="Confirm new password">
                        <Input
                          required
                          minLength={8}
                          type={showPassword ? "text" : "password"}
                          placeholder="Repeat your new password"
                        />
                      </RecoveryField>
                    </>
                  ) : (
                    <RecoveryField label="Email address">
                      <Input
                        required
                        type="email"
                        defaultValue="amina@example.com"
                        placeholder="name@example.com"
                      />
                    </RecoveryField>
                  )}
                  <Button
                    type="submit"
                    className="h-11 w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    {isReset ? "Reset password" : "Send reset link"}
                    <ArrowRight />
                  </Button>
                </form>
                {!isReset && (
                  <p className="mt-5 text-center text-xs text-slate-500">
                    Remembered your password?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-emerald-700"
                    >
                      Sign in
                    </Link>
                  </p>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

function RecoveryField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}

function RecoverySuccess({ reset }: { reset: boolean }) {
  return (
    <Card className="border-0 text-center shadow-xl shadow-slate-200/60">
      <CardContent className="p-8">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <Check className="size-8" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold">
          {reset ? "Password updated" : "Check your email"}
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {reset
            ? "Your demo password was changed successfully. You can now sign in with the new password."
            : "A demo recovery link was sent to amina@example.com. It will expire in 30 minutes."}
        </p>
        <Button asChild className="mt-6 bg-emerald-600 hover:bg-emerald-700">
          <Link href={reset ? "/login" : "/reset-password"}>
            {reset ? "Return to sign in" : "Open demo reset link"}
            <ArrowRight />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
