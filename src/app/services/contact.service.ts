import { Injectable } from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";
import {Contact} from "../interfaces/contact";
import {Phone} from "../interfaces/phone";
import {Email} from "../interfaces/email";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  selectedContact: Contact | null = null;
  constructor() {}

  setSelectedContact(contact: Contact) {
    this.selectedContact = contact;
  }

  getSelectedContact() {
    return this.selectedContact;
  }

   convertToContactArray(contacts: any[]): Contact[] {
      return contacts.map((contact) => this.convertToContact(contact));
    }

   convertToContact(contact: any): Contact {
    const contactId = contact.contactId || '';
    const name = contact.name?.display || '';
    const emails = contact.emails?.map((email: any) => ({
      type: email.type || '',
      isPrimary: email.isPrimary || false,
      address: email.address || '',
    })) || null;
    const phones = contact.phones?.map((phoneData: any) => ({
      type: phoneData.type || '',
      isPrimary: phoneData.isPrimary || false,
      phone: phoneData.number || '',
    })) || null;
    const organization = contact.organization?.company || '';

    const convertedContact: Contact = { contactId, name, emails, phones, organization };
    return convertedContact;
  }

  async getContacts(){
    try {
      const permission = await Contacts.requestPermissions();
      if(!permission?.contacts) return
      else if(permission?.contacts == 'granted') {
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            organization: true,
            phones: true,
            emails: true,
            postalAddresses: true,
            birthday: true
          }
        });
        const convertedContacts = this.convertToContactArray(result.contacts)
        return convertedContacts
      }
    } catch(e) {
      console.error('Error fetching contacts:', e);
      return e;
    }
  }
}
