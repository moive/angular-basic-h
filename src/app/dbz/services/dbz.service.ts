import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {
    console.log('Initialized service');
  }

  private _characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 8500 },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }
}
