import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 8500 },
  ];

  newCharacter: Character = {
    name: ' ',
    power: 0,
  };

  add(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
