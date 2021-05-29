import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogAddComponent } from './catalog-add.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [CatalogAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents:[CatalogAddComponent],
  exports: [CatalogAddComponent]
})
export class CatalogAddModule { }
