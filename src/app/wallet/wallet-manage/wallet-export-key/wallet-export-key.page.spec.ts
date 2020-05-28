import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletExportKeyPage } from './wallet-export-key.page';

describe('WalletExportKeyPage', () => {
  let component: WalletExportKeyPage;
  let fixture: ComponentFixture<WalletExportKeyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletExportKeyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletExportKeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
