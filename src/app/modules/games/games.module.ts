import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {GamesComponent} from "./component/games.component";
import {GamesRoute} from "./games.route";
import {AngularMaterialModule} from "../angular.material.module";

@NgModule({
	declarations: [
		GamesComponent
	],
	imports: [
		AngularMaterialModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		GamesRoute
	],
	providers: [],
})
export class GamesModule {
}
