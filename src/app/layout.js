"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Roboto_Serif } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const roboto = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

export const metadata = {
  title: "Found Pets",
  description: "Made with love 🐶",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Found Pets 🐶</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer/>

      </body>
    </html>
  );
}
