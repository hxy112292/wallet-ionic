import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletEthereumReceivePage } from './wallet-ethereum-receive.page';

describe('WalletEthereumReceivePage', () => {
  let component: WalletEthereumReceivePage;
  let fixture: ComponentFixture<WalletEthereumReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletEthereumReceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletEthereumReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
