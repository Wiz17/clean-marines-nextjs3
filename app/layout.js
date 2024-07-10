import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'flowbite';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clean Marines",
  description: "Clean marines non profit organisation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{position:'fixed',top:0,width:'100%',zIndex:'100'}}>
        <Navbar />
        </div>
        {children}
       
        <Footer />
      </body>
    </html>
  );
}
