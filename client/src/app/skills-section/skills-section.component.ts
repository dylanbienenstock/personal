import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.component.html',
    styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {
    constructor() { }

    skillSections = [
         {
             name: "Technologies", 
             skills: [
                "Node / Express",
                "Socket.IO",
                "Angular",
                "MongoDB",
                "ASP NET Core",
                "Entity Framework",
                "Django",
                "Flask"
            ],
        },
        {
            name: "Languages", 
            skills: [
                "HTML",
                "Javascript / Typescript",
                "CSS / SCSS",
                "C#",
                "Python",
                "Lua"
            ],
        },
        {
            name: "Miscellaneous", 
            skills: [
                "Game Engine Design",
                "3D Level Design",
                "3D Modeling",
                "Graphic Design"
            ]
        }
    ]

    ngOnInit() {

    }

}
