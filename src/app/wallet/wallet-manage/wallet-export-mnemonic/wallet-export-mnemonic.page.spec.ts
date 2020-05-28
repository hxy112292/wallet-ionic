import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletExportMnemonicPage } from './wallet-export-mnemonic.page';

describe('WalletExportMnemonicPage', () => {
  let component: WalletExportMnemonicPage;
  let fixture: ComponentFixture<WalletExportMnemonicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletExportMnemonicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletExportMnemonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
