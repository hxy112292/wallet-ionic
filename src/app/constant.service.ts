import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly baseUrl: string = 'https://www.hxyvip.club:7070';
  constructor() { }
}
