import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import { ContactService } from "../../services/contact.service";
import {Contact} from "../../interfaces/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ContactComponent {
  @Input() contact: any

  constructor(private router: Router, private contactService: ContactService) {
  }

  navigateToContactDetails(contact: Contact) {
    this.contactService.setSelectedContact(contact);
    this.router.navigate(['/details', contact.contactId]);
  }
}
