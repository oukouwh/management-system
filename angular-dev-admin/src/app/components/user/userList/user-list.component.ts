/*
 * @Description:
 * @Version: 0.0.1
 * @Autor: hao wang
 * @Date: 2020-07-13 22:10:57
 * @LastEditors: hao wang
 * @LastEditTime: 2020-07-14 18:27:52
 */

import { Component, OnInit } from '@angular/core';

interface ItemData {
    id: number;
    name: string;
    tel: string;
    age: number;
    address: string;
}

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
    i = 0;
    checked = false;
    indeterminate = false;
    listOfCurrentPageData: ItemData[] = [];
    listOfData: any = [];
    setOfCheckedId = new Set<number>();

    // add按钮行增加
    addRow(): void {
        this.listOfData = [
        ...this.listOfData,
        {
            id: `${this.i}`,
            name: `UserInfo ${this.i}`,
            tel: '13577778888',
            age: '25',
            address: `Tokyo, 足立入谷三丁目. ${this.i}`,
        },
        ];
        this.i++;
    }

    //
    updateCheckedSet(id: number, checked: boolean): void {
        if (checked) {
        this.setOfCheckedId.add(id);
        } else {
        this.setOfCheckedId.delete(id);
        }
    }

    onItemChecked(id: number, checked: boolean): void {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }

    // 全选
    onAllChecked(value: boolean): void {
        this.listOfCurrentPageData.forEach((item) =>
        this.updateCheckedSet(item.id, value)
        );
        this.refreshCheckedStatus();
    }

    onCurrentPageDataChange($event: ItemData[]): void {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }

    // 可选状态的更新
    refreshCheckedStatus(): void {
        this.checked = this.listOfCurrentPageData.every((item) =>
        this.setOfCheckedId.has(item.id)
        );
        this.indeterminate =
        this.listOfCurrentPageData.some((item) =>
            this.setOfCheckedId.has(item.id)
        ) && !this.checked;
    }

    // 删除行数据
    deleteRow(id: string): void {
        this.listOfData = this.listOfData.filter((d) => d.id !== id);
    }

    ngOnInit(): void {
        this.addRow();
        this.listOfData = new Array(10).fill(0).map((_, index) => {
        return {
            id: index,
            name: `UserInfo ${index}`,
            tel: '13577778888',
            age: 25,
            address: `Tokyo, 足立区入谷三丁目. ${index}`,
        };
        });
    }
}
