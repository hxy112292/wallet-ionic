import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateMonitorPricePage } from './update-monitor-price.page';

describe('UpdateMonitorPricePage', () => {
  let component: UpdateMonitorPricePage;
  let fixture: ComponentFixture<UpdateMonitorPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMonitorPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMonitorPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
