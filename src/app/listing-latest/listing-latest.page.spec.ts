import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingLatestPage } from './listing-latest.page';

describe('ListingLatestPage', () => {
  let component: ListingLatestPage;
  let fixture: ComponentFixture<ListingLatestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingLatestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingLatestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
