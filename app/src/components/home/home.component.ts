import { Component, Input } from '@angular/core';

@Component({
  selector: 'main',
  template: require('./home.component.html')
})
export default class HomeComponent {

  title: String = "Home!";

  assets: any = {
    bgImage: require('../../../assets/images/angular.png')
  };

  constructor() { }
}
