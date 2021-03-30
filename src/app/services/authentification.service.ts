import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
   
  ) { }
  signInUser(email: string, password: string){
    return new Promise (
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (data) => {
            resolve(data);
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
 
  signupUser(email: string, password: string){
    return new Promise (
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          (data) => {
            resolve(data);
          }
        ).catch(
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  signOutUser(){
    firebase.auth().signOut();  
  }
  FacebookAuth() {
    this.AuthLogin(new auth.FacebookAuthProvider());
}
 
AuthLogin(provider) {

return new Promise (
  (resolve, reject) => {
    firebase.auth().signInWithPopup(provider).then(
      (data) => {
        resolve(data);
      }
    ).catch(
      (error) => {
        reject(error);
      }
    );
  }
);
}
}
