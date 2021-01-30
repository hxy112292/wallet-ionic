import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeDownMaxPage } from './change-down-max.page';

describe('ChangeDownMaxPage', () => {
  let component: ChangeDownMaxPage;
  let fixture: ComponentFixture<ChangeDownMaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDownMaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDownMaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
