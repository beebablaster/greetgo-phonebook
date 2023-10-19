import { Injectable } from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {}

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
        return result.contacts
      }
    } catch(e) {
      return e
    }
  }
}
