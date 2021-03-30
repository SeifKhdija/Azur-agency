import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-juridique',
  templateUrl: './juridique.component.html',
  styleUrls: ['./juridique.component.css']
})
export class JuridiqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  downloadPdf() {
    const pdfUrl = './assets/voyage-et-sejours-a-forfait.pdf';
    const pdfName = 'voyage-et-sejours-a-forfait.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
