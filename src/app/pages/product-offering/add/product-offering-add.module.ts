import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOfferingAddComponent } from './product-offering-add.component';

@NgModule({
  declarations: [ProductOfferingAddComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductOfferingAddComponent]
})
export class ProductOfferingAddModule { }
