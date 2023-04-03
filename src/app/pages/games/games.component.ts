import {Component} from '@angular/core';
import {GAMES_LIST} from '@enums';

@Component({
	template: `
		<mat-card>
			<mat-card-content>
				<mat-grid-list
					[cols]="colCount"
					rowHeight="1:1"
				>
					<ng-container *ngFor="let game of gamesList">
						<mat-grid-tile>
							<a [routerLink]="'./'+game.url"> <i>{{game.title}}</i>
								<p></p>
							</a>
						</mat-grid-tile>
					</ng-container>
				</mat-grid-list>
			</mat-card-content>
		</mat-card>
		<router-outlet></router-outlet>
	`
})
export class GamesComponent {
	colCount = 3;
	gamesList = GAMES_LIST;

	// @HostListener('window:resize', ['$event']) actionResize($event: any): void {
	// 	this.resizeGrid($event.currentTarget.innerWidth);
	// }
	//
	// @HostListener('window:load', ['$event']) actionLoad($event: any): void {
	// 	this.resizeGrid($event.currentTarget.innerWidth);
	// }
	//
	// private resizeGrid(width: number) {
	// 	if (width < 600) {
	// 		this.colCount = 1;
	// 	} else if (width < 992) {
	// 		this.colCount = 2;
	// 	} else {
	// 		this.colCount = 3;
	// 	}
	// }
}
