import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata = {
  title: "CertiLearn — Learn. Prove. Grow.",
  description: "A UI mockup for a global training and certification platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
