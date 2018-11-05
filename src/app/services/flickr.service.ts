import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FlickrService {
  APIKey: string = '373937260aa0697f912fe74d747c9201';

  constructor(private http: HttpClient) { }

  search(args:Object) {
    let query = this.buildQueryString("flickr.photos.search", args);

    return this.http.get(query);
  }

  buildQueryString(method, args:Object) {
    let URL  = "https://www.flickr.com/services/rest/?method="+method+"&api_key="+this.APIKey+"&format=json&nojsoncallback=?";
    //let URL  = "https://www.flickr.com/services/rest/?method="+method+"&api_key="+this.APIKey+"&format=json&jsoncallback=?";
    for (let property in args) {
      URL += "&"+property+"="+args[property];
    }
    return URL;
  }

  getLocation(id:string) {
    let object = {photo_id: id};
    let query  = this.buildQueryString("flickr.photos.geo.getLocation", object);
    return this.http.get(query);
  }

}
