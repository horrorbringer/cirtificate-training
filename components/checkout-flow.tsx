"use client";

import {
  ArrowLeft,
  Check,
  CheckCircle2,
  CreditCard,
  Gift,
  GraduationCap,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export function CheckoutFlow({
  initialPlan,
}: {
  initialPlan: "monthly" | "yearly";
}) {
  const [plan, setPlan] = useState(initialPlan);
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [complete, setComplete] = useState(false);
  const base = plan === "yearly" ? 149 : 19;
  const savings = discount ? 15 : 0;
  const total = Math.max(0, base - savings);

  const applyPromo = () =>
    setDiscount(promo.trim().toUpperCase() === "LEARN15");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    setProcessing(true);
    window.setTimeout(() => {
      setProcessing(false);
      setComplete(true);
    }, 900);
  };

  if (complete) {
    return (
      <main className="grid min-h-[calc(100vh-64px)] place-items-center bg-slate-50 px-5 py-14">
        <Card className="w-full max-w-xl items-center py-10 text-center shadow-xl">
          <span className="grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="size-8" />
          </span>
          <Badge className="bg-emerald-100 text-emerald-700">
            Membership activated
          </Badge>
          <CardTitle className="text-3xl">
            You&apos;re ready to learn.
          </CardTitle>
          <p className="max-w-md text-sm leading-7 text-slate-500">
            Your {plan} Premium membership is active. A mock receipt has been
            added to Billing & Payments.
          </p>
          <div className="grid w-full max-w-sm grid-cols-2 gap-3">
            <Button asChild variant="outline">
              <Link href="/courses">Browse courses</Link>
            </Button>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/dashboard">Go to dashboard</Link>
            </Button>
          </div>
          <p className="text-xs text-slate-400">
            UI demonstration only · No payment was processed
          </p>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-16 text-slate-950">
      <section className="border-b bg-white px-5 py-8">
        <div className="mx-auto max-w-6xl">
          <Button asChild variant="ghost" className="-ml-3">
            <Link href="/pricing">
              <ArrowLeft /> Back to pricing
            </Link>
          </Button>
          <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <Badge className="mb-3 bg-emerald-100 text-emerald-700">
                <Sparkles /> Premium membership
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Complete your membership
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Secure checkout mockup—no real payment will be made.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <LockKeyhole className="size-4 text-emerald-600" /> Encrypted
              checkout concept
            </div>
          </div>
        </div>
      </section>

      <form
        onSubmit={submit}
        className="mx-auto grid max-w-6xl gap-7 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start"
      >
        <div className="space-y-6">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>1. Choose your plan</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {(["monthly", "yearly"] as const).map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setPlan(item)}
                  className={cn(
                    "relative rounded-xl border p-5 text-left transition",
                    plan === item
                      ? "border-emerald-500 bg-emerald-50/60 ring-2 ring-emerald-500/10"
                      : "hover:border-slate-300",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <strong className="capitalize">{item} Premium</strong>
                    {plan === item && (
                      <CheckCircle2 className="size-5 text-emerald-600" />
                    )}
                  </div>
                  <div className="mt-3">
                    <strong className="text-3xl">
                      ${item === "yearly" ? "149" : "19"}
                    </strong>
                    <span className="text-sm text-slate-500">
                      {" "}
                      / {item === "yearly" ? "year" : "month"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    {item === "yearly"
                      ? "$12.42/month · Save 35%"
                      : "Flexible monthly billing"}
                  </p>
                  {item === "yearly" && (
                    <Badge className="absolute -top-2.5 right-4 bg-emerald-600">
                      Best value
                    </Badge>
                  )}
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>2. Account information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-medium">
                First name
                <Input required placeholder="Amina" />
              </label>
              <label className="grid gap-2 text-xs font-medium">
                Last name
                <Input required placeholder="Mensah" />
              </label>
              <label className="grid gap-2 text-xs font-medium sm:col-span-2">
                Email address
                <Input required type="email" placeholder="amina@example.com" />
              </label>
              <label className="grid gap-2 text-xs font-medium sm:col-span-2">
                Country or region
                <select
                  required
                  className="h-9 rounded-lg border bg-white px-3 text-sm"
                >
                  <option>Ghana</option>
                  <option>Cambodia</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>South Africa</option>
                </select>
              </label>
            </CardContent>
          </Card>

          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>3. Payment method</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="card">
                <TabsList className="mb-5 grid h-10 w-full grid-cols-2">
                  <TabsTrigger value="card">
                    <CreditCard /> Card
                  </TabsTrigger>
                  <TabsTrigger value="wallet">
                    <WalletCards /> Digital wallet
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="card" className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs font-medium sm:col-span-2">
                    Card number
                    <Input
                      required
                      inputMode="numeric"
                      placeholder="4242 4242 4242 4242"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-medium">
                    Expiry date
                    <Input required placeholder="MM / YY" />
                  </label>
                  <label className="grid gap-2 text-xs font-medium">
                    Security code
                    <Input required inputMode="numeric" placeholder="123" />
                  </label>
                  <label className="grid gap-2 text-xs font-medium sm:col-span-2">
                    Name on card
                    <Input required placeholder="Amina Mensah" />
                  </label>
                </TabsContent>
                <TabsContent value="wallet">
                  <div className="rounded-xl border border-dashed p-8 text-center">
                    <WalletCards className="mx-auto size-8 text-slate-400" />
                    <p className="mt-3 text-sm font-medium">
                      Choose a wallet after continuing
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Apple Pay, Google Pay, and PayPal UI placeholder
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <Card className="sticky top-20 shadow-lg">
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                <GraduationCap />
              </span>
              <div>
                <strong className="text-sm capitalize">{plan} Premium</strong>
                <p className="text-xs text-slate-500">
                  Renews every {plan === "yearly" ? "year" : "month"}
                </p>
              </div>
              <strong className="ml-auto text-sm">${base}.00</strong>
            </div>
            <Separator />
            <ul className="space-y-3">
              {[
                "All premium courses",
                "Unlimited resource downloads",
                "Certificate requests",
                "Cancel renewal anytime",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-xs text-slate-600">
                  <Check className="size-4 text-emerald-600" /> {item}
                </li>
              ))}
            </ul>
            <Separator />
            <div>
              <label className="text-xs font-medium">Promo code</label>
              <div className="mt-2 flex gap-2">
                <Input
                  value={promo}
                  onChange={(event) => setPromo(event.target.value)}
                  placeholder="Try LEARN15"
                />
                <Button type="button" variant="outline" onClick={applyPromo}>
                  Apply
                </Button>
              </div>
              {promo && (
                <p
                  className={cn(
                    "mt-2 text-xs",
                    discount ? "text-emerald-700" : "text-rose-600",
                  )}
                >
                  {discount
                    ? "LEARN15 applied · $15 off"
                    : "Promo code not recognized"}
                </p>
              )}
            </div>
            <Separator />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>${base}.00</span>
              </div>
              {discount && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount</span>
                  <span>−${savings}.00</span>
                </div>
              )}
              <div className="flex justify-between border-t pt-3 text-base font-semibold">
                <span>Total due today</span>
                <span>${total}.00</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3 bg-slate-50">
            <Button
              type="submit"
              className="h-10 w-full bg-emerald-600 hover:bg-emerald-700"
              disabled={processing}
            >
              {processing ? "Activating membership..." : `Pay $${total}.00`}
            </Button>
            <p className="flex items-center gap-1.5 text-center text-[10px] leading-4 text-slate-500">
              <ShieldCheck className="size-3.5 text-emerald-600" /> UI demo
              only. No real card details are stored.
            </p>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}
