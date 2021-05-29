import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
      path: '',
      component: HomeComponent,
      children: [
          {
            path: 'catalog-list',
            loadChildren: () => import('./../app/pages/catalog/list/catalog-list.module').then(m => m.CatalogListModule),
          },
          {
            path: 'product-offering',
            loadChildren: () => import('./../app/pages/product-offering/list/product-offering-list.module').then(m => m.ProductOfferingListModule),
          },
          {
            path: '**',
            redirectTo: 'home',
            pathMatch: 'full'
          }
      ],
     // canActivateChild: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
