import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  mySlideOptions = {
    autoplay: 3000,
    direction: "vertical",
    initialSlide: 0,
    loop: true,
    pager: true,
    speed: 1500
  };

}
