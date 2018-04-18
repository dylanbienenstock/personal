import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss']
})

export class MobileMenuComponent implements OnInit {
    constructor(private _scroll: ScrollService) { }

    menuVisible: boolean = false;

    ngOnInit() {
    }

    openMenu() {
        this.menuVisible = true;
    }

    closeMenu() {
        this.menuVisible = false;
	}
	
	scrollTo(section: string) {
		this.closeMenu();
		this._scroll.to(section);
	}
}
