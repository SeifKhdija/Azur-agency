import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changepswform: FormGroup;
  similar =false;
verifierpass:string;
  constructor(
    private formBuilder: FormBuilder,
    private authentificationService : AuthentificationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.initchangeForm();

  }
  initchangeForm() {
    this.changepswform = this.formBuilder.group({
      nouvp: ['', [Validators.required, Validators.minLength(6)]],
      confirmerpass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmitchangepswForm() {
    
    const nouvp = this.changepswform.get('nouvp').value;
    const confirm = this.changepswform.get('confirmerpass').value;
   
    if(nouvp==confirm)
    {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
    userSession.updatePassword(confirm);
    
      alert('Votre mot de passe a été changé avec succés')
    
    
      }
    );
    }
    else alert('verifier votre champs sil vous plais');
    }
   
  }

  

