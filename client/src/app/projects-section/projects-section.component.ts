import { Component, OnInit } from '@angular/core';

import * as config from "./projects-section.config.json";

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.component.html',
    styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
    projectSubsections = config;

    constructor() { }

    ngOnInit() {
        
    }
}
