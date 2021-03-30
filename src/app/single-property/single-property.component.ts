import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProportiesService } from '../services/proporties.service';
import { Property } from '../interfaces/property';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-property',
  templateUrl: './single-property.component.html',
  styleUrls: ['./single-property.component.css']
})
export class SinglePropertyComponent implements OnInit {

  property: Property;
  proporties =[];
  proportiesSubscription:Subscription;
  constructor(
    private route: ActivatedRoute,
    private propertiesService: ProportiesService,
    
  ) { }

  ngOnInit(): void {
    this.proportiesSubscription = this.propertiesService.proportiesSubject.subscribe(
      (data:any)=>{
this.proporties = data;
      }
      
    );
    const id = this.route.snapshot.paramMap.get('id');
    this.propertiesService.getSingleProperties(id).then(
      (property: Property) => {
        this.property = property;
      }
    ).catch(
      (error) => {
        console.error(error);
      }
    );
    this.propertiesService.getProporties();
    this.propertiesService.emitProporties();
  }
  getsoldvalue(index){
    if(this.proporties[index].sold){
      return 'red';
    } else{
      return 'green';
    }
  }
  getterrain(index){
    if(this.proporties[index].category=="terrain")
    {
    return true;
    }
    else{ 
    return false;
    }
  }
}
