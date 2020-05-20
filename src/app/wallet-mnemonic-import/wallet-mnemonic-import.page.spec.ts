import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletMnemonicImportPage } from './wallet-mnemonic-import.page';

describe('WalletMnemonicImportPage', () => {
  let component: WalletMnemonicImportPage;
  let fixture: ComponentFixture<WalletMnemonicImportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletMnemonicImportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletMnemonicImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
