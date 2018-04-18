import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss']
})

export class MobileMenuComponent implements OnInit {

    constructor() { }

    menuVisible: boolean = false;

    ngOnInit() {
    }

    openMenu() {
        this.menuVisible = true;
    }

    closeMenu() {
        this.menuVisible = false;
    }
}
