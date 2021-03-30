import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProportiesService } from '../services/proporties.service';
import { Property } from '../interfaces/property';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit,OnDestroy {
  proporties =[];
  p:number=1;
  proportiesSubscription:Subscription;
  constructor(
    private proportiesService : ProportiesService
    ) { 
    
  }

  ngOnInit(): void {
    this.proportiesSubscription = this.proportiesService.proportiesSubject.subscribe(
      (data:any)=>{
      
this.proporties= data;
      }
      
    );
    this.proportiesService.getProporties();
    this.proportiesService.emitProporties();
  }
  getsoldvalue(index){
    if(this.proporties[index].sold){
      return 'red';
    } else{
      return 'green';
    }
  }
  /*getterrain(index){
    if(this.proporties[index].category=="terrain habitation")
    {
    return true;
    }
    else{ 
    return false;
    }
  }
  */
ngOnDestroy(){
  this.proportiesSubscription.unsubscribe();
}

}
