import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConceptPage } from './concept.page';

describe('ConceptPage', () => {
  let component: ConceptPage;
  let fixture: ComponentFixture<ConceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
