import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletContactChoosePage } from './wallet-contact-choose.page';

describe('WalletContactChoosePage', () => {
  let component: WalletContactChoosePage;
  let fixture: ComponentFixture<WalletContactChoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletContactChoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletContactChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
