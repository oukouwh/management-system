/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-21 14:32:43
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-21 14:39:38
 */ 
import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-pdfPrint',
  templateUrl: './pdfPrint.component.html',
  styleUrls: ['./pdfPrint.component.scss']
})
export class PdfPrintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pdfPrint() {
      window.print();
  }

    
    

}
