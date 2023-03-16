import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Counter app';
  count: number = 0;
  base: number = 5;

  accumulate(v: number) {
    this.count += v;
  }
}
