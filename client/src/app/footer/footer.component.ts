import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    constructor() { }

    email: string[] = "db@dylanbienenstock.com".split("");
    tel: string[] = "(206) 915 5538".split("");

    ngOnInit() {
    }
}
