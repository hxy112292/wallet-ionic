import { Injectable } from '@angular/core';
import {PrivateKey} from '../entity/private-key';

@Injectable({
  providedIn: 'root'
})
export class PrivateKeyService {
  privateKeyList: PrivateKey[];
  privateKeyListLength: number;


  constructor() {
    this.privateKeyList = [];
    this.privateKeyListLength = 0;
  }
}
