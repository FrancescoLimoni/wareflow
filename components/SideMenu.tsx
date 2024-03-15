'use client'

import Image from 'next/image'
import wareflow_logo from '@/public/wareflow_logo.png'
import { Audiowide } from 'next/font/google'
import { FileText, LayoutDashboard, MoreVertical, Package, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { signOutUser } from '@/app/actions/userActions';

const AUDIOWIDE = Audiowide({
    weight: ['400'],
    subsets: ['latin'],
})
const ICONSIZE = 16
const MENUTABS = [
    {
        'name': 'Dashboard',
        'icon': <LayoutDashboard size={ICONSIZE} />,
        'href': '/dashboard'
    },
    {
        'name': 'Contatti',
        'icon': <Users size={ICONSIZE} />,
        'href': '/contacts'
    },
    {
        'name': 'Ordini',
        'icon': <FileText size={ICONSIZE} />,
        'href': '/orders'
    },
    {
        'name': 'Packaging',
        'icon': <Package size={ICONSIZE} />,
        'href': '/packaging'
    }
]
const PROFILETAB = {
    'name': 'Profile',
    // 'icon': <Package size={ICONSIZE} />,
    'href': '/profile'
};
const WAREHOUSE = {
    'name': 'Profile',
    // 'icon': <Package size={ICONSIZE} />,
    'href': '/profile'
};

export default function SideMenu() {
    const tabStyle = 'row h-fit w-full space-x-2 p-2 rounded-md overflow-clip items-center justify-between hover:bg-slate-200';
    const tabProfileStyle = 'row space-x-2 p-2 h-fit items-center justify-between bg-slate-50 hover:bg-slate-100'
    const titleStyle = 'text-sm font-normal';
    const subTitleStyle = 'text-xs font-normal opacity-50';
    const isActive = (href: string) => {
        if (usePathname().includes(href)) return true

        return false
    }

    return <main className='col h-screen w-1/5 bg-slate-50 space-y-6 p-4 '>
        <div className='row space-x-2 items-center'>
            <Image src={wareflow_logo} alt={'wareflow logo'} layout='fit' className='w-8 h-8' />
            <h5 className={AUDIOWIDE.className}>WAREFLOW</h5>
        </div>
        <div className='col flex-1 space-y-2  w-full'>
            {
                MENUTABS.map(
                    (tab, index) => {
                        return <a key={index} href={tab.href} className={tabStyle + (isActive(tab.href) ? ' bg-slate-200' : '')}>
                            <div className='row space-x-2 items-center'>
                                {tab.icon}
                                <p className='text-sm'>{tab.name}</p>
                            </div>
                            <label className='text-xs font-medium text-pink-500 px-2 py-0 border-[0.8px] border-pink-500 rounded-full'>10</label>
                        </a>
                    }
                )
            }
        </div>
        <div className='bg-slate-200 w-full h-[1px]' />

        {/* PROFILE & WAREHOUSE */}
        <div className='col h-fit border space-y-[1px] rounded-md overflow-clip bg-slate-300'>
            <Button onClick={handleSignOut} variant={'ghost'} className={tabProfileStyle + ' rounded-none'}>
                <div className='col space-y-0 h-fit'>
                    <p className={titleStyle}>{'Francesco'}</p>
                    <p className={subTitleStyle}>{'Supervisore'}</p>
                </div>
                <MoreVertical size={ICONSIZE} color='gray' />
            </Button>
            <a href={WAREHOUSE.href} className={tabProfileStyle}>
                <div className='col space-y-0 h-fit'>
                    <p className={titleStyle}>{'Magazzino 1'}</p>
                    <p className={subTitleStyle}>{'Via Emilia 32'}</p>
                </div>
                <MoreVertical size={ICONSIZE} color='gray' />
            </a>
        </div>
    </main>

    function handleSignOut() {
        signOutUser()
    }
}