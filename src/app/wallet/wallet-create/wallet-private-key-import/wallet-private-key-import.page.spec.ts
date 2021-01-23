import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletPrivateKeyImportPage } from './wallet-private-key-import.page';

describe('WalletPrivateKeyImportPage', () => {
  let component: WalletPrivateKeyImportPage;
  let fixture: ComponentFixture<WalletPrivateKeyImportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPrivateKeyImportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletPrivateKeyImportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
