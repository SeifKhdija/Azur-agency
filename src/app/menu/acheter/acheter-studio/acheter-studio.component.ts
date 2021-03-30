import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProportiesService } from 'src/app/services/proporties.service';

@Component({
  selector: 'app-acheter-studio',
  templateUrl: './acheter-studio.component.html',
  styleUrls: ['./acheter-studio.component.css']
})
export class AcheterStudioComponent implements OnInit,OnDestroy {

  proporties =[];
  proportiesSubscription:Subscription;
  constructor(
    private proportiesService : ProportiesService
  ) { }

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
  getterrain(index){
    if(this.proporties[index].category=="studio" && this.proporties[index].specification=="Vente"){
    return true;
    }
    else{ 
    return false;
    }
  }
  
ngOnDestroy(){
  this.proportiesSubscription.unsubscribe();
}

}
