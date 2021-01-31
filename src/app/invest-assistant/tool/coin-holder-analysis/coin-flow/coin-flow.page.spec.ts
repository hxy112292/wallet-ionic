import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinFlowPage } from './coin-flow.page';

describe('CoinFlowPage', () => {
  let component: CoinFlowPage;
  let fixture: ComponentFixture<CoinFlowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinFlowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinFlowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
