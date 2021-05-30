import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './catalog-list.component';
import { MatTableModule } from '@angular/material/table';
import { CatalogListRoutingModule } from './catalog-list-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CatalogListRoutingModule,
    MatCardModule
  ],
  exports:[CatalogListComponent]
})
export class CatalogListModule { }
