import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
	constructor(private _titleService: Title) {
		_titleService.setTitle("Dylan Bienenstock")
	}

    @ViewChild("content")
    private contentRef: ElementRef;

	ngAfterViewInit() {
		this.contentRef.nativeElement.style.opacity = 1;
    }
}
