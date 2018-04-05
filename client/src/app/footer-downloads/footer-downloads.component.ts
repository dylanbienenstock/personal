import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer-downloads',
	templateUrl: './footer-downloads.component.html',
	styleUrls: ['./footer-downloads.component.scss']
})
export class FooterDownloadsComponent implements OnInit {
	constructor() { }

	downloads: Object[] = [
		{ name: "fake_download.txt", size: Math.round(Math.random() * 1023) },
		{ name: "fake_download.txt", size: Math.round(Math.random() * 1023) },
		{ name: "fake_download.txt", size: Math.round(Math.random() * 1023) },
		{ name: "fake_download.txt", size: Math.round(Math.random() * 1023) },
		{ name: "fake_download.txt", size: Math.round(Math.random() * 1023) },
		{ name: "fake_download.txt", size: Math.round(Math.random() * 1023) },
		{ name: "fake_download.txt", size: Math.round(Math.random() * 1023) },
	];

	ngOnInit() {
	}
}
