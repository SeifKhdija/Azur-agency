import { Component, OnInit } from '@angular/core';
import { Imgaceuil } from 'src/app/interfaces/imgaceuil';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AcceuilimgService } from 'src/app/services/acceuilimg.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gestion-images',
  templateUrl: './gestion-images.component.html',
  styleUrls: ['./gestion-images.component.css']
})
export class GestionImagesComponent implements OnInit {
  PhotosForm : FormGroup;
  imagesSubscription: Subscription;

  images: Imgaceuil[]= [];
  photoUploading = false;
  photoUploaded = false;
  indexToRemove;

  indexToUpdate;
  editMode = false;

  photosAdded: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private imagesservice : AcceuilimgService
  ) { }

  ngOnInit(): void {
    this.initPhotosForm();

    this.imagesservice.imagesSubject.subscribe(
      (data:Imgaceuil[]) => {
        this.images=data;
      }
    );
    this.imagesservice.getimages();
    this.imagesservice.emitimages();
    this.photosAdded = this.images[0].pictures ? this.images[0].pictures : [];
    const newimages : Imgaceuil = this.PhotosForm.value;
    newimages.pictures= this.photosAdded ? this.photosAdded :[];
    
      
 
  }
addingphotos(){
  const newimage : Imgaceuil = this.PhotosForm.value;
  newimage.pictures= this.photosAdded ? this.photosAdded :[];
  /*this.imagesservice.createimages(newimage);
  */
  
 this.imagesservice.updateimage(newimage, 0);

}
initPhotosForm() {
  this.PhotosForm = this.formBuilder.group({
    pictures: ['', Validators.required],
 
  });
}
onUploadFile(event) {
  this.photoUploading = true;
  
  console.log(event);
  this.imagesservice.uploadFile(event.target.files[0]).then(
    (url: string) => {
      this.photosAdded.push(url);
      this.photoUploading = false;
      this.photoUploaded = true;
      setTimeout(() => {
        this.photoUploaded = false;
      }, 5000);
    }
  );
}
onRemoveAddedPhoto(index) {
  this.imagesservice.removeFile(this.photosAdded[index]);
  this.photosAdded.splice(index, 1);
}

}
