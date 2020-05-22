import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriceNotificationLatestPage } from './price-notification-latest.page';

describe('PriceNotificationLatestPage', () => {
  let component: PriceNotificationLatestPage;
  let fixture: ComponentFixture<PriceNotificationLatestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceNotificationLatestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriceNotificationLatestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
