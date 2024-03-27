import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galeria de Imagens",
  description: "Interface next com o foco de vizualizar imagens e baixar"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Provider>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}