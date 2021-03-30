import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signinForm: FormGroup;
  isLoggedIn = false;
  isLoggedInclient=false;
  constructor(
    private formBuilder: FormBuilder,
    private authentificationSerice:AuthentificationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.initSigninForm();
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        console.log('userSession', userSession);
       
          this.isLoggedIn = true;
        
      }
    );
  }

  onSignOut(){
 this.authentificationSerice.signOutUser();
 this.isLoggedIn=false;
 this.isLoggedInclient=false;
  }
  onSubmitSigninForm() {
    console.log(this.signinForm.value)
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authentificationSerice.signInUser(email, password).then(
      (data:any) => {
        alert('Accés réussi');
        if(email=="agenceltaif@gmail.com")
        this.router.navigate(['/admin','dashboard']);
        else
        this.router.navigate(['/home']);
      }
    ).catch(
      (error) => {
alert('email ou mot de passe incorrecte')      }
    );
  }
  initSigninForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
