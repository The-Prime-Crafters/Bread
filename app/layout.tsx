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
  title: "Birth & Brodo | Nourishing Meals for Pregnancy & Postpartum",
  description: "Chef-made meals designed to support healing, energy, and nourishment during pregnancy and postpartum recovery. Join the waitlist for Spring 2026 launch.",
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
