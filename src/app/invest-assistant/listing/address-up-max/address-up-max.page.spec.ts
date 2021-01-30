import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddressUpMaxPage } from './address-up-max.page';

describe('AddressUpMaxPage', () => {
  let component: AddressUpMaxPage;
  let fixture: ComponentFixture<AddressUpMaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressUpMaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressUpMaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
