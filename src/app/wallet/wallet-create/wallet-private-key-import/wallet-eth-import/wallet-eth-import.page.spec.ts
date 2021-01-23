import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletEthImportPage } from './wallet-eth-import.page';

describe('WalletEthImportPage', () => {
  let component: WalletEthImportPage;
  let fixture: ComponentFixture<WalletEthImportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletEthImportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletEthImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
