import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProportiesService } from '../services/proporties.service';
import * as firebase from 'firebase';
import { Property } from '../interfaces/property';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-rechercheform',
  templateUrl: './rechercheform.component.html',
  styleUrls: ['./rechercheform.component.css']
})
export class RechercheformComponent implements OnInit {

  rechercheForm : FormGroup;

  properties: Property[]= [];
proportiesSubscription:Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private proportiesService : ProportiesService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.rechercheForm = this.formBuilder.group({
      type :'',
      nbpiece:'',
      prix:'',
      ref : '',
      surface:''
       });
  }
  
  Onsubmitrechercher(){
  try{
this.router.navigate(['/res/'+this.rechercheForm.value.type+'/'+this.rechercheForm.value.nbpiece+'/'+this.rechercheForm.value.prix+'/'+this.rechercheForm.value.ref+'/'+this.rechercheForm.value.surface]);
}
catch(error){
alert(error);
}
  }
}
