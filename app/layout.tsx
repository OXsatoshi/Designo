import { Jost } from "next/font/google";
import "./globals.css";
import Heading from "./_components/layout/heading";
import Footer from "./_components/layout/footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <body className="font-jost bg-surface-base text-text-body antialiased">
        <Heading />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
