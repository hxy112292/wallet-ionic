import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiveNewsDetailPage } from './live-news-detail.page';

describe('LiveNewsDetailPage', () => {
  let component: LiveNewsDetailPage;
  let fixture: ComponentFixture<LiveNewsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveNewsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiveNewsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
