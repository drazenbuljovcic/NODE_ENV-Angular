import { TestBed, async } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';

import RoutingModule from '../../src/app.routes';
import AppComponent from '../../src/app.component';
import HomeComponent from '../../src/components/home/home.component';
import AboutComponent from '../../src/components/about/about.component';

import NotFoundComponent from '../../src/components/not-found/not-found.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RoutingModule
      ],
      declarations: [
        AppComponent,

        HomeComponent,
        AboutComponent,
        NotFoundComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render router outlet', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  }));
});
