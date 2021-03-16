import {PoeRoute} from "./poe.route";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PoeComponent} from "./component/poe.component";
import {AngularMaterialModule} from "../../../angular.material.module";

@NgModule({
	declarations: [
		PoeComponent
	],
	imports: [
		AngularMaterialModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		PoeRoute
	],
	providers: [],
})
export class PathOfExileModule {
}
