import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {AppComponent} from 'src/app/app.component';
import {appRoutes} from 'src/app/routes/app.route';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes, {useHash: true})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
