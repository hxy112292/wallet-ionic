import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletBitcoinTransactionPage } from './wallet-bitcoin-transaction.page';

describe('WalletBitcoinTransactionPage', () => {
  let component: WalletBitcoinTransactionPage;
  let fixture: ComponentFixture<WalletBitcoinTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBitcoinTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletBitcoinTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
