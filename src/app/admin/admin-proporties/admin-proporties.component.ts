import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProportiesService } from 'src/app/services/proporties.service';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Property } from 'src/app/interfaces/property';
import { AnnonceursService } from 'src/app/services/annonceurs.service';
import { Annonceur } from 'src/app/interfaces/annonceur';

@Component({
  selector: 'app-admin-proporties',
  templateUrl: './admin-proporties.component.html',
  styleUrls: ['./admin-proporties.component.css']
})
export class AdminProportiesComponent implements OnInit {
  propertiesForm : FormGroup;
  Annoncceurform : FormGroup;
  propertiesSubscription: Subscription;
  properties: Property[]= [];
  annonceurs: Annonceur[] =[];
  annonceursSubscription:Subscription;
  indexToRemove;

  indexToUpdate;
  editMode = false;
  ref:string;

  photoUploading = false;
  photoUploaded = false;
  
  photosAdded: any[] = [];

  
  constructor(
    
    private formBuilder: FormBuilder,
    private propertiesService : ProportiesService,
    private annonceursService : AnnonceursService
  ) { }

  ngOnInit(): void {
    this.initPropertiesForm();
    this.propertiesService.proportiesSubject.subscribe(
      (data:Property[]) => {
        this.properties=data;
      }
    );
    this.propertiesService.getProporties();
    this.propertiesService.emitProporties();
    this.annonceursSubscription = this.annonceursService.annonceursSubject.subscribe(
      (data:Annonceur[])=>{
this.annonceurs = data;
      }
      
    );
    this.annonceursService.getannonceurs();
    this.annonceursService.emitannonceurs();
  }
  onDeleteannonceur(index) {
    this.annonceursService.deleteannonceur(index);
  }
  initPropertiesForm() {
    this.propertiesForm = this.formBuilder.group({
      reference: ['', Validators.required],
      title: ['', Validators.required],
      specification: ['', Validators.required],
      category: ['', Validators.required],
      surface: ['', Validators.required],
      rooms: ['', Validators.required],
      description: '',
      description2: '',
      price: ['', Validators.required],
      sold: ''
    });
  }


  onSubmitPropertiesForm(){
    const newProperty : Property = this.propertiesForm.value;
    newProperty.sold = this.propertiesForm.get('sold').value ? this.propertiesForm.get('sold').value : false;
    newProperty.photos= this.photosAdded ? this.photosAdded :[];
    if (this.editMode) {
      this.propertiesService.updateProperty(newProperty, this.indexToUpdate);
      
      
    } else {
      this.propertiesService.createProperty(newProperty);
    }

    $('#propertiesFormModal').modal('hide');
    

  }
  onSubmitAnnonceurForm(){
    const newProperty : Property = this.propertiesForm.value;
    newProperty.sold = this.propertiesForm.get('sold').value ? this.propertiesForm.get('sold').value : false;
    newProperty.photos= this.photosAdded ? this.photosAdded :[];
    this.propertiesService.createProperty(newProperty);
    $('#annonceursFormModal').modal('hide');
  }
 
  resetForm() {
    this.editMode=false;
    this.propertiesForm.reset();
    this.photosAdded=[];

  }
  

  onDeleteProperty(index) {
    $('#deletePropertyModal').modal('show');
    this.indexToRemove = index;
  }
  onConfirmDeleteProperty() {
    /*if(this.properties[this.indexToRemove].photo && this.properties[this.indexToRemove].photo !== ''){
      this.propertiesService.removeFile(this.properties[this.indexToRemove].photo);
    }*/
    this.propertiesService.deleteProperty(this.indexToRemove);
    $('#deletePropertyModal').modal('hide');
    this.properties[this.indexToRemove].photos.forEach(
      (photo) => {
        this.propertiesService.removeFile(photo);
      }
    );
    
  }


  onEditProperty(property:Property) {
    this.editMode=true;
    $('#propertiesFormModal').modal('show');
    this.propertiesForm.get('reference').setValue(property.reference);
    this.propertiesForm.get('title').setValue(property.title);
    this.propertiesForm.get('specification').setValue(property.specification);
    this.propertiesForm.get('category').setValue(property.category);
    this.propertiesForm.get('surface').setValue(property.surface);
    this.propertiesForm.get('rooms').setValue(property.rooms);
    this.propertiesForm.get('description').setValue(property.description ? property.description :'');
    this.propertiesForm.get('description2').setValue(property.description2 ? property.description2 :'');
    this.propertiesForm.get('price').setValue(property.price);
    this.propertiesForm.get('sold').setValue(property.sold);
    this.photosAdded = property.photos ? property.photos : [];

    const index = this.properties.findIndex(
      (propertyEl) => {
        if (propertyEl === property) {
          return true;
        }
      }
    );
    this.indexToUpdate = index;
  }

  onEditannonceur(Annonceur:Annonceur) {
    this.editMode=true;
    $('#annonceursFormModal').modal('show');
    
    this.propertiesForm.get('specification').setValue(Annonceur.specification);
    this.propertiesForm.get('category').setValue(Annonceur.type);
    this.propertiesForm.get('surface').setValue(Annonceur.surface);
    this.propertiesForm.get('rooms').setValue(Annonceur.nbchambres);

    this.propertiesForm.get('price').setValue(Annonceur.price);

    const index = this.annonceurs.findIndex(
      (AnnonceurEl) => {
        if (AnnonceurEl === Annonceur) {
          return true;
        }
      }
    );
    this.indexToUpdate = index;
  }

  onUploadFile(event) {
    this.photoUploading = true;
    
    console.log(event);
    this.propertiesService.uploadFile(event.target.files[0]).then(
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
    this.propertiesService.removeFile(this.photosAdded[index]);
    this.photosAdded.splice(index, 1);
  }

  Search(){
    if(this.ref!=""){
    this.properties=this.properties.filter(res=>{
      return res.reference.toLocaleLowerCase().match(this.ref.toLocaleLowerCase());
    });
  }
  else if(this.ref==""){
    this.ngOnInit();
  }
  }

}
