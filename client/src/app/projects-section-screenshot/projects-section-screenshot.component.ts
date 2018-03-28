import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-projects-section-screenshot',
    templateUrl: './projects-section-screenshot.component.html',
    styleUrls: ['./projects-section-screenshot.component.scss']
})
export class ProjectsSectionScreenshotComponent implements OnInit {
    @Input() image: string;
    showTitleBar: boolean = false;

    constructor() { }

    ngOnInit() {
    }

}
