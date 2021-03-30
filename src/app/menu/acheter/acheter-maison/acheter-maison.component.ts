import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProportiesService } from 'src/app/services/proporties.service';

@Component({
  selector: 'app-acheter-maison',
  templateUrl: './acheter-maison.component.html',
  styleUrls: ['./acheter-maison.component.css']
})
export class AcheterMaisonComponent implements OnInit,OnDestroy {

  proporties =[];
  p: number;
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
    if(this.proporties[index].category=="Maison" && this.proporties[index].specification=="Vente"){
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
