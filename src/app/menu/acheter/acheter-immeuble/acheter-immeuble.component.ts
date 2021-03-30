import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProportiesService } from 'src/app/services/proporties.service';

@Component({
  selector: 'app-acheter-immeuble',
  templateUrl: './acheter-immeuble.component.html',
  styleUrls: ['./acheter-immeuble.component.css']
})
export class AcheterImmeubleComponent implements OnInit {

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
    if(this.proporties[index].category=="Maison" && this.proporties[index].specification=="Immeuble"){
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
