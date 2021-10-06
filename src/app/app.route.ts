import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const appRoutes: Routes = [
	{
		path: 'games',
		loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
	},
	{
		path: 'animevost',
		loadChildren: () => import('./modules/animevost/animevost.module').then(m => m.AnimevostModule)
	},
	{
		path: '**',
		redirectTo: ''
	},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
	exports: [RouterModule]
})

export class AppRoutes {
}
