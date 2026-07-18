"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { CertificateVerification } from "@/components/certificate-verification";

export default function VerifyCertificatePage() {
  const router = useRouter();
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  return (
    <>
      <CertificateVerification
        onBack={() => router.push("/")}
        notify={notify}
      />
      {toast && (
        <div className="toast">
          <CheckCircle2 /> {toast}
        </div>
      )}
    </>
  );
}
