import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositionDownMaxPage } from './position-down-max.page';

describe('PositionDownMaxPage', () => {
  let component: PositionDownMaxPage;
  let fixture: ComponentFixture<PositionDownMaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionDownMaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionDownMaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
