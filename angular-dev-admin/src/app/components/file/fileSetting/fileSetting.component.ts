/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-17 18:16:04
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-17 18:40:47
 */ 
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-fileSetting',
  templateUrl: './fileSetting.component.html',
  styleUrls: ['./fileSetting.component.scss']
})
export class FileSettingComponent implements OnInit {

  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }
  
  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} 文件上传失败，请重试.`);
    }
  }

}
