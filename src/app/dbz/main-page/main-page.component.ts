import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  newCharacter: Character = {
    name: 'Trunck',
    power: 14000,
  };

  add(): void {
    console.log(this.newCharacter);
  }
}
