import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LinePage } from '../pages/line/line';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// Import angular2 google maps
import { AgmCoreModule } from 'angular2-google-maps/core';
// Import Angular Fire2 Module
import { AngularFireModule } from 'angularfire2';
// Setting of Angular Fire2 Module
export const firebaseConfig = {
  apiKey: "AIzaSyAuG4_4aQ5OnHDqCPhYh1j052Py8CN9JsU",
  authDomain: "pumakatari-1483600942860.firebaseapp.com",
  databaseURL: "https://pumakatari-1483600942860.firebaseio.com",
  storageBucket: "pumakatari-1483600942860.appspot.com",
  messagingSenderId: "536727686518"
};

@NgModule({
  declarations: [
    MyApp,
    LinePage,
    MapPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAUey6FqzKirHIm2Y70PwZ82hcLZq4DF2k'}),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LinePage,
    MapPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
