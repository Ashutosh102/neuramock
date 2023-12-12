import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LiftOff - AI-Powered Mock Interviews",
  openGraph: {
    title: "LiftOff - AI-Powered Mock Interviews",
    description:
      "LiftOff is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://liftoff-steel.vercel.app/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiftOff - AI-Powered Mock Interviews",
    description:
      "LiftOff is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://liftoff-steel.vercel.app/opengraph-image"],
    creator: "@Ashutos56695774",
  },
  metadataBase: new URL("https://liftoff-steel.vercel.app/"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
