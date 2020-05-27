import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletBitcoinReceivePage } from './wallet-bitcoin-receive.page';

describe('WalletBitcoinReceivePage', () => {
  let component: WalletBitcoinReceivePage;
  let fixture: ComponentFixture<WalletBitcoinReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBitcoinReceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletBitcoinReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
