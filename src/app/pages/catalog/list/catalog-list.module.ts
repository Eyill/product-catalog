import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListComponent } from './catalog-list.component';
import { MatTableModule } from '@angular/material/table';
import { CatalogListRoutingModule } from './catalog-list-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CatalogListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CatalogListRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[CatalogListComponent]
})
export class CatalogListModule { }
