import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Catalog } from '../../../shared/models/catalog.model';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { Input } from '@angular/core';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
  inputs: ['catalog']
})
export class CatalogListComponent implements OnInit {
  title = 'Katalógusok';
  list$: Observable<Catalog[]> | null = null;
  errorObject = null;
  dataSource: any[] | null = null;
  dataColumns : string[] | null = null;
  
  constructor(private service: FbBaseService<Catalog>) { }

  ngOnInit(): void {
    this.getCatalogs();
  }

  getCatalogs(): void{
    this.errorObject = null;
  
     this.list$ = this.service.get('catalog').pipe(
     // map(data => return data.), 
      catchError(err => {
         this.errorObject = err;
         return throwError(err);
       })
     );
   console.log(this.list$);
  }
}
