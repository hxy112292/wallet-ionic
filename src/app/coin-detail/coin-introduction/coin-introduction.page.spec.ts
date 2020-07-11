import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinIntroductionPage } from './coin-introduction.page';

describe('CoinIntroductionPage', () => {
  let component: CoinIntroductionPage;
  let fixture: ComponentFixture<CoinIntroductionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinIntroductionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinIntroductionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
