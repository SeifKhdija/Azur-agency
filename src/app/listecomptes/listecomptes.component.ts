import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComptesService } from '../services/comptes.service';

@Component({
  selector: 'app-listecomptes',
  templateUrl: './listecomptes.component.html',
  styleUrls: ['./listecomptes.component.css']
})
export class ListecomptesComponent implements OnInit {
  comptes =[];
  name:string;
comptessubscription:Subscription;

  constructor(
    private comptesservice : ComptesService
  ) { }

  ngOnInit(): void {
    this.comptessubscription = this.comptesservice.comptessSubject.subscribe(
      (data:any)=>{
this.comptes = data;
      }
      
    );
    this.comptesservice.getcomptes();
    this.comptesservice.emitcomptes();
  }
  onDeletecompte(index) {
    this.comptesservice.deletecomptes(index);
  }
 /* Search(){
    if(this.name!=""){
    this.comptes=this.comptes.filter(res=>{
      return res.nom.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
  else if(this.name==""){
    this.ngOnInit();
  }
  }
*/
}
