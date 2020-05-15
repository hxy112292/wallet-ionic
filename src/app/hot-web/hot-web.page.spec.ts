import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotWebPage } from './hot-web.page';

describe('HotWebPage', () => {
  let component: HotWebPage;
  let fixture: ComponentFixture<HotWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
