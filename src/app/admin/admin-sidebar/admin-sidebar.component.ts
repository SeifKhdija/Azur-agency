import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

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
        }
      }
    );
  }

  
  onSignOut(){
    this.authentificationSerice.signOutUser();
    this.isLoggedIn=false;
   
     }

}
