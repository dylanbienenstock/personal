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
	constructor(public _scroll: ScrollService) { }

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
        let opacity = 1 - ((speed - 1) / 10);

        this.titleStyle = { opacity: +(opacity.toFixed(2)) };
	}
}
