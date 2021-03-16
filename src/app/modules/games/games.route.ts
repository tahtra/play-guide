import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesComponent} from "./component/games.component";

export const gamesRoutes: Routes = [
	{
		path: '',
		component: GamesComponent
	},
	{
		path: 'path-of-exile',
		loadChildren: () => import('./modules/poe/poe.module').then(m => m.PathOfExileModule)
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
export class GamesRoute {
}
