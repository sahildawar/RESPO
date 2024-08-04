import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"] ,  weight: ['400','700'] });
const oswald = Oswald({ subsets: ["latin"] ,  weight: ['400','700'] });
import "./globals.css";

export const metadata = {
  title: "CARSION WALK",
  description: "DISPLAYIN ALL YOUR FAVOURITE HYPER-SUPER CARS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children} 
      <Footer/>  
        </body>
    </html>
  );
}
