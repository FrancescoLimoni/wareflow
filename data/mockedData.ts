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
        avatar: '/assets/man1.jpg',
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@email.com',
        phone: '+39 3478712934',
        type: 'client',
    },
    {
        id: '2',
        avatar: '/assets/man2.jpg',
        firstname: 'Albert',
        lastname: 'Smith',
        email: 'albert.smith@email.com',
        phone: '+39 3208401347',
        type: 'supplier',
    },
    {
        id: '3',
        avatar: '/assets/woman1.jpg',
        firstname: 'Evelyn',
        lastname: 'Martinez',
        email: 'evelyn.martinez@email.com',
        phone: '+1 214029472',
        type: 'employee',
    },
    {
        id: '4',
        avatar: '/assets/man3.jpg',
        firstname: 'Fernando',
        lastname: 'Gonzalez',
        email: 'fernando.gonzalez@email.com',
        phone: '+39 33095127383',
        type: 'client',
    },
    {
        id: '5',
        avatar: '/assets/man4.jpg',
        firstname: 'Jon',
        lastname: 'Simpson',
        email: 'jon.simposn@email.com',
        phone: '+39 6404451000',
        type: 'employee',
    },
    {
        id: '6',
        avatar: '/assets/woman2.jpg',
        firstname: 'Erica',
        lastname: 'Garza',
        email: 'erica.garza@email.com',
        phone: '+1 2426143084',
        type: 'employee',
    },
    {
        id: '7',
        avatar: '/assets/man5.jpg',
        firstname: 'Jon',
        lastname: 'Simpson',
        email: 'jon.simposn@email.com',
        phone: '+39 6404451000',
        type: 'employee',
    },
];