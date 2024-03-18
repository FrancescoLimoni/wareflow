'use client';

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACTS } from "@/data/mockedData";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import InvitationForm from "./_forms/invitationForm";


export default function ContactsPage() {
    const tabs = ['All', 'Client', 'Supplier', 'Employee'];
    const headers = ['Name', 'Email', 'Phone', 'Type', ''];
    const [selection, setSelection] = useState(0);
    const [tableData, setTableData] = useState(CONTACTS);
    const activeTabStyle = 'text-sm text-center font-medium text-pink-500';
    const defaultTabStyle = 'text-sm text-center font-normal text-gray-500';
    const activeSeparatorStyle = "h-[1.6px] bg-pink-500 w-full ";
    const defaultSeparatorStyle = "h-[1.6px] bg-transparent w-full ";
    const headerStyle = "py-2 text-xs font-medium text-black/50 ";
    const cellStyle = "py-2 px-4 text-sm font-normal text-black ";

    useEffect(() => {
        filterTableData();
    }, [selection, CONTACTS]);

    return <main className='col p-4 w-full h-full space-y-4'>
        <div className="row justify-between items-center">
            <div className="row space-x-4">
                <h3>Contatti</h3>
                <ol className="row w-1/3">
                    {
                        tabs.map((item, index) =>
                            <li key={item} className="flex flex-col flex-1 space-y-[1.6px] px-4 py-1 rounded-md cursor-pointer hover:bg-pink-50" onClick={() => handleTabCliccked(index)}>
                                <p className={selection == index ? activeTabStyle : defaultTabStyle}>{item}</p>
                                <Separator className={selection == index ? activeSeparatorStyle : defaultSeparatorStyle} />
                            </li>
                        )
                    }

                </ol>
            </div>
            <Dialog>
                <DialogTrigger className="p-2 rounded-md text-sm bg-pink-500 text-white hover:bg-pink-600">{'New contact'}</DialogTrigger>
                <DialogContent>
                    <DialogTitle>New contact</DialogTitle>
                    <DialogDescription>Please fill the form to send an invitation to your new contact</DialogDescription>
                    <InvitationForm />
                </DialogContent>
            </Dialog>
        </div>
        {/* TABLE */}
        <div className="rounded-md border w-full h-full">
            {/* HEADER */}
            <ol className="row p-2 bg-black/5 space-x-1">
                {
                    headers.map((header, index) => {
                        return <li key={header} className={headerStyle + (index == 3 ? 'w-28' : index == 4 ? 'w-10' : 'flex-1')}>{header}</li>;
                    }
                    )
                }
            </ol>
            {/* BODY */}
            <div className="col w-full h-full">
                {
                    tableData.map(
                        (contact, index) =>
                            <div key={index} className="col space-y-1">
                                <Link key={index} href={`/contacts/${contact.id}`} className="row m-2 px-2 py-1 rounded-md items-center space-x-1 hover:bg-black/5">
                                    <div className="row space-x-0 flex-1 items-center ">
                                        <Image src={contact.avatar} alt={contact.avatar} width={24} height={24} className="w-6 h-6 bg-black/10 rounded-full" />
                                        <p className={cellStyle + 'flex-1'}>{contact.firstname + ' ' + contact.lastname}</p>
                                    </div>
                                    <p className={cellStyle + 'flex-1'}>{contact.email}</p>
                                    <p className={cellStyle + 'flex-1'}>{contact.phone}</p>
                                    <div className='w-28'>
                                        <p className={"flex w-fit px-2 py-[3px] rounded-md items-center justify-center text-xs font-medium bg-pink-100 text-pink-600"}>
                                            {contact.type}
                                        </p>
                                    </div>
                                    <p className={'w-10'}>...</p>

                                </Link>
                                <Separator className="h-[1px] w-full bg-black/20 " />
                            </div>

                    )
                }
            </div>
        </div>
    </main >

    // METHODS
    function handleTabCliccked(index: number) {
        setSelection(prev => index);
    }

    function filterTableData() {
        const contactsFiltered = CONTACTS.filter(
            contact => {
                if (tabs[selection] == 'All') return true;
                return contact.type == tabs[selection].toLowerCase();
            }
        );

        setTableData(contactsFiltered);
    }


}