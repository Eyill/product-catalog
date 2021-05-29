import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferingAddComponent } from './product-offering-add.component';

describe('ProductOfferingAddComponent', () => {
  let component: ProductOfferingAddComponent;
  let fixture: ComponentFixture<ProductOfferingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOfferingAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfferingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
