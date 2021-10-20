import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserCenterPage } from './user-center.page';

describe('UserCenterPage', () => {
  let component: UserCenterPage;
  let fixture: ComponentFixture<UserCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
