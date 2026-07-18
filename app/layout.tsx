import "@fontsource-variable/manrope";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "CertiLearn — Learn. Prove. Grow.",
  description: "A UI mockup for a global training and certification platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
