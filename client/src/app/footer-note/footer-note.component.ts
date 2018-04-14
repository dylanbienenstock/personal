import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-footer-note',
    templateUrl: './footer-note.component.html',
    styleUrls: ['./footer-note.component.scss']
})

export class FooterNoteComponent implements OnInit {
    constructor(private _httpService: HttpService) { }

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

    noteForm: FormGroup;

    ngOnInit() {
        let translateX = this.sendButton.clientWidth / 2 - 
            this.sendButton.clientHeight / 2;

        this.loaderStyle.width = this.sendButton.clientHeight + "px";
        this.loaderStyle.transform = `translateX(${translateX}px)`;

        let emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.noteForm = new FormGroup({
            "sender": new FormControl("", [
                Validators.required
            ]),
            "email": new FormControl("", [
                Validators.required,
                Validators.pattern(emailRegex)
            ]),
            "text": new FormControl("", [
                Validators.required,
                Validators.maxLength(256)
            ])
        });
    }

    onSubmit($event) {
        $event.preventDefault();

        this.showLoader(true);
    }

    onClear($event) {
        $event.preventDefault();

        this.clearForm();
    }

    clearForm() {
        this.noteForm.reset();
    }

    showLoader(visible: boolean) {
        this.formDisabled = visible;
        this.loaderStyle.opacity = visible ? 1 : 0;
        this.sendButtonTextStyle.opacity = visible ? 0 : 1;
    }
}
