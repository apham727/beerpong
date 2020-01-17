import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; queue: Array<String>}> = [];


  constructor(private router: Router, private http: HttpClient) {

      this.http.get("http://localhost:8000/existing_games",{ responseType: 'text' }).subscribe(resp => {

      var games = JSON.parse(resp)
      console.log(games)
      for (let i = 0; i < games.length; i++) {
        this.items.push({
          title: games[i].gameName,
          queue: games[i].queue
        });
      }
    });


  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
