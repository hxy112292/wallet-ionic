import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletErc20AddPage } from './wallet-erc20-add.page';

describe('WalletErc20AddPage', () => {
  let component: WalletErc20AddPage;
  let fixture: ComponentFixture<WalletErc20AddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletErc20AddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletErc20AddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
