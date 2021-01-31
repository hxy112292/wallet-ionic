import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinHolderAnalysisPage } from './coin-holder-analysis.page';

describe('CoinHolderAnalysisPage', () => {
  let component: CoinHolderAnalysisPage;
  let fixture: ComponentFixture<CoinHolderAnalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinHolderAnalysisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinHolderAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
