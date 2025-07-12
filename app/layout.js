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

export const metadata = {
  title: "IPlantTech",
  description:
    "Grow smarter with iPlant Tech — the smart gardening solution that automates watering, lighting, and plant care.",
  icons: {
    icon: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg",
    shortcut: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg",
    apple: "https://res.cloudinary.com/dmgt3ctyd/image/upload/v1752267029/logo_tqj6ky.svg",
  },
  openGraph: {
    title: "IPlantTech",
    description:
      "Grow smarter with iPlant Tech — automate watering, lighting, and plant care easily.",
    url: "https://iplantechsite.vercel.app/", 
    siteName: "IPlantTech",
    images: [
      {
        url: "https://pin.it/4gDaEXebn", 
        width: 1200,
        height: 630,
        alt: "IPlantTech Smart Gardening",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPlantTech",
    description:
      "Grow smarter with iPlant Tech — automate watering, lighting, and plant care.",
    images: ["https://iplanttech.com/og-image.jpg"], // same or different image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
