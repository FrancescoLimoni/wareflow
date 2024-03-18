"use client"

import { Contact } from "@/data/mockedData";
import { ColumnDef } from "@tanstack/react-table"

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



