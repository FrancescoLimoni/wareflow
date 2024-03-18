
export type TContact = {
    id: string,
    avatar: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    type: 'client' | 'supplier' | 'employee' | 'Undefined',
}