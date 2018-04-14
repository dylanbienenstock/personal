import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-footer-note',
    templateUrl: './footer-note.component.html',
    styleUrls: ['./footer-note.component.scss']
})

export class FooterNoteComponent implements OnInit {
    constructor() { }

    @ViewChild("sendButton")
    private sendButtonRef: ElementRef;

    private get sendButton(): HTMLCanvasElement {
        return this.sendButtonRef.nativeElement;
    }

    loaderStyle: any;

    note: Object = {
        sender: "",
        email: "",
        text: ""
    };

    ngOnInit() {
        let translateX = this.sendButton.clientWidth / 2 - 
            this.sendButton.clientHeight / 2;

        this.loaderStyle = {
            width: this.sendButton.clientHeight + "px",
            transform: `translateX(${translateX}px)`
        };
    }

    onSubmit($event) {
        $event.preventDefault();
    }

    onClear($event) {
        $event.preventDefault();
    }
}
