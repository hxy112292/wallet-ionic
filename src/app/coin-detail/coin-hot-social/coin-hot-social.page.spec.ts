import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinHotSocialPage } from './coin-hot-social.page';

describe('CoinHotSocialPage', () => {
  let component: CoinHotSocialPage;
  let fixture: ComponentFixture<CoinHotSocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinHotSocialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinHotSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
