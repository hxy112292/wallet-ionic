import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarketCurrencyPage } from './market-currency.page';

describe('MarketCurrencyPage', () => {
  let component: MarketCurrencyPage;
  let fixture: ComponentFixture<MarketCurrencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketCurrencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarketCurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
