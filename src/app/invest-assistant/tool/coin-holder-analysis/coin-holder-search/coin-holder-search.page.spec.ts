import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinHolderSearchPage } from './coin-holder-search.page';

describe('CoinHolderSearchPage', () => {
  let component: CoinHolderSearchPage;
  let fixture: ComponentFixture<CoinHolderSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinHolderSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinHolderSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
