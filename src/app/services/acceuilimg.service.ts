import { Injectable } from '@angular/core';
import { Imgaceuil } from '../interfaces/imgaceuil';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AcceuilimgService {

  images :Imgaceuil[]=[];
  imagesSubject = new Subject<Imgaceuil[]>();
    
    constructor() { }
  emitimages(){
    this.imagesSubject.next(this.images);
  }
  saveimages() {
    firebase.database().ref('/acceuileimages').set(this.images);
  }
  
  
  getimages(){
    firebase.database().ref('/acceuileimages').on('value', (data) => {
      this.images = data.val() ? data.val() : [];
      this.emitimages();
    });
    
  }
  getSingleimages(id) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/acceuileimages/' + id).once('value').then(
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
  
  
  createimages(image:Imgaceuil){
    this.images.push(image);
    this.saveimages();
    this.emitimages();
  }
  deleteimage(index)  {
    this.images.splice(index, 1);
    this.saveimages();
    this.emitimages();
    
  }
  updateimage(image:Imgaceuil,index){
    firebase.database().ref('/acceuileimages/' + index).update(image).catch(
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
        const upload = firebase.storage().ref().child('images/acceuileimages/' + fileName).put(file);
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
          console.log('File deleted');
        }
      ).catch(
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
