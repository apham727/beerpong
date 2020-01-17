import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; queue: Array<String>}> = [];


  constructor(private router: Router, private http: HttpClient, private alertCtrl: AlertController) {

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


  openDialog(gameToJoin) {
    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Join',
          handler: data => {
            var joinData = {
              gameName: gameToJoin,
              playerName: data.username
            }
            console.log(joinData);
            var postResp = this.http.post("http://localhost:8000/join_existing_game", joinData, { responseType: 'text' }).subscribe(response => console.log(response.toString()));

          }
        }
      ]
    });
    alert.then(al => al.present());
  }
}
