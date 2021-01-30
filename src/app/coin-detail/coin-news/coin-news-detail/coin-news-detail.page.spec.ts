import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinNewsDetailPage } from './coin-news-detail.page';

describe('CoinNewsDetailPage', () => {
  let component: CoinNewsDetailPage;
  let fixture: ComponentFixture<CoinNewsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinNewsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinNewsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
