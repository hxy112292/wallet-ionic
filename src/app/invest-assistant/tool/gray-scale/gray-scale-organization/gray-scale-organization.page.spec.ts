import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrayScaleOrganizationPage } from './gray-scale-organization.page';

describe('GrayScaleOrganizationPage', () => {
  let component: GrayScaleOrganizationPage;
  let fixture: ComponentFixture<GrayScaleOrganizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayScaleOrganizationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrayScaleOrganizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
