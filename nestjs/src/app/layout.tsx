import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3 } from "next/font/google";
import { StyledEngineProvider } from "@mui/material/styles";
import HeaderLeftLayout from "../components/layout/header-left/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--source-sans",
  subsets: ['latin'],
  weight: ["400", "700"]
})

export const metadata: Metadata = {
  title: "Documentation | NestJS - A progressive Node.js framework",
  description: "Created By Parmeet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/nestjs-logo.svg" type="image/x-icon" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourceSans.variable}`}>
        <StyledEngineProvider injectFirst>
          <HeaderLeftLayout>
            {children}
          </HeaderLeftLayout>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
