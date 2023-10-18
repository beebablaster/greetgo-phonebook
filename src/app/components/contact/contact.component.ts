import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ContactComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
