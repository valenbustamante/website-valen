import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";
import { PageScrollbar } from "../components/PageScrollbar";
import { DrawingBoard } from "../components/DrawingBoard";
import { themeCssVariables } from "../theme.config";

export const metadata: Metadata = {
  title: "Valentina Bustamante ! Data Science & AI",
  description: "Data science and applied AI portfolio.",
  icons: { icon: "/img/doodles/footer-self-portrait.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCssVariables }} />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <PageScrollbar />
          <DrawingBoard />
        </LanguageProvider>
      </body>
    </html>
  );
}
