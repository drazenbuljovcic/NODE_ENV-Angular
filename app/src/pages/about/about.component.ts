import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  template: `<router-outlet></router-outlet><h1>About!</h1><a [routerLink]="['/']">Home</a><a [routerLink]="['/about/contact']">Contact</a>`
})
export class AboutComponent {
  constructor() {}
}

@Component({
  selector: 'contact-page',
  template: `<h1>Contact!</h1><a [routerLink]="['/']">Home</a>`
})
export class ContactComponent {
  constructor() {}
}
