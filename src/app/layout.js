import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sam Rusk",
  description: "Sammy Tuesday Rusk is a filmmaker, creative professional, and UCLA grad. Welcome to Sam's portfolio and website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
