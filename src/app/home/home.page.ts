import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {ContactComponent} from "../components/contact/contact.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ContactComponent],
})
export class HomePage {
  constructor() {}
}
