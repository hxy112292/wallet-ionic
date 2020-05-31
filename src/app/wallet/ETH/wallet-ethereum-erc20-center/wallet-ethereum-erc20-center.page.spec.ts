import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletEthereumErc20CenterPage } from './wallet-ethereum-erc20-center.page';

describe('WalletEthereumErc20CenterPage', () => {
  let component: WalletEthereumErc20CenterPage;
  let fixture: ComponentFixture<WalletEthereumErc20CenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletEthereumErc20CenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletEthereumErc20CenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
