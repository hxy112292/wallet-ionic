import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExchangePage } from './exchange.page';

describe('ExchangePage', () => {
  let component: ExchangePage;
  let fixture: ComponentFixture<ExchangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExchangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
