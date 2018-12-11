import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../services/youtube.service';
import { query } from '@angular/animations';
@Component({
  selector: 'app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.scss']
})
export class MyappComponent implements OnInit {
  title = 'ng-mashup';
  // lat: number;
  // long: number;

  lat: number = 56.8770413;
 long: number = 14.8092744;

public videos: any;
public query_video: string;
 constructor(public youtubeservice : YoutubeService) {}

  ngOnInit() {
    //this.onSearch('Vaxjo sweden');
  }
  player: YT.Player;
  private id: string = 'LUT6jJbH_HY';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }



  handleAddressChange(address) {
    console.log(address);
    this.lat = address.geometry.location.lat();
    this.long = address.geometry.location.lng();
  }

  setVideoID(videoId){
    this.id = '';

    setTimeout(() => {this.id = videoId;},300)
    
  }

  onSearch() {

    this.youtubeservice.getvideos(this.query_video)
      .subscribe((response) => {
          console.log(response)
          let videos: any = response;
          this.videos = videos.items;
        },
        error => console.error(error)
      );
  }

}
