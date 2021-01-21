import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  async get(key) {
    return this.storage.get(key);
  }

  set(key, value) {
    this.storage.set(key, value);
  }

  remove(key: string) {
    this.storage.remove(key);
  }
}
