import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AnimevostComponent} from './component/animevost.component';
import {AnimevostRoute} from './animevost.route';
import {AngularMaterialModule} from '../angular.material.module';

@NgModule({
	declarations: [
		AnimevostComponent
	],
	imports: [
		AngularMaterialModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		AnimevostRoute
	],
	providers: [],
})
export class AnimevostModule {
}
