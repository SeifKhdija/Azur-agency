import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Annonceur } from '../interfaces/annonceur';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnnonceursService {
  annonceurs:Annonceur[]=[];
  annonceursSubject = new Subject<Annonceur[]>();
  constructor() { }
  emitannonceurs(){
    this.annonceursSubject.next(this.annonceurs);
  }
  saveannonceurs() {
    firebase.database().ref('/annonceurs').set(this.annonceurs);
  }
  
  
  getannonceurs(){
    firebase.database().ref('/annonceurs').on('value', (data) => {
      this.annonceurs = data.val() ? data.val() : [];
      this.emitannonceurs();
    });
    
  }
  getSingleannonceur(id) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/annonceurs/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  
  
  createannonceur(annonceurs:Annonceur){
    this.annonceurs.push(annonceurs);
    this.saveannonceurs();
    this.emitannonceurs();
  }
  deleteannonceur(index)  {
    this.annonceurs.splice(index, 1);
    this.saveannonceurs();
    this.emitannonceurs();
    
  }
}
