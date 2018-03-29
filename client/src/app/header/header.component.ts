import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

	constructor(private _scroll: ScrollService) { }

	ngOnInit() {

	}
}
