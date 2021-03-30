import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

import { AnnonceursService } from 'src/app/services/annonceurs.service';

@Component({
  selector: 'app-liste-annonceur',
  templateUrl: './liste-annonceur.component.html',
  styleUrls: ['./liste-annonceur.component.css']
})
export class ListeAnnonceurComponent implements OnInit {
  annonceurs =[];
  name:string;
  annonceursSubscription:Subscription;
  constructor(
    private annonceursService : AnnonceursService
  ) { }

  ngOnInit(): void {
    this.annonceursSubscription = this.annonceursService.annonceursSubject.subscribe(
      (data:any)=>{
this.annonceurs = data;
      }
      
    );
    this.annonceursService.getannonceurs();
    this.annonceursService.emitannonceurs();
  }
  onDeleteannonceur(index) {
    this.annonceursService.deleteannonceur(index);
  }
  Search(){
    if(this.name!=""){
    this.annonceurs=this.annonceurs.filter(res=>{
      return res.nom.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
  else if(this.name==""){
    this.ngOnInit();
  }
  }

}
