'use client'

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Image from 'next/image'
import logo from '@/public/wareflow_logo.png'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PublicLayout({ children }: { children: React.ReactNode; }) {
    const pathname = usePathname();
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about-us' },
        { name: 'Contact', href: '/contact-us' },
    ];

    // METHODS
    const hideNavBar = () => {
        if (pathname.includes('/dashboard')) return true

        return false
    }

    return (
        <html lang="en" className={GeistSans.className}>
            <body className="col bg-background text-foreground overflow-hidden w-full">
                {
                    hideNavBar() ? null : <header className="row space-x-4 items-center justify-between bg-white-50 h-fit w-full p-4 border-b border-black/20">
                        <Image src={logo} alt={'background image'} className='w-10 h-10 flex' style={{ "objectFit": "contain" }} />
                        <div className="row space-x-4 items-center">
                            {
                                menuItems.map((item) => {
                                    const defaultStyle = 'px-4 py-1 rounded-md text-sm text-black hover:text-pink-500 hover:bg-pink-50 ';
                                    const activeStyle = 'text-pink-500 font-medium bg-pink-50 ';
                                    const isActive = pathname.endsWith(item.href);

                                    return <a key={item.href} href={item.href} className={defaultStyle + (isActive ? activeStyle : null)}>
                                        {item.name}
                                    </a>
                                })
                            }
                        </div>
                        <Link href={'/dashboard'} className='px-4 py-1 text-sm font-medium rounded-md border-[1.6px] border-pink-300 text-white bg-pink-500 hover:bg-pink-600 hover:border-pink-400'>Dashboard</Link>
                    </header>
                }
                {children}
            </body>
        </html>
    );
}
