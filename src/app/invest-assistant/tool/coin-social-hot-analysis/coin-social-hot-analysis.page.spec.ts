import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinSocialHotAnalysisPage } from './coin-social-hot-analysis.page';

describe('CoinSocialHotAnalysisPage', () => {
  let component: CoinSocialHotAnalysisPage;
  let fixture: ComponentFixture<CoinSocialHotAnalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinSocialHotAnalysisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinSocialHotAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
