import { Navbar1 } from "@/components/navbar1";
import "./globals.css";
import { Footer2 } from "@/components/footer2";

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
        <header className="sticky top-0 z-50 lg:px-10 px-4">
          <Navbar1 />
        </header>
        <div className="lg:px-10 px-4">
          <div className="lg: px-2">
            {children}
          </div>
          <Footer2 />
        </div>
      </body>
    </html>
  );
}
