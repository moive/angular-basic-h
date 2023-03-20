import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  newCharacter: Character = {
    name: 'Master Roshi',
    power: 1000,
  };

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  addNewCharacter(val: Character): void {
    this.characters.push(val);
  }

  constructor(private dbzService: DbzService) {}
}
