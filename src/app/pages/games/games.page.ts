import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterModule} from '@angular/router';
import {GamesComponent} from '@pages/games/games.component';
import {gamesRoute} from '@routes';

@NgModule({
	declarations: [
		GamesComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(gamesRoute),
		MatCardModule,
		MatGridListModule
	],
	providers: [],
})
export class GamesPage {
}
