import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletBitcoinCenterPage } from './wallet-bitcoin-center.page';

describe('WalletBitcoinCenterPage', () => {
  let component: WalletBitcoinCenterPage;
  let fixture: ComponentFixture<WalletBitcoinCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBitcoinCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletBitcoinCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
