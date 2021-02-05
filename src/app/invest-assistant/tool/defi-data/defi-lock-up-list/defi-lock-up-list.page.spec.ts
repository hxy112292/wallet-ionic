import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefiLockUpListPage } from './defi-lock-up-list.page';

describe('DefiLockUpListPage', () => {
  let component: DefiLockUpListPage;
  let fixture: ComponentFixture<DefiLockUpListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiLockUpListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefiLockUpListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
