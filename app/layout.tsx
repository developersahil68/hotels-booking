import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

// import "tailwindcss";

import "@/app/_styles/globals.css";

// This is good for SEO
export const metadata: Metadata = {
  title: {
    template: "%s : The Wild Oasis",
    default: "Welcome : The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel , located in the heart of the Italian Dolomites , surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100">
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
