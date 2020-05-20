import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletAddChoosePage } from './wallet-add-choose.page';

describe('WalletAddChoosePage', () => {
  let component: WalletAddChoosePage;
  let fixture: ComponentFixture<WalletAddChoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletAddChoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletAddChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
