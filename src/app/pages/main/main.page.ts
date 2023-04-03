import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {mainRoute} from 'src/app/routes/main.route';
import {MainComponent} from './main.component';

@NgModule({
	declarations: [MainComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(mainRoute)
	]
})
export class MainPage {
}
