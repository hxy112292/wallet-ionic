import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefiRatePage } from './defi-rate.page';

describe('DefiRatePage', () => {
  let component: DefiRatePage;
  let fixture: ComponentFixture<DefiRatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiRatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefiRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
