import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Learning | CertiLearn",
  description: "CertiLearn member learning dashboard UI mockup.",
}

export default function MemberLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main data-layout="member" className="min-h-screen bg-[#f6f8fb]">{children}</main>
}
