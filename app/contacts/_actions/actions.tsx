import { Contact, contacts } from "../data-table-columns";

export async function createContact(contact: Contact) {
    console.log('createContact');

    await new Promise(resolve => setTimeout(resolve, 2500));
    contacts.push(contact);
    console.log('contacts:', contacts);
    return;

}