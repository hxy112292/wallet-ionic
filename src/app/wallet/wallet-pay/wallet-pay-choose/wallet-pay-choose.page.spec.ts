import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletPayChoosePage } from './wallet-pay-choose.page';

describe('WalletPayChoosePage', () => {
  let component: WalletPayChoosePage;
  let fixture: ComponentFixture<WalletPayChoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPayChoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletPayChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
