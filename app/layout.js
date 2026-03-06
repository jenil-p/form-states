import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CheckoutProvider } from "@/context/CheckoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "check-out flow",
  description: "Cart Review - address - confirmation - payment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CheckoutProvider>
          {children}
        </CheckoutProvider>
      </body>
    </html>
  );
}
