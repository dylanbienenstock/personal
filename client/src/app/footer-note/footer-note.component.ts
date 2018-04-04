import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer-note',
    templateUrl: './footer-note.component.html',
    styleUrls: ['./footer-note.component.scss']
})

export class FooterNoteComponent implements OnInit {
    constructor() { }

    note: Object = {
        sender: "",
        email: "",
        text: ""
    };

    ngOnInit() {
    }

    onSubmit($event) {
        $event.preventDefault();
    }

    onClear($event) {
        $event.preventDefault();
    }
}
