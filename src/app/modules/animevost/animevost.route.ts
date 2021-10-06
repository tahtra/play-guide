import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnimevostComponent} from './component/animevost.component';

export const gamesRoutes: Routes = [
	{
		path: '',
		component: AnimevostComponent
	},
	{
		path: '**',
		redirectTo: '/'
	},
];

@NgModule({
	imports: [RouterModule.forChild(gamesRoutes)],
	exports: [RouterModule]
})
export class AnimevostRoute {
}
