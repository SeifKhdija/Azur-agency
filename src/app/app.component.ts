import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AZUR-AGENCY';
  isLoggedIn = false;
  subs: Subscription; 
  router: any;
  constructor(){
    
    const firebaseConfig = {
      apiKey: "AIzaSyD0v5TgmfmKK4Z9t1l_HrECvlVjpQDadwA",
      authDomain: "oftas-be025.firebaseapp.com",
      databaseURL: "https://oftas-be025.firebaseio.com",
      projectId: "oftas-be025",
      storageBucket: "oftas-be025.appspot.com",
      messagingSenderId: "213719042235",
      appId: "1:213719042235:web:292a3ae0d9cef291c5819e",
      measurementId: "G-8N3D1RLZ7H"
    };
    firebase.initializeApp(firebaseConfig);
  
  }
  ngOnInit(): void {
     
      window.scrollTo(0, 0); // for example
 
  firebase.auth().onAuthStateChanged(
    (userSession) => {
      console.log('userSession', userSession);
if(userSession){
        this.isLoggedIn = true;
}
else
this.isLoggedIn=false;
    }
  );
  }
}
