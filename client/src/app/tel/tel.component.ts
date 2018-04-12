import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tel',
    templateUrl: './tel.component.html',
    styleUrls: ['./tel.component.scss']
})
export class TelComponent implements OnInit {

    constructor() { }

    tel: string[] = "(206) 915 5538".split("");

    ngOnInit() {
    }
}
