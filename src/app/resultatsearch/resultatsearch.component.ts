import { Component, OnInit } from '@angular/core';
import { Property } from '../interfaces/property';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProportiesService } from '../services/proporties.service';
import { type } from 'os';
import * as firebase from 'firebase';

@Component({
  selector: 'app-resultatsearch',
  templateUrl: './resultatsearch.component.html',
  styleUrls: ['./resultatsearch.component.css']
})
export class ResultatsearchComponent implements OnInit {
  newProperty: Property;

  property: Property;
  properties: Property[] = [];

  type = this.route.snapshot.paramMap.get('type');
  nbp = this.route.snapshot.paramMap.get('nbp');
  prix = this.route.snapshot.paramMap.get('prix');
  ref = this.route.snapshot.paramMap.get('ref');
  surface = this.route.snapshot.paramMap.get('surface');
  proportiesSubscription: Subscription;
  prop :Property[] = [];
  constructor(
    private route: ActivatedRoute,
    private propertiesService: ProportiesService,

  ) {

  firebase.database().ref('/properties/').on('value' , resp => {
    resp.val().forEach(element => {
      if ((this.surface == element.surface) ) {
        if ((this.type == element.category) ){
          if ((this.ref == element.reference )){
       
        this.prop.push(element);
      }}}
      else if(this.type == element.category){
        this.prop.push(element);
      }
      else if(this.ref == element.reference ){
        this.prop.push(element);
      }
      else if(this.surface == element.surface) {
        this.prop.push(element);
      }
    
    });

    console.log(this.prop)
  });

  }

  ngOnInit(): void {
    this.proportiesSubscription = this.propertiesService.proportiesSubject.subscribe(
      (data:any)=>{
      
this.properties= data;
      }
      
    );
    this.propertiesService.getProporties();
    this.propertiesService.emitProporties();

    //     this.proportiesSubscription = this.propertiesService.proportiesSubject.subscribe(
    //       (data:Property[])=>{
    // this.properties = data;
    //       }

    //     );
    //     this.propertiesService.getProporties();
    //     this.propertiesService.emitProporties();
  }
  getbien(index){
    for (let i = 0; i < this.properties.length; i++) {
    if(this.properties[i].reference==this.prop[index].reference){
    return i;
    }
   
  }
  }
}
