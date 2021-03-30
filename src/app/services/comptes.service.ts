import { Injectable } from '@angular/core';
import { Comptes } from '../interfaces/comptes';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {
  comptes:Comptes[]=[];
  comptessSubject = new Subject<Comptes[]>();
  constructor() { }
  emitcomptes(){
    this.comptessSubject.next(this.comptes);
  }
  saveacomptes() {
    firebase.database().ref('/comptes').set(this.comptes);
  }
  
  
  getcomptes(){
    firebase.database().ref('/comptes').on('value', (data) => {
      this.comptes = data.val() ? data.val() : [];
      this.emitcomptes();
    });
    
  }
  createcompte(comptes:Comptes){
    this.comptes.push(comptes);
    this.saveacomptes();
    this.emitcomptes();
  }
  
  
 
  deletecomptes(index)  {
    this.comptes.splice(index, 1);
    this.saveacomptes();
    this.emitcomptes();
    
  }
}
