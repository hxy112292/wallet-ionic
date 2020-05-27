import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletLitecoinTransactionPage } from './wallet-litecoin-transaction.page';

describe('WalletLitecoinTransactionPage', () => {
  let component: WalletLitecoinTransactionPage;
  let fixture: ComponentFixture<WalletLitecoinTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletLitecoinTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletLitecoinTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
