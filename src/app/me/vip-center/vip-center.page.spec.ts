import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VipCenterPage } from './vip-center.page';

describe('VipCenterPage', () => {
  let component: VipCenterPage;
  let fixture: ComponentFixture<VipCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VipCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
