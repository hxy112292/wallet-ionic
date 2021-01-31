import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinSocialHotSearchPage } from './coin-social-hot-search.page';

describe('CoinSocialHotSearchPage', () => {
  let component: CoinSocialHotSearchPage;
  let fixture: ComponentFixture<CoinSocialHotSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinSocialHotSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinSocialHotSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
