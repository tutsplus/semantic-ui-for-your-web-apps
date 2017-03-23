import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.ui.embed').embed();
  }

}
