import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Birth & Brodo | Postpartum Nourishment for Recovery",
  description: "Nourishment for the fourth trimester. Recovery-focused meals designed for the earliest days postpartum — so healing can be the priority.",
  icons: {
    icon: [
      { url: '/logo.jpg' },
      { url: '/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/logo.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: '/logo.jpg',
    shortcut: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
