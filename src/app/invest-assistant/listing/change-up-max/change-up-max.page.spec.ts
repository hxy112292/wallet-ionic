import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeUpMaxPage } from './change-up-max.page';

describe('ChangeUpMaxPage', () => {
  let component: ChangeUpMaxPage;
  let fixture: ComponentFixture<ChangeUpMaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUpMaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeUpMaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
