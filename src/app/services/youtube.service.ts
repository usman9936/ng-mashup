import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
    public BASE_URL: string = 'https://www.googleapis.com/youtube/v3/search';
    public API_TOKEN: string = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
  constructor(private http: HttpClient) { }

  getvideos(query: string) {
   // const url = 'https://celtest1.lnu.se/mashup/php/CareerService.php?title=' + title;
    // let url = 'dist/php/CareerService.php?title=' + title;
    //return this.http.get(url);
    // .map((res: Response) => res.json());
    return this.http.get(`${this.BASE_URL}?q=${query}&part=snippet&key=${this.API_TOKEN}`);
    

  }
}
