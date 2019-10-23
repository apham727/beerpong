import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { Router } from "@angular/router";
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})

@Injectable()
export class NewGamePage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  register(form) {
    console.log("about to call endpointt");
    var serverResp = this.http.get("/api/existing_games", { responseType: 'text' }).subscribe(response => console.log(response.toString()));
    this.router.navigateByUrl('home');
  }

}
