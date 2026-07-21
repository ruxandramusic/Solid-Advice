import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solid Advice — Creative intelligence for meaningful growth",
  description: "Solid Advice is a boutique consulting studio for people and brands ready to make their next move count.",
  metadataBase: new URL("https://solidadvice.co"),
  openGraph: {
    title: "Solid Advice — Creative intelligence for meaningful growth",
    description: "Big-picture thinking. Real-world momentum.",
    type: "website",
    url: "https://solidadvice.co/",
    siteName: "Solid Advice",
    images: [{ url: "/og-field-notes.png", width: 1200, height: 630, alt: "Solid Advice — Creative intelligence for meaningful growth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solid Advice — Creative intelligence for meaningful growth",
    description: "Big-picture thinking. Real-world momentum.",
    images: ["/og-field-notes.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
