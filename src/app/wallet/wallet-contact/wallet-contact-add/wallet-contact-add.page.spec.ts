import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletContactAddPage } from './wallet-contact-add.page';

describe('WalletContactAddPage', () => {
  let component: WalletContactAddPage;
  let fixture: ComponentFixture<WalletContactAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletContactAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletContactAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
