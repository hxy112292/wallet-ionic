import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletMnemonicGeneratePage } from './wallet-mnemonic-generate.page';

describe('WalletMnemonicGeneratePage', () => {
  let component: WalletMnemonicGeneratePage;
  let fixture: ComponentFixture<WalletMnemonicGeneratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletMnemonicGeneratePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletMnemonicGeneratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
