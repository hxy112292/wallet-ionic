import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeepNewsPage } from './deep-news.page';

describe('DeepNewsPage', () => {
  let component: DeepNewsPage;
  let fixture: ComponentFixture<DeepNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeepNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
