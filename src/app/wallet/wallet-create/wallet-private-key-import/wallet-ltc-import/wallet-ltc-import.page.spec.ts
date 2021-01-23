import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletLtcImportPage } from './wallet-ltc-import.page';

describe('WalletLtcImportPage', () => {
  let component: WalletLtcImportPage;
  let fixture: ComponentFixture<WalletLtcImportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletLtcImportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletLtcImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
