import { TContact } from "@/types/contact";

export const WAREHOUSES = [
    {
        'id': 1,
        'name': 'Mazzini 1',
        'street': 'Via Emilia Levante 32',
    },
    {
        'id': 2,
        'name': 'Fossolo 2',
        'street': ' Via Roselle 16',
    },
    {
        'id': 3,
        'name': 'Barca',
        'street': 'Via Paolo Giovanni Martini 12',
    },
    {
        'id': 4,
        'name': 'Ozzano',
        'street': 'Via Paolo Giovanni Martini 12',
    },
    {
        'id': 5,
        'name': 'San Lazzaro',
        'street': 'Via Paolo Giovanni Martini 12',
    },
    {
        'id': 6,
        'name': 'Mulino Parisio',
        'street': 'Via Paolo Giovanni Martini 12',
    },
];

export const CONTACTS: TContact[] = [
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
    },
    {
        id: '4',
        avatar: '/assets/avatar2.png',
        firstname: 'Fernando',
        lastname: 'Gonzalez',
        email: 'fernando.gonzalez@email.com',
        phone: '+39 33095127383',
        type: 'client',
    },
];