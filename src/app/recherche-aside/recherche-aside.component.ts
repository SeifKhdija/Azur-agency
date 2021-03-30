import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Property } from '../interfaces/property';
import { Subscription } from 'rxjs';
import { ProportiesService } from '../services/proporties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche-aside',
  templateUrl: './recherche-aside.component.html',
  styleUrls: ['./recherche-aside.component.css']
})
export class RechercheAsideComponent implements OnInit {
  rechercheForm : FormGroup;

  properties: Property[]= [];
proportiesSubscription:Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private proportiesService : ProportiesService,
    private router : Router
  ) { }

  ngOnInit(): void {
   this.initform();
  }
  initform(){
    this.rechercheForm = this.formBuilder.group({
      type :'',
      nbpiece:'',
      prix:'',
      ref : '',
      surface:''
       });
  }
  Onsubmitrechercher(){
  
console.log(this.rechercheForm.value.type);
this.router.navigate(['/res/'+this.rechercheForm.value.type+'/'+this.rechercheForm.value.nbpiece+'/'+this.rechercheForm.value.prix+'/'+this.rechercheForm.value.ref+'/'+this.rechercheForm.value.surface]);
}

}
