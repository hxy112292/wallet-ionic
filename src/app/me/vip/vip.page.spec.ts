import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VipPage } from './vip.page';

describe('VipPage', () => {
  let component: VipPage;
  let fixture: ComponentFixture<VipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
