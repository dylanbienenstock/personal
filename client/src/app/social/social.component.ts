import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-social',
	templateUrl: './social.component.html',
	styleUrls: ['./social.component.scss']
})

export class SocialComponent implements OnInit {
	constructor() { }

	@Input() theme: string;
    email: string = "db@dylanbienenstock.com";

	ngOnInit() {

    }
    
    goTo(url: string) {
        window.open(url, "_blank");
    }

    mailTo() {
        document.location.href = `mailto:${this.email}`;
    }
}
