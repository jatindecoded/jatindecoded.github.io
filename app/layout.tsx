"use client"
import { Navbar1 } from "@/components/navbar1";
import "./globals.css";
import { Footer2 } from "@/components/footer2";
import { ProgressProvider } from '@bprogress/next/app';
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ProgressProvider
          height="4px"
          color="oklch(0.59 0.1988 141.8)"
        // options={{ showSpinner: false }}
        // shallowRouting
        >
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
        </ProgressProvider>
      </body>
    </html>
  );
}
