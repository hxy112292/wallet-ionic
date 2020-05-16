import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConceptDetailPage } from './concept-detail.page';

describe('ConceptDetailPage', () => {
  let component: ConceptDetailPage;
  let fixture: ComponentFixture<ConceptDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
