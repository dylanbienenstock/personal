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

    formDisabled = false;

    loaderStyle = {
        width: "44px",
        transform: "",
        opacity: 0
    };

    sendButtonTextStyle = {
        opacity: 1
    };

    note: Object = {
        sender: "",
        email: "",
        text: ""
    };

    ngOnInit() {
        let translateX = this.sendButton.clientWidth / 2 - 
            this.sendButton.clientHeight / 2;

        this.loaderStyle.width = this.sendButton.clientHeight + "px";
        this.loaderStyle.transform = `translateX(${translateX}px)`;
    }

    onSubmit($event) {
        $event.preventDefault();

        this.showLoader(true);
    }

    onClear($event) {
        $event.preventDefault();

        this.note = {
            sender: "",
            email: "",
            text: ""
        };
    }

    showLoader(visible: boolean) {
        this.formDisabled = visible;
        this.loaderStyle.opacity = visible ? 1 : 0;
        this.sendButtonTextStyle.opacity = visible ? 0 : 1;
    }
}
