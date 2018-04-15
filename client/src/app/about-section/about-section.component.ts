import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
    selector: 'app-about-section',
    templateUrl: './about-section.component.html',
    styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

    constructor(public _scroll: ScrollService) { }

    ngOnInit() {
    }
}
