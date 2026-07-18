"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { CertificateVerification } from "@/components/certificate-verification";

export default function VerifyCertificatePage() {
  const [toast, setToast] = useState("");

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  return (
    <>
      <CertificateVerification notify={notify} />
      {toast && (
        <div className="toast">
          <CheckCircle2 /> {toast}
        </div>
      )}
    </>
  );
}
