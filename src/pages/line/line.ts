import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';

// Import Angular Fire 2
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-line',
  templateUrl: 'line.html'
})
export class LinePage {

  rutas: FirebaseListObservable<any>;

  rutaParameters: {id: any, nombre: any};

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.rutas = af.database.list('/rutas');
  }

  goToMap(idr: any,nombrer: any){
    this.rutaParameters={
      id: idr,
      nombre: nombrer
    };
    this.navCtrl.push(MapPage, this.rutaParameters);
  }
}
