import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletEthPayPage } from './wallet-eth-pay.page';

describe('WalletEthPayPage', () => {
  let component: WalletEthPayPage;
  let fixture: ComponentFixture<WalletEthPayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletEthPayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletEthPayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
