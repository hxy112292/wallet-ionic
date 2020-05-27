import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletBitcoinSendPage } from './wallet-bitcoin-send.page';

describe('WalletBitcoinSendPage', () => {
  let component: WalletBitcoinSendPage;
  let fixture: ComponentFixture<WalletBitcoinSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBitcoinSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletBitcoinSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
