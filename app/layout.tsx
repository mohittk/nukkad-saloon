import type { Metadata } from "next";
import { GoogleAnalytics } from "./GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nukkad Saloon",
  description: "An ambient street-corner radio from an always-open saloon.",
  openGraph: {
    title: "Nukkad Saloon",
    description: "An ambient street-corner radio from an always-open saloon.",
    images: ["/nukkad-saloon-hero-single-tubelight-removed-2x.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics measurementId={gaMeasurementId} />
      </body>
    </html>
  );
}
