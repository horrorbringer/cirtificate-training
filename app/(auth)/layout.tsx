import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Account | CertiLearn",
  description: "CertiLearn account access UI mockup.",
}

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main data-layout="auth" className="min-h-screen bg-[#f4f8f7]">{children}</main>
}
