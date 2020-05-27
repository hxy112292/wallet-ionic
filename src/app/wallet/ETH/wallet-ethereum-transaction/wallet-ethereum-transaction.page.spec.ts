import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletEthereumTransactionPage } from './wallet-ethereum-transaction.page';

describe('WalletEthereumTransactionPage', () => {
  let component: WalletEthereumTransactionPage;
  let fixture: ComponentFixture<WalletEthereumTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletEthereumTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletEthereumTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
