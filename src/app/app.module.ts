import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePageModule } from './home/home.module';
import { ChangeIPPageModule } from './change-ip/change-ip.module';
import { ErrorPageModule } from './error/error.module';
import { FinishPageModule } from './finish/finish.module';
//import { SendPageModule } from './send/send.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    HomePageModule,
    ChangeIPPageModule,
    ErrorPageModule,
    FinishPageModule,
    //SendPageModule,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
