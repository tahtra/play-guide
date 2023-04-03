import {Routes} from '@angular/router';
import {GamesComponent} from '@pages/games/games.component';

export const gamesRoute: Routes = [
	{
		path: '',
		component: GamesComponent
	},
	{
		path: 'path-of-exile',
		loadChildren: () => import('@pages').then(m => m.PathOfExilePage)
	}
];
