import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | CertiLearn",
  description: "CertiLearn administration workspace UI mockup.",
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section data-layout="admin" className="min-h-screen bg-slate-50">{children}</section>
}
