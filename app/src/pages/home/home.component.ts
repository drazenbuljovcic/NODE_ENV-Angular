import { Component, Input } from '@angular/core';

import { config } from '../../config'

@Component({
  selector: 'home',
  // templateUrl: 'home.component.html',
  templateUrl: 'home.component.html',
  // ...template
  // In order to use Pug for production Build using AOT, the HTML needs to be preprocessed beforehand
  // template: config.env !== 'production' ? require('./home.component.pug')() : null
})
export class HomeComponent {

  title: String = 'Home!';

  assets: any = {
    image: require('~/assets/images/angular.png')
  };

  constructor() {}
}
