import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  printContactsData = async () => {
  const result = await Contacts.getContacts({
    projection: {
      // Specify which fields should be retrieved.
      name: true,
      phones: true,
      postalAddresses: true,
    },
  });

  for (const contact of result.contacts) {
    const number = contact.phones?.[0]?.number;

    const street = contact.postalAddresses?.[0]?.street;

    console.log(number, street);
  }
};
}
