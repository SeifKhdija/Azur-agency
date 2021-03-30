import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { Comptes } from 'src/app/interfaces/comptes';
import { Subscription } from 'rxjs';
import { ComptesService } from 'src/app/services/comptes.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  comptesSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService : AuthentificationService,
    private comptesService : ComptesService,

    private router : Router
  ) { }

  ngOnInit(): void {
    this.initSignupForm();
  }
  initSignupForm() {
    this.signupForm = this.formBuilder.group({
      name: ['',Validators.required],
      lastname: ['',Validators.required],
      numtel: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmitSignupForm() {
    
    console.log(this.signupForm.value);
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.authentificationService.signupUser(email, password).then(
      (data:any) => {
        const newcompte : Comptes = this.signupForm.value;
        this.comptesService.createcompte(newcompte);
        alert('Compte avec email a été crée');
        this.router.navigate(['/login']);
      
      }
    ).catch(
      (error) => {
alert('Vérifier les champs sil vous plais')      }
    );
    

  }
  FacebookAuth(){
    this.authentificationService.FacebookAuth();
  
  }

}
