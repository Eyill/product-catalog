import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogOverlayComponent } from './catalog-overlay.component';

describe('CatalogOverlayComponent', () => {
  let component: CatalogOverlayComponent;
  let fixture: ComponentFixture<CatalogOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
