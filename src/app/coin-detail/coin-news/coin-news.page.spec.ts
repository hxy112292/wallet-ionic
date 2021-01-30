import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinNewsPage } from './coin-news.page';

describe('CoinNewsPage', () => {
  let component: CoinNewsPage;
  let fixture: ComponentFixture<CoinNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
