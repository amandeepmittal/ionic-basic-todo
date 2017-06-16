import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.items = [
      {title: 'Item 1', description: 'Description 1'},
      {title: 'Item 2', description: 'Description 2'},
      {title: 'Item 3', description: 'Description 3'},
    ]
  }

  addItem() {

  }

  viewItem() {

  }

}
