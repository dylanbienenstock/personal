import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
	title = 'app';

	@ViewChild("content")
	private contentRef: ElementRef;

	ngAfterViewInit() {
		this.contentRef.nativeElement.style.opacity = 1;
	}
}
