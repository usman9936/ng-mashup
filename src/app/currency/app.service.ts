import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
    private apiUrl = 'http://api.fixer.io/latest';
    constructor(private http: HttpClient) {}

    getRates(base): Promise<any> {
        let url: string;

        // Check if base is set and customize API url accordingly
        if (base) {
            url = this.apiUrl + '?base=' + base;
        } else {
            url = this.apiUrl;
        }

        // Get rates from API
        return new Promise( (resolve, reject) => {
            this.http.get(url)
            .subscribe(
              data => {resolve(data)}, 
              err => { reject(err); }
            )});



        
    }
    

    private errorHandler(error: any): Promise<any> {
        // log error to console
        console.error('There was an error', error);
        return Promise.reject(error.message || error);
    }
}
