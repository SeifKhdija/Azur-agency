import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProportiesService } from '../services/proporties.service';
import { error } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';
import { AcceuilimgService } from '../services/acceuilimg.service';
import { AuthentificationService } from '../services/authentification.service';
import * as firebase from 'firebase';
import { Comptes } from '../interfaces/comptes';
import { ComptesService } from '../services/comptes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  comptessubscription: Subscription;
  comptesform : FormGroup;
  comptes: Comptes[]= [];

// When the user clicks on the button, scroll to the top of the document


  constructor(
    private formBuilder: FormBuilder,
    private comptesservice : ComptesService,
  ) { }
  
  ngOnInit(): void { 
    window.scrollTo(0, 0);
    this.initcomptesform();
    this.comptessubscription = this.comptesservice.comptessSubject.subscribe(
      (data:any)=>{
this.comptes = data;


      }
      
    );
    this.comptesservice.getcomptes();
    this.comptesservice.emitcomptes();
  }
  initcomptesform() {
    this.comptesform = this.formBuilder.group({
  
      email: ['', Validators.required]
    
    });
    
  }
  onsubmit(){
    const newcompte : Comptes = this.comptesform.value;
      this.comptesservice.createcompte(newcompte);
      alert("Merci de votre confiance");
  }
  
 
 
}
