import "./globals.scss";
import NavBar from "@/app/components/nav-bar";
import { Fira_Sans, Montserrat } from "@next/font/google";
import Footer from "@/app/components/footer";
import Printer from "@/app/components/printer";
import { Suspense } from "react";
import IndexLoadingScreen from "@/app/loading";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat-font",
});
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--firaSans-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${firaSans.variable}`}>
      <head />
      <body className="bg-xiketic font-firaSans text-white">
        <Printer />
        <NavBar />
        <div className={"min-h-screen"}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
