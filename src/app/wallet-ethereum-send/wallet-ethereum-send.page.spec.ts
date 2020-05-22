import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletEthereumSendPage } from './wallet-ethereum-send.page';

describe('WalletEthereumSendPage', () => {
  let component: WalletEthereumSendPage;
  let fixture: ComponentFixture<WalletEthereumSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletEthereumSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletEthereumSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
