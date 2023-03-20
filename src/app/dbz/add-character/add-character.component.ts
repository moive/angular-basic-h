import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
})
export class AddCharacterComponent {
  @Input()
  newCharacter: Character = {
    name: ' ',
    power: 0,
  };

  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
