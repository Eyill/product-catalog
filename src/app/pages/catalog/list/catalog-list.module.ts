import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './catalog-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class CatalogListModule { }
