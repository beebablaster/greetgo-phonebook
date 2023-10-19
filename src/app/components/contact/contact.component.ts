import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Contacts, GetContactsResult} from "@capacitor-community/contacts";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ContactComponent  implements OnInit {
  contacts: any[] = []
  constructor() { }

  ngOnInit() {
    this.getContacts()
  }

  async getContacts(){
    try {
      const permission = await Contacts.requestPermissions();
      console.log('permission: ', permission.contacts);
      if(!permission?.contacts) return;
      else if(permission?.contacts == 'granted') {
        const result = await Contacts.getContacts({
          projection: {
            name: true,
            phones: true,
            emails: true,
            image: true
          }
        });
        console.log('result: ', result);
        this.contacts = result.contacts;
        console.log(this.contacts);
      }
    } catch(e) {
      console.log(e);
    }
  }

}
