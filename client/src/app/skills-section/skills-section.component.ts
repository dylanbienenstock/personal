import { Component, OnInit } from '@angular/core';

import * as skillsJson from "skills.json";

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.component.html',
    styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {
    skillSubsections = skillsJson;

    constructor()
    {
        for (let section in this.skillSubsections) {
            this.skillSubsections[section].skills =
            this.skillSubsections[section].skills.sort((a, b) => {
                if (a.level < b.level) return 1;
                if (a.level > b.level) return -1;

                if (a.name[0] > b.name[0]) return 1;
                if (a.name[0] < b.name[0]) return -1;

                return 0;
            });
        }
    }    

    ngOnInit() {
        
    }
}
