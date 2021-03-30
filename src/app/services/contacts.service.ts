import { Injectable } from '@angular/core';
import { Contacts } from '../interfaces/contacts';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
contacts:Contacts[]=[];
contactsSubject = new Subject<Contacts[]>();
  constructor() { }
  emitContacts(){
    this.contactsSubject.next(this.contacts);
  }
  saveContacts() {
    firebase.database().ref('/contacts').set(this.contacts);
  }
  
  
  getContacts(){
    firebase.database().ref('/contacts').on('value', (data) => {
      this.contacts = data.val() ? data.val() : [];
      this.emitContacts();
    });
    
  }
  getSinglecontacts(id) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/contacts/' + id).once('value').then(
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
  
  
  createcontact(contacts:Contacts){
    this.contacts.push(contacts);
    this.saveContacts();
    this.emitContacts();
  }
  deleteContacts(index)  {
    this.contacts.splice(index, 1);
    this.saveContacts();
    this.emitContacts();
    
  }
}
