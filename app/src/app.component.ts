import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export default class AppComponent {
  title = 'Hello world!';
  constructor() {}
}
