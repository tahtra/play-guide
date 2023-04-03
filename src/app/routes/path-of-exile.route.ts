import {Routes} from '@angular/router';

export const pathOfExileRoute: Routes = [
	{
		path: '',
		loadChildren: () => import('@pages').then(m => m.PathOfExilePage)
	},
	{
		path: '**',
		redirectTo: ''
	}
];
