import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { NgForm } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	constructor(private _scroll: ScrollService) { }

	icosahedronSpeed: number;
	titleOpacity: number = 1;
	titleStyle = { opacity: 1 };

	ngOnInit() {
		
	}

	lerp(v0, v1, t) {
		return v0 * (1 - t) + v1 * t
	}

	onIcosahedronRender($event) {
		let speed: number = $event;
		let opacity = 1 - (speed / 10);
		let lerpFactor = opacity < 0.8 ? 0.15 : 0.5;

		this.titleOpacity = this.lerp(this.titleOpacity, opacity, lerpFactor);

		if (this.titleOpacity < 0.01) {
			this.titleOpacity = 0;
		} else if (this.titleOpacity > 0.95) {
			this.titleOpacity = 1;
		}
		
		this.titleStyle = { opacity: this.titleOpacity };
	}
}
