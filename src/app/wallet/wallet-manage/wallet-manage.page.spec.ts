import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletManagePage } from './wallet-manage.page';

describe('WalletManagePage', () => {
  let component: WalletManagePage;
  let fixture: ComponentFixture<WalletManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
