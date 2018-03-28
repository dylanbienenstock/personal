import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
	title = 'app';

    @ViewChild("content")
    private contentRef: ElementRef;

    @ViewChild("header")
    private headerRef: ElementRef;

	ngAfterViewInit() {
		this.contentRef.nativeElement.style.opacity = 1;
    }
    
    @HostListener("window:scroll", ["$event"])
    onScrollEvent($event) {
        let header = this.contentRef.nativeElement.children[0];

        let scrollY = window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop || 0;
    } 
}
