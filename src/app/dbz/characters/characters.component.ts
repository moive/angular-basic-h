import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  // @Input('data') // 'data' name external to this component
  // characters: Character[] = [];

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {}
}
