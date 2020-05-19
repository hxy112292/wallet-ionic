import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMonitorPricePage } from './add-monitor-price.page';

describe('AddMonitorPricePage', () => {
  let component: AddMonitorPricePage;
  let fixture: ComponentFixture<AddMonitorPricePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMonitorPricePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMonitorPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
