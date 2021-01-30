import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinHolderPage } from './coin-holder.page';

describe('CoinHolderPage', () => {
  let component: CoinHolderPage;
  let fixture: ComponentFixture<CoinHolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinHolderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinHolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
