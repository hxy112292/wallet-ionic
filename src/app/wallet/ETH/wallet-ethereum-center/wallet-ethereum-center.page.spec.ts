import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletEthereumCenterPage } from './wallet-ethereum-center.page';

describe('WalletEthereumCenterPage', () => {
  let component: WalletEthereumCenterPage;
  let fixture: ComponentFixture<WalletEthereumCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletEthereumCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletEthereumCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
