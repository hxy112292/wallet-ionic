import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeVolPage } from './change-vol.page';

describe('ChangeVolPage', () => {
  let component: ChangeVolPage;
  let fixture: ComponentFixture<ChangeVolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeVolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeVolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
