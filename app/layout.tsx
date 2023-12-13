import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuraMock - AI-Powered Mock Interviews",
  openGraph: {
    title: "NeuraMock - AI-Powered Mock Interviews",
    description:
      "NeuraMock is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: [
      {
        url: "https://neuramock-ai.vercel.app/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuraMock - AI-Powered Mock Interviews",
    description:
      "NeuraMock is an AI-powered mock interview platform that helps you practice for your next job interview.",
    images: ["https://neuramock-ai.vercel.app/opengraph-image"],
    creator: "@Ashutos56695774",
  },
  metadataBase: new URL("https://neuramock-ai.vercel.app/"),
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
