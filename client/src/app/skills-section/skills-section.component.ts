import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.component.html',
    styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {
    skillSubsections: any = [
        {
            name: "Technologies",
            skills: [
                {
                    name: "Node + Express",
                    level: 1
                },
                {
                    name: "Socket.IO",
                    level: 2
                },
                {
                    name: "Angular",
                    level: 1
                },
                {
                    name: "MongoDB",
                    level: 0
                },
                {
                    name: "ASP NET Core",
                    level: 2
                },
                {
                    name: "Entity Framework",
                    level: 1
                },
                {
                    name: "Django",
                    level: 2
                },
                {
                    name: "jQuery",
                    level: 2
                }
            ],
        },
        {
            name: "Languages",
            skills: [
                {
                    name: "C / C++",
                    level: 0
                },
                {
                    name: "Javascript / Typescript",
                    level: 2
                },
                {
                    name: "CSS / SCSS",
                    level: 2
                },
                {
                    name: "C#",
                    level: 2
                },
                {
                    name: "Python",
                    level: 1
                },
                {
                    name: "Lua",
                    level: 2
                },
                {
                    name: "Java",
                    level: 1
                },
                {
                    name: "Objective-C",
                    level: 0
                }
            ]
        },
        {
            name: "Miscellaneous",
            skills: [
                {
                    name: "Game Engine Design",
                    level: 1
                },
                {
                    name: "3D Level Design",
                    level: 2
                },
                {
                    name: "3D Modeling",
                    level: 1
                },
                {
                    name: "Graphic Design",
                    level: 0
                },
                {
                    name: "Electrical Engineering",
                    level: 0
                },
                {
                    name: "UX / UI Design",
                    level: 1
                }
            ]
        }
    ]

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
