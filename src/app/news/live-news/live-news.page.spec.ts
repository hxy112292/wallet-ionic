import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveNewsPage } from './live-news.page';

describe('LiveNewsPage', () => {
  let component: LiveNewsPage;
  let fixture: ComponentFixture<LiveNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
