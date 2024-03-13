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
        avatar: '/assets/avatar1.png',
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@email.com',
        phone: '+39 3478712934',
        type: 'client',
    },
    {
        id: '2',
        avatar: '/assets/avatar2.png',
        firstname: 'Albert',
        lastname: 'Smith',
        email: 'albert.smith@email.com',
        phone: '+39 3208401347',
        type: 'supplier',
    },
    {
        id: '3',
        avatar: '/assets/avatar3.png',
        firstname: 'Evelyn',
        lastname: 'Martinez',
        email: 'evelyn.martinez@email.com',
        phone: '+1 214029472',
        type: 'employee',
    }, {
        id: '4',
        avatar: '/assets/avatar2.png',
        firstname: 'Fernando',
        lastname: 'Gonzalez',
        email: 'fernando.gonzalez@email.com',
        phone: '+39 33095127383',
        type: 'client',
    },
];

