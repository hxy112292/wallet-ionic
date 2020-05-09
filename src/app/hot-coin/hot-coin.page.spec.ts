import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotCoinPage } from './hot-coin.page';

describe('HotCoinPage', () => {
  let component: HotCoinPage;
  let fixture: ComponentFixture<HotCoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotCoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotCoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
