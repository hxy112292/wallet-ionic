import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletLitecoinReceivePage } from './wallet-litecoin-receive.page';

describe('WalletLitecoinReceivePage', () => {
  let component: WalletLitecoinReceivePage;
  let fixture: ComponentFixture<WalletLitecoinReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletLitecoinReceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletLitecoinReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
