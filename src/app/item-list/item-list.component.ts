// src/app/item-list/item-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filterValue: string = '';
  sortAscending: boolean = true;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  // Filter items based on title
  get filteredItems() {
    return this.items
      .filter(item => item.title.toLowerCase().includes(this.filterValue.toLowerCase()))
      .sort((a, b) => this.sortAscending ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
  }

  // Toggle sort order
  toggleSort() {
    this.sortAscending = !this.sortAscending;
  }
}
