"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { LearnerDashboard } from "@/components/learner-dashboard"

export default function DashboardPage() {
  const router = useRouter()
  const [message, setMessage] = useState("")
  const notify = (nextMessage: string) => {
    setMessage(nextMessage)
    window.setTimeout(() => setMessage(""), 2600)
  }

  return <LearnerDashboard onBrowse={() => router.push("/")} onSignOut={() => router.push("/login")} notify={notify} message={message} />
}
