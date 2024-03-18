'use client'

import Image from 'next/image'
import wareflow_logo from '@/public/wareflow_logo.png'
import { Audiowide } from 'next/font/google'
import { FileText, LayoutDashboard, MoreVertical, Package, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { signOutUser } from '@/app/actions/userActions';
import { WAREHOUSES, CONTACTS } from '@/data/mockedData';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import React, { useEffect } from 'react';
import { Separator } from '@radix-ui/react-separator';

const AUDIOWIDE = Audiowide({
    weight: ['400'],
    subsets: ['latin'],
})
const ICONSIZE = 16
const MENUTABS = [
    {
        'name': 'Dashboard',
        'icon': <LayoutDashboard size={ICONSIZE} />,
        'href': '/dashboard',
        'notifications': '0',
    },
    {
        'name': 'Contatti',
        'icon': <Users size={ICONSIZE} />,
        'href': '/dashboard/contacts',
        'notifications': CONTACTS.length.toString(),

    },
    {
        'name': 'Ordini',
        'icon': <FileText size={ICONSIZE} />,
        'href': '/dashboard/orders',
        'notifications': '0',

    },
    {
        'name': 'Packaging',
        'icon': <Package size={ICONSIZE} />,
        'href': '/dashboard/packaging',
        'notifications': '0',

    }
]

export default function SideMenu() {
    const tabStyle = 'row h-fit w-full space-x-2 p-2 rounded-md overflow-clip items-center justify-between hover:bg-slate-200';
    const tabProfileStyle = 'row space-x-2 p-2 h-fit items-center justify-between bg-slate-50 hover:bg-slate-100'
    const titleStyle = 'text-sm font-normal';
    const subTitleStyle = 'text-xs font-normal opacity-50';

    // STATE
    const [open, setOpen] = React.useState(false)
    const [warehouseSelected, setWarehouseSelected] = React.useState(1);

    useEffect(() => { }, [warehouseSelected])

    // METHODS
    function handleSignOut() { signOutUser() }

    function handleWarehouseChange(index: number) {
        setOpen(!open);
        setWarehouseSelected(index);
    }

    const isActive = (href: string) => {
        if (usePathname().includes(href)) return true
        return false
    }

    return <aside className='col h-screen w-1/5 bg-slate-100 space-y-6 p-4 '>
        <section className='row space-x-2 items-center'>
            <Image src={wareflow_logo} alt={'wareflow logo'} layout='fit' className='w-8 h-8' />
            <h5 className={AUDIOWIDE.className}>WAREFLOW</h5>
        </section>
        <section className='col flex-1 space-y-2  w-full'>
            {
                MENUTABS.map(
                    (tab, index) => {
                        return <a key={index} href={tab.href} className={tabStyle + (isActive(tab.href) ? ' bg-slate-200' : '')}>
                            <section className='row space-x-2 items-center'>
                                {tab.icon}
                                <p className='text-sm'>{tab.name}</p>
                            </section>
                            <label className='text-xs font-medium text-pink-500 px-2 py-0 border-[0.8px] border-pink-500 rounded-full'>{tab.notifications}</label>
                        </a>
                    }
                )
            }
        </section>
        <section className='bg-slate-200 w-full h-[1px]' />

        {/* PROFILE & WAREHOUSE */}
        <section className='col h-fit border space-y-[1px] rounded-md overflow-clip bg-slate-300'>
            <Button onClick={handleSignOut} variant={'ghost'} className={tabProfileStyle + ' rounded-none'}>
                <section className='col space-y-0 h-fit'>
                    <p className={titleStyle}>{'Francesco'}</p>
                    <p className={subTitleStyle}>{'Supervisore'}</p>
                </section>
                <MoreVertical size={ICONSIZE} color='gray' />
            </Button>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger className={tabProfileStyle}>
                    <section className='col items-start'>
                        <p className='text-sm font-medium'>
                            {WAREHOUSES.find((warehouse) => warehouse.id === warehouseSelected)?.name}
                        </p>
                        <p className='text-xs text-black/50'>
                            {WAREHOUSES.find((warehouse) => warehouse.id === warehouseSelected)?.street}
                        </p>
                    </section>
                </PopoverTrigger>
                <PopoverContent className=' bg-background border rounded-t-md  animate-in'>
                    <section className='col'>
                        {

                            WAREHOUSES.filter((warehouse, _) => warehouse.id !== warehouseSelected).map(
                                (warehouse, index) => {
                                    return <>
                                        <section key={index} className='col p-2 w-[212px] items-start justify-center rounded-md hover:cursor-pointer hover:bg-black/5' onClick={() => handleWarehouseChange(warehouse.id)}>
                                            <p className='text-sm font-medium'>{warehouse.name}</p>
                                            <p className='w-full text-xs text-black/50'>{warehouse.street}</p>
                                        </section>
                                        {index < WAREHOUSES.length - 2 ? <Separator className='w-full h-[1px] bg-black/20' /> : null}
                                    </>
                                }
                            )
                        }
                    </section>
                </PopoverContent>
            </Popover>
        </section>
    </aside>


}