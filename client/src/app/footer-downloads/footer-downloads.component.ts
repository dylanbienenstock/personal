import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-footer-downloads',
	templateUrl: './footer-downloads.component.html',
	styleUrls: ['./footer-downloads.component.scss']
})
export class FooterDownloadsComponent implements OnInit {
	constructor(private _httpService: HttpService) { }

	downloads: any[];

	ngOnInit() {
        this._httpService.getDownloads().subscribe((res: any) => {
            this.downloads = res;
        });
	}
}
