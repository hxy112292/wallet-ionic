import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletMnemonicPasswordPage } from './wallet-mnemonic-password.page';

describe('WalletMnemonicPasswordPage', () => {
  let component: WalletMnemonicPasswordPage;
  let fixture: ComponentFixture<WalletMnemonicPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletMnemonicPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletMnemonicPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
