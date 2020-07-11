import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinMarketPage } from './coin-market.page';

describe('CoinMarketPage', () => {
  let component: CoinMarketPage;
  let fixture: ComponentFixture<CoinMarketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinMarketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinMarketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
