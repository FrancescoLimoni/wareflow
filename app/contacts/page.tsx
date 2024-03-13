'use client';

import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DataTableContacts } from "./data-table";
import { contacts, dataTableColumns } from "./data-table-columns";

export default function ContactsPage() {
    const tabs = ['Clients', 'Suppliers', 'Employees', 'Others'];
    const [selection, setSelection] = useState(0);
    const activeTabStyle = 'text-sm text-center font-medium text-pink-500';
    const defaultTabStyle = 'text-sm text-center font-normal text-gray-500';
    const activeSeparatorStyle = "h-[1.6px] bg-pink-500 w-full ";
    const defaultSeparatorStyle = "h-[1.6px] bg-transparent w-full ";

    return <main className='col p-4 w-full h-full space-y-4'>
        <div className="row justify-between items-center">
            <div className="row space-x-4">
                <h3>Contatti</h3>
                <ol className="row w-1/3">
                    {
                        tabs.map((item, index) =>
                            <li className="flex flex-col flex-1 space-y-[1.6px] px-4 py-1 rounded-md cursor-pointer hover:bg-pink-50" onClick={() => handleTabCliccked(index)}>
                                <p className={selection == index ? activeTabStyle : defaultTabStyle}>{item}</p>
                                <Separator className={selection == index ? activeSeparatorStyle : defaultSeparatorStyle} />
                            </li>
                        )
                    }

                </ol>
            </div>
            <Link className="bg-pink-500 rounded-full p-2 w-fit h-fit shadow-md hover:bg-pink-600" href={"/newContact"}>
                <Plus size={20} color="white" />
            </Link>
        </div>
        <DataTableContacts columns={dataTableColumns} data={contacts} />
    </main >

    // METHODS
    function handleTabCliccked(index: number) {
        setSelection(index);
    }

    function handleNewContact() {
        console.log('new contact');
    }

}