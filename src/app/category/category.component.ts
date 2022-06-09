import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [
    { id: 1, name: 'Adventure' },
    { id: 2, name: 'Romantic' },
    { id: 3, name: 'Sci-Fi' },
    { id: 4, name: 'Comedy' },
  ];
  constructor() {}

  ngOnInit() {}
}