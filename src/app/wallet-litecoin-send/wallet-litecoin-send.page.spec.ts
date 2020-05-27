import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletLitecoinSendPage } from './wallet-litecoin-send.page';

describe('WalletLitecoinSendPage', () => {
  let component: WalletLitecoinSendPage;
  let fixture: ComponentFixture<WalletLitecoinSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletLitecoinSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletLitecoinSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
