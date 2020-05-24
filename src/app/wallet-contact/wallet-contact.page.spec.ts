import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletContactPage } from './wallet-contact.page';

describe('WalletContactPage', () => {
  let component: WalletContactPage;
  let fixture: ComponentFixture<WalletContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
