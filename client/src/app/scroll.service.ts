import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {
	constructor(private _scrollToService: ScrollToService) { }

	public to(target) {
		const config: ScrollToConfigOptions = {
			target: target,
			duration: 1250,
			easing: "easeInOutQuint",
			offset: 0
		};

		this._scrollToService.scrollTo(config);
	}
}