import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hilalabdullah.my.id'),
  title: 'Hilal Abdullah — Portfolio',
  description: 'Portfolio web & logo design by Hilal Abdullah.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true }, // penting
  openGraph: {
    title: 'Hilal Abdullah — Portfolio',
    url: 'https://hilalabdullah.my.id',
    type: 'website',
  },
  icons: { icon: '/favicon.png' }, // pastikan file ada
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className= {`${inter.variable} antialiased`}
      >
        {children}
        <SpeedInsights/>
      </body>
    </html>
  );
}
