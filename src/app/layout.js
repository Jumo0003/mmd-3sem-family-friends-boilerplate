import { Manrope } from "next/font/google";
import Header from "./components/Header"
import BottomNav from "./components/BottomNav"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
export const metadata = {
  title: "Family Friends",
  description: "Browse dog breeds and learn about each one.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
      <Header />
      <main className="pb-24">
        {children}
          <BottomNav />
          </main>
      </body>
    </html>
  );
}