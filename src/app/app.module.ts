import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './component/app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularMaterialModule} from "./modules/angular.material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {AppRoutes} from "./app.route";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AngularMaterialModule,
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		AppRoutes
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
