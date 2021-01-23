import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletXrpImportPage } from './wallet-xrp-import.page';

describe('WalletXrpImportPage', () => {
  let component: WalletXrpImportPage;
  let fixture: ComponentFixture<WalletXrpImportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletXrpImportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletXrpImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
