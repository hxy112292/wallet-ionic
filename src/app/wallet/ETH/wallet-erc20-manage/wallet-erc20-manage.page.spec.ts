import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletErc20ManagePage } from './wallet-erc20-manage.page';

describe('WalletErc20ManagePage', () => {
  let component: WalletErc20ManagePage;
  let fixture: ComponentFixture<WalletErc20ManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletErc20ManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletErc20ManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
