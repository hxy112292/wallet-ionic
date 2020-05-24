import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletContactEditPage } from './wallet-contact-edit.page';

describe('WalletContactEditPage', () => {
  let component: WalletContactEditPage;
  let fixture: ComponentFixture<WalletContactEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletContactEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletContactEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
