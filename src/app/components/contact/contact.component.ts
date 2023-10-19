import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {Contacts, GetContactsResult} from "@capacitor-community/contacts";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ContactComponent {
  @Input() contact: any

  constructor(private router: Router) {
  }

  navigateToContactDetails(contact: any) {
    this.router.navigate(['/details', contact]);
  }
}
