import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Catalog } from '../../../shared/models/catalog.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  title = 'Katalógusok';
  list$: Observable<Catalog[]> | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
