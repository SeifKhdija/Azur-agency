import { Component, OnInit } from '@angular/core';
import { Annonceclient } from 'src/app/interfaces/annonceclient';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-annoncesclient',
  templateUrl: './annoncesclient.component.html',
  styleUrls: ['./annoncesclient.component.css']
})
export class AnnoncesclientComponent implements OnInit {
  properties: Annonceclient[]=[];

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
  }

}
