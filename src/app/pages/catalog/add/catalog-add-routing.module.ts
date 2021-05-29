import { CatalogAddComponent } from './catalog-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: CatalogAddComponent,
		data: { title: 'Katalógus hozzáadása' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CatalogAddRoutingModule { }