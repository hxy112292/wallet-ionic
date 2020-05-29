import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletXrpReceivePage } from './wallet-xrp-receive.page';

describe('WalletXrpReceivePage', () => {
  let component: WalletXrpReceivePage;
  let fixture: ComponentFixture<WalletXrpReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletXrpReceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletXrpReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
