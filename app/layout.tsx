import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";
import { PageScrollbar } from "../components/PageScrollbar";
import { DrawingBoard } from "../components/DrawingBoard";
import { themeCssVariables } from "../theme.config";
import { publicAsset } from "../lib/assets";

const nunito = localFont({
  src: [
    { path: "../public/fonts/nunito/Nunito-Regular.ttf", weight: "400" },
    { path: "../public/fonts/nunito/Nunito-Bold.ttf", weight: "700" },
    { path: "../public/fonts/nunito/Nunito-ExtraBold.ttf", weight: "800" },
    { path: "../public/fonts/nunito/Nunito-Black.ttf", weight: "900" },
  ],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Valentina Bustamante ! Data Science & AI",
  description: "Data science and applied AI portfolio.",
  icons: { icon: publicAsset("/img/doodles/footer-self-portrait.png") },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCssVariables }} />
      </head>
      <body className={nunito.variable}>
        <LanguageProvider>
          {children}
          <PageScrollbar />
          <DrawingBoard />
        </LanguageProvider>
      </body>
    </html>
  );
}
