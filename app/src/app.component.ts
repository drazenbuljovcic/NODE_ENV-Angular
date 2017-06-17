import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title: String = 'ANGULAR';

  constructor() {
    console.log(this.title);
  }
}
