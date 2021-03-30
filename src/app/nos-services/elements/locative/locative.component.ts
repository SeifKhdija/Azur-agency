import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locative',
  templateUrl: './locative.component.html',
  styleUrls: ['./locative.component.css']
})
export class LocativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
