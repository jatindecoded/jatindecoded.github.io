import { Navbar1 } from "@/components/navbar1";
import "./globals.css";
import { Footer2 } from "@/components/footer2";
import { ProgressProvider } from '@bprogress/next/app';
import { Suspense } from "react";
import Providers from "./providers";
import properties from "@/data/properties.json"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`antialiased`}
      >
        <Providers>
          <header className="sticky top-0 z-50">
            <Navbar1 />
          </header>
          <div className="lg:px-10 px-4">
            <div className="lg: px-2">
              <Suspense>
                {children}
              </Suspense>
            </div>
            <Footer2 />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: properties["company.name"].value.split(" ")[0] + " - Air Oil Filters, Separators",
  description: properties["meta.description"].value,
};