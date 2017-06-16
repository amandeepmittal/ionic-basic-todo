import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SaveDataProvider {

  constructor(public storage: Storage) {
    console.log('Hello SaveDataProvider Provider');
  }

  getData() {
    return this.storage.get('todos');
  }
  saveData(data) {
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }
}
