import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefiEthDataPage } from './defi-eth-data.page';

describe('DefiEthDataPage', () => {
  let component: DefiEthDataPage;
  let fixture: ComponentFixture<DefiEthDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiEthDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefiEthDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
