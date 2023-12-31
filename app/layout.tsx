import type { Metadata } from "next";
import NavBar from "../components/NavBar/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Experiments in the third dimension",
  description: "Generated by create next app",
  applicationName: "Experiments in the third dimension",
  keywords: ["Three.js", "Creative Developer", "Portfolio"],
  creator: "Emanuel Solis",
  icons: {
    icon: {
      url: "/REEEEEEE.jpg",
    },
  },
  openGraph: {
    images: {
      url: "/REEEEEEE.jpg",
      width: 32,
      height: 32,
    },
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
