import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      The base is: <strong>{{ base }}</strong>
    </h3>
    <button (click)="accumulate(base)">+ {{ base }}</button>
    <span>{{ count }}</span>
    <button (click)="accumulate(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  title: string = 'Counter app';
  count: number = 0;
  base: number = 5;

  accumulate(v: number) {
    this.count += v;
  }
}
