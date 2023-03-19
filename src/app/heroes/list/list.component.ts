import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroDeleted!: string;

  remoteHero(): void {
    this.heroDeleted = this.heroes.shift() || '';
  }
}
