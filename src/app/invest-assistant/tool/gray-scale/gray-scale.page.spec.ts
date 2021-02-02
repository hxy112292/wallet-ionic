import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrayScalePage } from './gray-scale.page';

describe('GrayScalePage', () => {
  let component: GrayScalePage;
  let fixture: ComponentFixture<GrayScalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayScalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrayScalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
