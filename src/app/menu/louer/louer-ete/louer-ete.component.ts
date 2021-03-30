import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProportiesService } from 'src/app/services/proporties.service';

@Component({
  selector: 'app-louer-ete',
  templateUrl: './louer-ete.component.html',
  styleUrls: ['./louer-ete.component.css']
})
export class LouerEteComponent implements OnInit {

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
    if(this.proporties[index].category=="ete"){
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
