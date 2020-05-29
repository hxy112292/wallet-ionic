import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletXrpTransactionPage } from './wallet-xrp-transaction.page';

describe('WalletXrpTransactionPage', () => {
  let component: WalletXrpTransactionPage;
  let fixture: ComponentFixture<WalletXrpTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletXrpTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletXrpTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
