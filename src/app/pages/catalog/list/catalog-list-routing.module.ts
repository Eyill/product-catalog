import { CatalogListComponent } from './catalog-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: CatalogListComponent,
		data: { title: 'Katalógus listázása' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CatalogListRoutingModule { }