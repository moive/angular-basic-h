import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  @Input()
  newCharacter: Character = {
    id: uuid(),
    name: ' ',
    power: 0,
  };

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      id: '',
      name: '',
      power: 0,
    };
  }

  constructor(private dbzService: DbzService) {}
}
