import { Component, OnInit } from '@angular/core';
import { ProportiesService } from '../services/proporties.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Annonceur } from '../interfaces/annonceur';
import { AnnonceursService } from '../services/annonceurs.service';
import { AuthentificationService } from '../services/authentification.service';
import * as firebase from 'firebase';
import { Comptes } from '../interfaces/comptes';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-deposer-annonce',
  templateUrl: './deposer-annonce.component.html',
  styleUrls: ['./deposer-annonce.component.css']
})
export class DeposerAnnonceComponent implements OnInit {
  isLoggedIn = false;
  email:string;
  AnnonceursForm : FormGroup;
  AnnonceursSubscription: Subscription;
  annonceurs: Annonceur[]= [];
  comptessubscription: Subscription;
  comptes: Comptes[]= [];
  editMode = false;
  constructor(
    private formBuilder: FormBuilder,
    private authentificationSerice:AuthentificationService,
    private AnnonceurService : AnnonceursService,
    private comptesservice : ComptesService,

  ) { }

  ngOnInit(): void {
 
  
    this.initannonceursForm();
    this.AnnonceurService.annonceursSubject.subscribe(
      (data:Annonceur[]) => {
        this.annonceurs=data;
      }
    );
    this.AnnonceurService.getannonceurs();
    this.AnnonceurService.emitannonceurs();

    this.comptessubscription = this.comptesservice.comptessSubject.subscribe(
      (data:any)=>{
this.comptes = data;


      }
      
    );
    this.comptesservice.getcomptes();
    this.comptesservice.emitcomptes();
  }
  initannonceursForm() {
    this.AnnonceursForm = this.formBuilder.group({
      nom: ['', Validators.required],
      numero: ['', Validators.required],
      email: ['', Validators.required],
      type: ['', Validators.required],
      localisation: ['', Validators.required],
      surface: ['', Validators.required],
      nbchambres: ['', Validators.required],
      price: ['', Validators.required],
      specification: ['', Validators.required],
      message: ''
    });
    
  }
 

  onSubmitAnnonceursForm(){
    const newannonceur : Annonceur = this.AnnonceursForm.value;

      this.AnnonceurService.createannonceur(newannonceur);
    
      alert("Votre annonce a été envoyé avec succée, Merci de votre confiance");
  }



}
