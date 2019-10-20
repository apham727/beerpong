import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.page.html',
  styleUrls: ['./new-game.page.scss'],
})
export class NewGamePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(form) {
    this.router.navigateByUrl('home');
  }

}
