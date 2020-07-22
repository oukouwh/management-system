/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-22 11:26:15
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-22 11:29:54
 */

import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss'],
})
export class ExcelComponent implements OnInit {

  exportTable() {
    const exportItem = ['xx','ccc']; //this.item是一个数组，包含需要导出的内容

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportItem);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, 'report');
  }

  private saveAsExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], {
      type:
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
    });
    FileSaver.saveAs(
      data,
      //  moment().format('YYYYMMDDHHmmss') +
      fileName + '_' + '.xlsx'
    );
  }

  constructor() {}

  ngOnInit() {}
}
