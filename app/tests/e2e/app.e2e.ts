import 'jasmine';

import { AngularEnvPage } from './app.po';

describe('angular-env App', () => {
  let page: AngularEnvPage;

  beforeEach(() => {
    page = new AngularEnvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home!');
  });
});
