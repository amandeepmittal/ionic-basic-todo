import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AddItemPage } from './../pages/add-item/add-item';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';
import { ItemDetailPage } from './../pages/item-detail/item-detail';
import { MyApp } from './app.component';
import { SaveDataProvider } from '../providers/save-data/save-data';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SaveDataProvider
  ]
})
export class AppModule {}
