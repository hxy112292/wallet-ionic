import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletXrpCenterPage } from './wallet-xrp-center.page';

describe('WalletXrpCenterPage', () => {
  let component: WalletXrpCenterPage;
  let fixture: ComponentFixture<WalletXrpCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletXrpCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletXrpCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
