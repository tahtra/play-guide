import {Routes} from '@angular/router';

export const appRoutes: Routes = [
	{
		path: 'main',
		loadChildren: () => import('@pages').then(m => m.MainPage)
	},
	{
		path: 'games',
		loadChildren: () => import('@pages').then(m => m.GamesPage)
	},
	{
		path: '**',
		redirectTo: '/'
	}
];
