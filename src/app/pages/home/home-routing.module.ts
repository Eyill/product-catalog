import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'catalog-list',
				loadChildren: () => import('./../catalog/list/catalog-list.module').then(m => m.CatalogListModule),
			},
			{
				path: 'product-offering-add',
				loadChildren: () => import('./../product-offering/add/product-offering-add.module').then(m => m.ProductOfferingAddModule),
			},
			{
				path: 'product-offering-list',
				loadChildren: () => import('./../product-offering/list/product-offering-list.module').then(m => m.ProductOfferingListModule),
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule { }
