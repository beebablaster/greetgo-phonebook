import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../services/contact.service";
import {Contact} from "../interfaces/contact";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {
  contactId: string = ''
  contact: Contact | null

  constructor(private route: ActivatedRoute, private contactService: ContactService) {
    this.contact = this.contactService.getSelectedContact();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params)
      this.contactId = params['contactId'];
      console.log(this.contact)
    });
  }
}
