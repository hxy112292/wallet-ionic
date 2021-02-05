import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefiDataPage } from './defi-data.page';

describe('DefiDataPage', () => {
  let component: DefiDataPage;
  let fixture: ComponentFixture<DefiDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefiDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
