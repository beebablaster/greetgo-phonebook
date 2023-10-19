import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AuthPage implements OnInit{
  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateToHomePage(){
    this.router.navigate(['/home'])
  }
}
