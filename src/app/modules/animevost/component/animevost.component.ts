import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
	templateUrl: './animevost.template.html',
	styleUrls: ['./animevost.style.scss']
})
export class AnimevostComponent {
	startValue = 108;
	stop = false;
	autoRedirect = false;

	constructor(
		private httpClient: HttpClient,
		private activateRoute: ActivatedRoute
	) {
		activateRoute.queryParams.subscribe(next => {
			this.autoRedirect = !!next.redirect;
			if (this.autoRedirect) {
				this.stop = false;
				this.redirectUrl();
			}
		})
	}

	getUrl(): any {
		return `https://a${this.startValue}.agorov.org`;
	}

	redirectUrl(): void {
		if (this.startValue === 200 || this.stop) { return; }
		this.httpClient.head(this.getUrl())
			.subscribe(() => {
				location.href = this.getUrl();
			},
			() => {
				this.startValue++;
				this.redirectUrl();
			});
	}
}
