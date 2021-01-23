import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletBchImportPage } from './wallet-bch-import.page';

describe('WalletBchImportPage', () => {
  let component: WalletBchImportPage;
  let fixture: ComponentFixture<WalletBchImportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletBchImportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletBchImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
