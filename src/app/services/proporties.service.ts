import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { Subject } from 'rxjs';
import { Property } from '../interfaces/property';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProportiesService {
proporties :Property[]=[];
proportiesSubject = new Subject<Property[]>();
  
  constructor() { }
emitProporties(){
  this.proportiesSubject.next(this.proporties);
}
saveProperties() {
  firebase.database().ref('/properties').set(this.proporties);
}


getProporties(){
  firebase.database().ref('/properties').on('value', (data) => {
    this.proporties = data.val() ? data.val() : [];
    this.emitProporties();
  });
  
}


getSingleProperties(id) {
  return new Promise(
    (resolve, reject) => {
      firebase.database().ref('/properties/' + id).once('value').then(
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


createProperty(property:Property){
  this.proporties.push(property);
  this.saveProperties();
  this.emitProporties();
}
deleteProperty(index)  {
  this.proporties.splice(index, 1);
  this.saveProperties();
  this.emitProporties();
  
}
updateProperty(property:Property,index){
  firebase.database().ref('/properties/' + index).update(property).catch(
    (error) => {
      console.error(error);
    }
  );
 /*this.proporties[index] = property;
  this.saveProperties();
  this.emitProporties();*/
}
uploadFile(file : File){
  return new Promise(
    (resolve, reject) => {
      const uniqueId = Date.now().toString();
      const fileName = uniqueId + file.name;
      const upload = firebase.storage().ref().child('images/properties/' + fileName).put(file);
      upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          console.log('Chargement...');
        },
        (error) => {
          console.error(error);
          reject(error);
        },
        () => {
          upload.snapshot.ref.getDownloadURL().then(
            (downloadUrl) => {
              resolve(downloadUrl);
            }
          );
        }
      );
    }
  );
}
removeFile(fileLink: string) {
  if (fileLink) {
    const storageRef = firebase.storage().refFromURL(fileLink);
    storageRef.delete().then(
      () => {
        console.log('Fichier supprimé');
      }
    ).catch(
      (error) => {
        console.error(error);
      }
    );
  }
}



}
