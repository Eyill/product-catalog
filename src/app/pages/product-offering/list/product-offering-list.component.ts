import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOffering } from 'src/app/shared/models/productoffering.model';

@Component({
  selector: 'app-product-offering-list',
  templateUrl: './product-offering-list.component.html',
  styleUrls: ['./product-offering-list.component.css']
})
export class ProductOfferingListComponent implements OnInit {
  title = 'Termékek';
  list : Observable<ProductOffering[]> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
