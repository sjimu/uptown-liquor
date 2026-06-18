import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uptown Liquor",
  description: "Zimbabwe's Premium Liquor Destination",

  verification: {
    google: "TeY3rhwgrGwfOTUJyZwP761IZJH5LUp135Aqcpr5O-0",
  },

  icons: {
    icon: "/belgravia-logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-G8MFJGVDBD"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-G8MFJGVDBD');
        `}
      </Script>
    </head>

    <body className="min-h-full flex flex-col">
      {children}
    </body>
  </html>
);
}
