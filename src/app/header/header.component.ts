import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedIn = false;
  constructor(
    private authentificationSerice:AuthentificationService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        console.log('userSession', userSession);
        if (userSession) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  onSignOut(){
 this.authentificationSerice.signOutUser();
  }


}
