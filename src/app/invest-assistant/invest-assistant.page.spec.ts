import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvestAssistantPage } from './invest-assistant.page';

describe('InvestAssistantPage', () => {
  let component: InvestAssistantPage;
  let fixture: ComponentFixture<InvestAssistantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestAssistantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestAssistantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
