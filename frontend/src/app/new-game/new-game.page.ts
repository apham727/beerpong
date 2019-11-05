import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ServerResponse } from 'http';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})

@Injectable()
export class NewGamePage implements OnInit {

  private lng: number;
  private lat: number;

  constructor(private router: Router, private http: HttpClient, private location: Location) { 
    this.lng = -95.398829;
    this.lat = 29.715297;
  }

  ngOnInit() {
    if (navigator.geolocation) {
      console.log("Geolocation service available in user browser");
      navigator.geolocation.getCurrentPosition(currentPosition => {
        console.log('currentPosition', currentPosition);
        this.lng = currentPosition.coords.longitude;
        this.lat = currentPosition.coords.latitude;
      })
    } else {
      console.log("geolocation service not available;");
    }
  }

  register(form) {
    console.log(form.value)
    var serverResp = this.http.get("/api/existing_games", { responseType: 'text' }).subscribe(response => console.log(response.toString()));
    var postResp = this.http.post("/api/create_new_game", form.value, { responseType: 'text' }).subscribe(response => console.log(response.toString()));
    this.router.navigateByUrl('home');
  }

}
