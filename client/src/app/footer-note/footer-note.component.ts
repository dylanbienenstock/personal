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

    formDisabled: boolean = false;
    statusText: string = "";
    statusOk: boolean = true;

    loaderStyle = {
        width: "44px",
        transform: "",
        opacity: 0
    };

    sendButtonTextStyle = {
        opacity: 1
    };

    statusTextStyle = {
        opacity: 0
    }

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

        this.sendEmail();
    }

    onClear($event) {
        $event.preventDefault();

        if (!this.formDisabled) {
            this.clearForm();
        }
    }

    clearForm() {
        this.noteForm.reset();
    }

    showLoader(visible: boolean) {
        this.formDisabled = visible;
        this.loaderStyle.opacity = visible ? 1 : 0;
        this.sendButtonTextStyle.opacity = visible ? 0 : 1;
    }

    sendEmail() {
        if (!this.noteForm.valid) return;

        this.showLoader(true);

        this.statusOk = true;
        this.statusText = "Sending...";
        this.statusTextStyle.opacity = 1;

        setTimeout((() => {
            this._httpService.sendNote(this.noteForm.value).subscribe((res) => {
                this.setStatus(res["success"]);
            }, (err) => {
                this.setStatus(false);                
            });
        }).bind(this), 1500);
    }

    setStatus(ok) {
        this.showLoader(false);

        if (ok) {
            this.clearForm();
        }

        this.statusOk = ok;
        this.statusText = ok ? "Sent &#10003;&#xFE0E;" : "Error &#9785;&#xFE0E;";

        setTimeout((() => {
            this.statusTextStyle.opacity = 0;
        }).bind(this), 1500);
    }
}
