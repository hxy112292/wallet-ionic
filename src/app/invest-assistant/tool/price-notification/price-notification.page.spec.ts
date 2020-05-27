import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriceNotificationPage } from './price-notification.page';

describe('PriceNotificationPage', () => {
  let component: PriceNotificationPage;
  let fixture: ComponentFixture<PriceNotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceNotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriceNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
