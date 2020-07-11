import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinDescPage } from './coin-desc.page';

describe('CoinDescPage', () => {
  let component: CoinDescPage;
  let fixture: ComponentFixture<CoinDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinDescPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
