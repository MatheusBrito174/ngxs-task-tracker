import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

@Injectable({
  providedIn: 'root',
})
export class LoremIpsumService {
  private _instance: LoremIpsum;

  constructor() {
    this._instance = new LoremIpsum();
  }

  getInstance(): LoremIpsum {
    return this._instance;
  }
}
