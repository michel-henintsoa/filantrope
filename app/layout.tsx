import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Filantrope | Gestion de Files d'Attente et Rendez-vous",
    template: "%s | Filantrope"
  },
  description: "Révolutionnez l'accueil de vos usagers avec Filantrope. Solution de file d'attente virtuelle, prise de rendez-vous en ligne et ticket digital sur mobile. Adieu l'attente debout !",
  keywords: [
    "gestion file d'attente",
    "ticket virtuel",
    "prise de rendez-vous en ligne",
    "file d'attente virtuelle",
    "application mobile file d'attente",
    "borne interactive",
    "accueil usagers",
    "expérience client",
    "Filantrope",
    "Libreville",
    "Gabon",
    "Afrique",
    "optimal"
  ],
  authors: [{ name: "Michel Champagnat" }],
  creator: "Michel Champagnat | michelherilalaina@gmail.com",
  publisher: "Filantrope",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Filantrope - La fin de l'attente inutile",
    description: "Solution complète de gestion de files d'attente et rendez-vous. Optimisez vos flux et améliorez l'expérience de vos usagers.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Filantrope',
    images: [
      {
        url: '/logo/logo.png',
        width: 800,
        height: 600,
        alt: 'Filantrope Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Filantrope | Gestion de Files d'Attente Intelligente",
    description: "Simplifiez la vie de vos usagers avec nos tickets virtuels et notifications mobiles.",
    images: ['/logo/logo.png'],
  },
  // icons: {
  //   icon: '/logo/logo.png',
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
