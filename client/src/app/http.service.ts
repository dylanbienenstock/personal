import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private _httpClient: HttpClient) { }

    getDownloads() {
        return this._httpClient.get("downloads");
    }
}
