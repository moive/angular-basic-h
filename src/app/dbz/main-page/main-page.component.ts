import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  newCharacter: Character = {
    id: uuid(),
    name: 'Master Roshi',
    power: 1000,
  };
}
