import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletPrivateKeyPasswordPage } from './wallet-private-key-password.page';

describe('WalletPrivateKeyPasswordPage', () => {
  let component: WalletPrivateKeyPasswordPage;
  let fixture: ComponentFixture<WalletPrivateKeyPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPrivateKeyPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletPrivateKeyPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
