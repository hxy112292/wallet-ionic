import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserOpenDetailPage } from './user-open-detail.page';

describe('UserOpenDetailPage', () => {
  let component: UserOpenDetailPage;
  let fixture: ComponentFixture<UserOpenDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOpenDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserOpenDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
