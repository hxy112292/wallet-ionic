import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletErc20SendPage } from './wallet-erc20-send.page';

describe('WalletErc20SendPage', () => {
  let component: WalletErc20SendPage;
  let fixture: ComponentFixture<WalletErc20SendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletErc20SendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletErc20SendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
