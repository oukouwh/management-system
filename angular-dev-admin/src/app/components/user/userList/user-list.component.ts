import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  name: string;
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
            name: `Edward King ${this.i}`,
            age: '32',
            address: `London, Park Lane no. ${this.i}`
        }
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

    refreshCheckedStatus(): void {
        this.checked = this.listOfCurrentPageData.every((item) =>
        this.setOfCheckedId.has(item.id)
        );
        this.indeterminate =
        this.listOfCurrentPageData.some((item) =>
            this.setOfCheckedId.has(item.id)
        ) && !this.checked;
    }

    ngOnInit(): void {
        this.addRow();
        this.listOfData = new Array(6).fill(0).map((_, index) => {
        return {
            id: index,
            name: `Edward King ${index}`,
            age: 32,
            address: `London, Park Lane no. ${index}`,
        };
        });
    }
}
