import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { HomeRoutingModule } from './home-routing.module';
import { CatalogAddModule } from '../catalog/add/catalog-add.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavBarModule,
    HomeRoutingModule,
    CatalogAddModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
