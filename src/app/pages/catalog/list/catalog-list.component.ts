import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Catalog } from '../../../shared/models/catalog.model';
import { catchError, debounceTime, map, startWith, tap } from 'rxjs/operators';
import { Input } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
  inputs: ['catalog']
})

export class CatalogListComponent implements OnInit, OnDestroy {
  title = 'Katalógusok';
  list$: Observable<any[]> = of([]);
  errorObject = null;
  dataSource: any[] | null = null;
  displayedColumns: string[] = ['id', 'name', 'category', 'description'];

  constructor(private service: FbBaseService<Catalog>) {
    this.list$ = this.service.getList('catalog');
  }

  ngOnInit(): void {}

  ngOnDestroy(): void{}
}
