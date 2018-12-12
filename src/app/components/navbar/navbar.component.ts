import { Component, OnInit } from '@angular/core';
import * as auth0 from 'auth0-js';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private auth: AuthService) {
    auth.handleAuthentication();
   }

  ngOnInit() {
  }

  login(){
    this.auth.login();
  }

  salir(){
    this.auth.logout();
  }

}
