import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {ContactComponent} from "../components/contact/contact.component";
import { ContactService } from "../services/contact.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ContactComponent, CommonModule],
})
export class HomePage implements OnInit {
  contacts: any[] = []
  constructor(private contactService: ContactService) {}
   ngOnInit() {
     this.contactService.getContacts().then((result: any) => {
       this.contacts = result
       console.log(this.contacts)
    })
  }
}
