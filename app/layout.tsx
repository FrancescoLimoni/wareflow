'use client'

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Image from 'next/image'
import logo from '@/public/wareflow_logo.png'
import astrocode from '@/public/astrocode_logo.png'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function PublicLayout({ children }: { children: React.ReactNode; }) {
    const sectionStyle = 'col w-1/6 px-10 space-y-2';
    const separatorStyle = 'h-full w-[2.4px] bg-pink-900/10 rounded-full';
    const aStyle = 'text-sm text-black hover:underline';
    const pathname = usePathname();
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/about-us' },
        { name: 'Contact us', href: '/contact-us' },
    ];

    // METHODS
    const hideNavBar = () => {
        if (pathname.includes('/dashboard')) return true

        return false
    }

    return (
        <html lang="en" className={GeistSans.className}>
            <body className="col bg-background text-foreground overflow-hidden h-screen w-full">
                {
                    hideNavBar() ? null : <nav className="row space-x-4 items-center justify-between bg-white-50 h-fit w-full p-4 border-b border-black/20">
                        <Image src={logo} alt={'background image'} className='w-10 h-10 flex' style={{ "objectFit": "contain" }} />
                        <div className="row space-x-2 items-center">
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
                        <Link href={'/dashboard'} className='px-4 py-1 text-sm font-medium rounded-md border-[1.6px]</a> border-pink-300 text-white bg-pink-500 hover:bg-pink-600 hover:border-pink-400'>Dashboard</Link>
                    </nav>
                }
                {children}
                <footer className="col">
                    <div className="row px-8 py-4 space-x-4 bg-pink-500/20 items-center justify-between">
                        <section className="col flex-1 space-y-6">
                            <Image src={astrocode} alt={"Astrocode logo"} className="w-10 h-10" style={{ objectFit: "contain" }} />
                            <section>
                                <p className="text-base text-black">Astracode S.r.l</p>
                                <p className="text-sm text-black/70">Via G. Marconi, 1</p>
                                <p className="text-sm text-black/70">Segrate (MI), 20090</p>
                            </section>
                        </section>
                        <Separator className={separatorStyle} />
                        <section className={sectionStyle}>
                            <h5>Explore</h5>
                            <a href="/" className={aStyle}>Home</a>
                            <a href="/" className={aStyle}>About us</a>
                            <a href="/" className={aStyle}>Contact us</a>
                        </section>
                        <Separator className={separatorStyle} />
                        <section className={sectionStyle}>
                            <h5>Blogs</h5>
                            <a href="/" className={aStyle}>Newsroom</a>
                            <a href="/" className={aStyle}>Research</a>
                            <a href="/" className={aStyle}>Case study</a>
                        </section>
                        <Separator className={separatorStyle} />
                        <section className={sectionStyle}>
                            <h5>Policies</h5>
                            <a href="/" className={aStyle}>Privacy Policy</a>
                            <a href="/" className={aStyle}>Terms of Service</a>
                            <a href="/" className={aStyle}>Cookie Policy</a>
                        </section>
                        <Separator className={separatorStyle} />
                        <section className={sectionStyle}>
                            <h5>Follow up</h5>
                            <a href="/" className={aStyle}>LinkedIn</a>
                            <a href="/" className={aStyle}>Google</a>
                            <a href="/" className={aStyle}>X</a>
                        </section>
                    </div>
                    <p className="flex px-10 py-4 text-sm text-black/50 items-center justify-center bg-pink-500/15">© 2024 Wareflow S.r.l
                        <span className="ml-2">-</span>
                        <span className="ml-2">P.IVA IT6533874670</span>

                    </p>

                </footer>

            </body>
        </html>
    );
}


