import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 15000 },
    { id: uuid(), name: 'Vegeta', power: 8500 },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }

  constructor() {}

  addCharacter(character: Character): void {
    this._characters.push(character);
  }

  deleteCharacterById(id: string): void {
    this._characters = this._characters.filter((v) => v.id != id);
  }
}
