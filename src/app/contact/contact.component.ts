import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';
import { Contacts } from '../interfaces/contacts';
import { ContactsService } from '../services/contacts.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactsForm : FormGroup;
  ContactsSubscription: Subscription;
  contacts: Contacts[]= [];
  editMode = false;
  constructor(
    private formBuilder: FormBuilder,
    private contactsService : ContactsService
  ) { }

  ngOnInit(): void {
    this.initcontactsForm();
    this.contactsService.contactsSubject.subscribe(
      (data:Contacts[]) => {
        this.contacts=data;
      }
    );
    this.contactsService.getContacts();
    this.contactsService.emitContacts();
  }
  initcontactsForm() {
    this.ContactsForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      numero: ['', Validators.required],
      message: ''
    });
  }

  onSubmitContactsForm(){
    const newContact : Contacts = this.ContactsForm.value;
 
      this.contactsService.createcontact(newContact);
    
      alert("Votre message a été envoyé avec succée, Merci de votre confiance");
  }



}
