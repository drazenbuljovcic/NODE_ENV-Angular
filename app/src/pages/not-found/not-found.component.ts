import { Component } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `<h1>Not Found</h1><a [routerLink]="['/']">Go Home</a>`
})
export class NotFoundComponent {
  constructor() {}
}
