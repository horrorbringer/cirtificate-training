"use client";

import { useParams, useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { CourseDetail, courses } from "@/app/(public)/page";

const toSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [toast, setToast] = useState("");
  const course =
    courses.find((item) => toSlug(item.title) === slug) ?? courses[0];

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  return (
    <>
      <CourseDetail
        course={course}
        onBack={() => router.push("/courses")}
        showToast={showToast}
      />
      {toast && (
        <div className="toast">
          <CheckCircle2 /> {toast}
        </div>
      )}
    </>
  );
}
