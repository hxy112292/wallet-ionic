import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWalletPage } from './add-wallet.page';

describe('AddWalletPage', () => {
  let component: AddWalletPage;
  let fixture: ComponentFixture<AddWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
