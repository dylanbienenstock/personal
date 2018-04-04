import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    constructor() { }

    email: string = "db@dylanbienenstock.com";
    emailArray: string[];

    ngOnInit() {
        this.emailArray = this.email.split("");
    }
}
