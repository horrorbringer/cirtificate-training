"use client"

import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Globe2, GraduationCap, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"
import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const isLogin = mode === "login"

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-[.9fr_1.1fr]">
      <section className="relative hidden overflow-hidden bg-[#102a43] p-12 text-white lg:flex lg:flex-col">
        <div className="absolute -left-32 top-1/3 size-80 rounded-full border-[60px] border-white/[.035]" />
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-emerald-400/[.07]" />
        <Link href="/" className="relative z-10 flex items-center gap-2.5 self-start"><span className="grid size-10 place-items-center rounded-xl bg-emerald-500"><GraduationCap className="size-5" /></span><span className="text-xl font-extrabold">Certi<span className="text-emerald-400">Learn</span></span></Link>
        <div className="relative z-10 my-auto max-w-lg"><span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300"><Sparkles className="size-3.5" /> Learning without borders</span><h1 className="mt-6 text-5xl font-bold leading-[1.08] tracking-tight">Build skills.<br />Earn recognition.<br /><span className="text-emerald-400">Grow anywhere.</span></h1><p className="mt-6 max-w-md text-sm leading-7 text-slate-300">Join a global community learning practical skills through expert-led courses and verifiable certificates.</p><div className="mt-9 grid grid-cols-3 gap-5 border-t border-white/10 pt-7"><AuthStat value="12k+" label="Learners" /><AuthStat value="80+" label="Countries" /><AuthStat value="4.9" label="Avg. rating" /></div></div>
        <div className="relative z-10 flex items-center gap-2 text-[10px] text-slate-400"><ShieldCheck className="size-4 text-emerald-400" /> Secure account access · UI demonstration</div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-between"><Link href="/" className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-emerald-700"><ArrowLeft className="size-4" /> Back to website</Link><Link href="/" className="flex items-center gap-2 lg:hidden"><span className="grid size-8 place-items-center rounded-lg bg-emerald-600 text-white"><GraduationCap className="size-4" /></span><strong>CertiLearn</strong></Link></div>
          {submitted ? <SuccessState isLogin={isLogin} /> : <Card className="border-0 py-0 shadow-xl shadow-slate-200/60"><CardContent className="p-6 sm:p-8"><div><p className="text-[10px] font-bold uppercase tracking-[.14em] text-emerald-600">{isLogin ? "Welcome back" : "Start learning today"}</p><h2 className="mt-2 text-2xl font-bold tracking-tight">{isLogin ? "Sign in to your account" : "Create your free account"}</h2><p className="mt-2 text-xs leading-5 text-slate-500">{isLogin ? "Continue your courses and track your progress." : "Access free training and upgrade whenever you’re ready."}</p></div>
            <div className="mt-6 grid grid-cols-2 gap-2"><Button variant="outline" type="button" onClick={() => setSubmitted(true)}><span className="font-bold text-sky-600">G</span> Google</Button><Button variant="outline" type="button" onClick={() => setSubmitted(true)}><span className="font-bold text-slate-900">in</span> LinkedIn</Button></div>
            <div className="my-6 flex items-center gap-3"><Separator className="flex-1" /><span className="text-[10px] uppercase tracking-wider text-slate-400">or use email</span><Separator className="flex-1" /></div>
            <form className="space-y-4" onSubmit={submit}>
              {!isLogin && <div className="grid gap-4 sm:grid-cols-2"><FormField label="Full name"><Input required placeholder="Your full name" /></FormField><FormField label="Country"><select required defaultValue="" className="h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus:border-ring focus:ring-3 focus:ring-ring/50"><option value="" disabled>Select country</option><option>Cambodia</option><option>Ghana</option><option>Malaysia</option><option>Nigeria</option><option>Other</option></select></FormField></div>}
              <FormField label="Email address"><Input required type="email" placeholder="name@example.com" /></FormField>
              <FormField label="Password" trailing={isLogin ? <button type="button" className="text-[10px] font-semibold text-emerald-700">Forgot password?</button> : undefined}><div className="relative"><Input required type={showPassword ? "text" : "password"} placeholder={isLogin ? "Enter your password" : "At least 8 characters"} className="pr-10" /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">{showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div></FormField>
              {!isLogin && <label className="flex items-start gap-2 text-[10px] leading-4 text-slate-500"><input required type="checkbox" className="mt-0.5 accent-emerald-600" /> I agree to the Terms of Service and Privacy Policy.</label>}
              {isLogin && <label className="flex items-center gap-2 text-[11px] text-slate-500"><input type="checkbox" className="accent-emerald-600" /> Keep me signed in</label>}
              <Button type="submit" className="h-11 w-full bg-emerald-600 hover:bg-emerald-700">{isLogin ? "Sign in" : "Create account"}<ArrowRight /></Button>
            </form>
            <p className="mt-6 text-center text-xs text-slate-500">{isLogin ? "New to CertiLearn?" : "Already have an account?"} <Link href={isLogin ? "/register" : "/login"} className="font-semibold text-emerald-700 hover:underline">{isLogin ? "Create an account" : "Sign in"}</Link></p>
          </CardContent></Card>}
          <div className="mt-6 flex justify-center gap-5 text-[9px] text-slate-400"><span className="flex items-center gap-1"><LockKeyhole className="size-3" /> Secure sign-in</span><span className="flex items-center gap-1"><Globe2 className="size-3" /> Global access</span></div>
        </div>
      </section>
    </div>
  )
}

function FormField({ label, trailing, children }: { label: string; trailing?: React.ReactNode; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 flex items-center justify-between text-[11px] font-semibold text-slate-700">{label}{trailing}</span>{children}</label>
}

function AuthStat({ value, label }: { value: string; label: string }) {
  return <div><strong className="text-2xl">{value}</strong><p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">{label}</p></div>
}

function SuccessState({ isLogin }: { isLogin: boolean }) {
  return <Card className="border-0 py-0 text-center shadow-xl shadow-slate-200/60"><CardContent className="p-8"><span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-8" /></span><h2 className="mt-5 text-2xl font-bold">{isLogin ? "Welcome back!" : "Account created!"}</h2><p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-slate-500">{isLogin ? "Your demo sign-in was successful. Continue to your learning dashboard." : "Your free demo account is ready. You can now explore courses and learning resources."}</p><Button asChild className="mt-6 bg-emerald-600 hover:bg-emerald-700"><Link href="/dashboard">Open my dashboard <ArrowRight /></Link></Button></CardContent></Card>
}
