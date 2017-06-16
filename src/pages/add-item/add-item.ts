import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Component } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  title;
  description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description
    }

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
