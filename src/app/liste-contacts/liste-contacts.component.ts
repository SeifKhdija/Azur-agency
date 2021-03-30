import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css']
})
export class ListeContactsComponent implements OnInit {
  contacts =[];
  name:string;
contactsSubscription:Subscription;

  constructor(
    private contactsService : ContactsService
  ) { }

  ngOnInit(): void {
    this.contactsSubscription = this.contactsService.contactsSubject.subscribe(
      (data:any)=>{
this.contacts = data;
      }
      
    );
    this.contactsService.getContacts();
    this.contactsService.emitContacts();
  }
  onDeletecontact(index) {
    this.contactsService.deleteContacts(index);
  }
  Search(){
    if(this.name!=""){
    this.contacts=this.contacts.filter(res=>{
      return res.nom.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
  else if(this.name==""){
    this.ngOnInit();
  }
  }

}
