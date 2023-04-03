import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {pathOfExileRoute} from '@routes';
import {PathOfExileComponent} from 'src/app/pages/games/path-of-exile/path-of-exile.component';

@NgModule({
	declarations: [
		PathOfExileComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(pathOfExileRoute)
	],
	providers: []
})
export class PathOfExilePage {
}
