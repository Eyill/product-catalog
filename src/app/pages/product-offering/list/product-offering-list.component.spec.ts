import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferingListComponent } from './product-offering-list.component';

describe('ProductOfferingListComponent', () => {
  let component: ProductOfferingListComponent;
  let fixture: ComponentFixture<ProductOfferingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOfferingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfferingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
