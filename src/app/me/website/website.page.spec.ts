import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebsitePage } from './website.page';

describe('WebsitePage', () => {
  let component: WebsitePage;
  let fixture: ComponentFixture<WebsitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
