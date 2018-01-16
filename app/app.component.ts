import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='jumbotron container'>
    <h1>Hello</h1>
  </div>
  `
})

export class AppComponent {

}

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
