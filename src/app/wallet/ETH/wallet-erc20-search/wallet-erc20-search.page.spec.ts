import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletErc20SearchPage } from './wallet-erc20-search.page';

describe('WalletErc20SearchPage', () => {
  let component: WalletErc20SearchPage;
  let fixture: ComponentFixture<WalletErc20SearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletErc20SearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletErc20SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
