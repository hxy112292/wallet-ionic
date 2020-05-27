import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletLitecoinCenterPage } from './wallet-litecoin-center.page';

describe('WalletLitecoinCenterPage', () => {
  let component: WalletLitecoinCenterPage;
  let fixture: ComponentFixture<WalletLitecoinCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletLitecoinCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletLitecoinCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
