import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {ContactComponent} from "../components/contact/contact.component";
import { ContactService } from "../services/contact.service";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";
import {Contact} from "../interfaces/contact";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ContactComponent, CommonModule],
})
export class HomePage implements OnInit {
  contacts: Contact[] = []
  constructor(private contactService: ContactService, private router: Router) {}
   ngOnInit() {
     this.contactService.getContacts().then((result: any) => {
       this.contacts = result
    })
  }
  navigateToQrPage() {
    this.router.navigate(['/qr']);
  }
}
