"use client"

import { ColumnDef } from "@tanstack/react-table"
type Contact = {
    id: string,
    avatar: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    type: "client" | "supplier" | "employee" | "other",
}

export const dataTableColumns: ColumnDef<Contact>[] = [
    {
        accessorKey: 'firstname',
        header: 'Firstname',
    },
    {
        accessorKey: 'lastname',
        header: 'Lastname',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
    },
    {
        accessorKey: 'type',
        header: 'Type',
    },
];

export const contacts: Contact[] = [
    {
        id: '1',
        avatar: 'https://randomuser.me/api/portraits',
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@email.com',
        phone: '+39 3478712934',
        type: 'client',
    },
    {
        id: '2',
        avatar: 'https://randomuser.me/api/portraits',
        firstname: 'Albert',
        lastname: 'Smith',
        email: 'albert.smith@email.com',
        phone: '+39 3208401347',
        type: 'supplier',
    },
    {
        id: '3',
        avatar: 'https://randomuser.me/api/portraits',
        firstname: 'Evelyn',
        lastname: 'Martinez',
        email: 'evelyn.martinez@email.com',
        phone: '+1 214029472',
        type: 'employee',
    }, {
        id: '4',
        avatar: 'https://randomuser.me/api/portraits',
        firstname: 'Fernando',
        lastname: 'Gonzalez',
        email: 'fernando.gonzalez@email.com',
        phone: '+39 33095127383',
        type: 'client',
    },
];

