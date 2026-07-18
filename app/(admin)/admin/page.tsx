"use client"

import { Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { AdminDashboard } from "@/components/admin-dashboard"

export default function AdminPage() {
  const router = useRouter()
  const [message, setMessage] = useState("")

  const notify = (nextMessage: string) => {
    setMessage(nextMessage)
    window.setTimeout(() => setMessage(""), 2600)
  }

  return (
    <>
      <AdminDashboard onExit={() => router.push("/")} notify={notify} />
      {message && <div className="toast"><Check size={17} />{message}</div>}
    </>
  )
}
