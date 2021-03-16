import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PoeComponent} from "./component/poe.component";

export const poeRoutes: Routes = [
	{
		path: '',
		component: PoeComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(poeRoutes)],
	exports: [RouterModule]
})
export class PoeRoute {
}
