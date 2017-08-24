import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

// Import Angular Fire 2
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {

  userLocation: {lat: number, lng: number, pathImageLocation: string, zoom: number};

  rutaParameters: any;
  buses: FirebaseListObservable<any>;
  imageLocation: string = '../assets/img/autobus.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
    this.rutaParameters = this.navParams.data;
    this.buses = af.database.list('/rutas-data/'+this.rutaParameters.id);
//    this.ruta = af.database.object('/rutas-data/'+this.mapid+'/buses/lat');
/*
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  // ...
});
*/
  }

  ionViewDidLoad() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.userLocation={
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
        pathImageLocation: '../assets/img/usuario.png',
        zoom: 18
      }
    })
  }
  
}
