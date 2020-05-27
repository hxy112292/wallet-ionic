import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletMnemonicConfirmPage } from './wallet-mnemonic-confirm.page';

describe('WalletMnemonicConfirmPage', () => {
  let component: WalletMnemonicConfirmPage;
  let fixture: ComponentFixture<WalletMnemonicConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletMnemonicConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletMnemonicConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
