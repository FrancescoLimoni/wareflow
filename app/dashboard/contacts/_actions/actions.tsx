import { CONTACTS } from '@/data/mockedData';
import { TContact } from '@/types/contact';

export async function createContact(contact: TContact) {
    console.log('createContact');

    await new Promise(resolve => setTimeout(resolve, 2500));
    CONTACTS.push(contact);
    console.log('contacts:', CONTACTS);
    return;

}