import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletXrpSendPage } from './wallet-xrp-send.page';

describe('WalletXrpSendPage', () => {
  let component: WalletXrpSendPage;
  let fixture: ComponentFixture<WalletXrpSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletXrpSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletXrpSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
