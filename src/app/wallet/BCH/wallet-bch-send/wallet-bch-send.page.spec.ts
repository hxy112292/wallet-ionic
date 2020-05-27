import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletBchSendPage } from './wallet-bch-send.page';

describe('WalletBchSendPage', () => {
  let component: WalletBchSendPage;
  let fixture: ComponentFixture<WalletBchSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBchSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletBchSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
