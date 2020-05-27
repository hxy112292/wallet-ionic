import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TurnoverPage } from './turnover.page';

describe('TurnoverPage', () => {
  let component: TurnoverPage;
  let fixture: ComponentFixture<TurnoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TurnoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
