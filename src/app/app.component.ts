import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Counter app';
  count = 0;

  accumulate(v: number) {
    this.count += v;
  }
}
