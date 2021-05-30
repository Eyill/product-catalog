import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Catalog } from '../../../shared/models/catalog.model';
import { CatalogAddComponent } from '../add/catalog-add.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
  inputs: ['catalog'],
})
export class CatalogListComponent implements OnInit, OnDestroy {
  title = 'Katalógusok';
  list$: Observable<Catalog[]> = of([]);
  errorObject = null;
  displayedColumns: string[] = [
    'id',
    'name',
    'category',
    'description',
    'actions',
  ];

  constructor(
    private service: FbBaseService<Catalog>,
    private dialog: MatDialog
  ) {
    this.list$ = this.service.getList('catalog');
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  openDialog(element: any) {
    const dialogRef = this.dialog.open(CatalogAddComponent, {
      data: { element },
      height: 'auto',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(
      (result: Catalog) => {
        if (result) {
          //this.service.update('catalog',result);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  confirmDelete(name: string, id: string) {
    if (confirm('Biztos szeretnéd törölni ezt a sort: ' + name + '?')) {
      this.service.delete('catalog', id);
    }
  }
}
