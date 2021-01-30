import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositionUpMaxPage } from './position-up-max.page';

describe('PositionUpMaxPage', () => {
  let component: PositionUpMaxPage;
  let fixture: ComponentFixture<PositionUpMaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionUpMaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionUpMaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
