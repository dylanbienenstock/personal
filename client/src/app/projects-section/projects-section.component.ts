import { Component, OnInit } from '@angular/core';

import * as projectsJson from "projects.json";

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.component.html',
    styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
    projectSubsections = projectsJson;

    constructor() { }

    ngOnInit() {
        
    }
}
