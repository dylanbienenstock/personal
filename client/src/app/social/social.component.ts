import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-social',
	templateUrl: './social.component.html',
	styleUrls: ['./social.component.scss']
})

export class SocialComponent implements OnInit {
	constructor() { }

	@Input() theme: string;

	ngOnInit() {
	}
}
