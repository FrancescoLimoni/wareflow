'use client'

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { usePathname } from "next/navigation";
import SideMenu from "@/components/SideMenu";


export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname()
  const hideSideBar = () => {
    if (pathname.includes('/dashboard')) return false
    if (pathname.includes('/contacts')) return false
    if (pathname.includes('/orders')) return false
    if (pathname.includes('/packaging')) return false


    return true
  }

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="row bg-background text-foreground overflow-hidden">
        {
          hideSideBar() ? null : <SideMenu />
        }
        <main className="w-screen h-screen flex flex-col items-start">
          {children}
        </main>
      </body>
    </html>
  );
}
