import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinReduceHalfPage } from './coin-reduce-half.page';

describe('CoinReduceHalfPage', () => {
  let component: CoinReduceHalfPage;
  let fixture: ComponentFixture<CoinReduceHalfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinReduceHalfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinReduceHalfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
