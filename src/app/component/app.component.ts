import {Component} from '@angular/core';
import {MENU_ITEMS} from "../../enums/sidebar.tabs";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.style.scss']
})
export class AppComponent {
	title = 'play';
	sidebarOpen = false;
	sidebarTabs = MENU_ITEMS;
}
