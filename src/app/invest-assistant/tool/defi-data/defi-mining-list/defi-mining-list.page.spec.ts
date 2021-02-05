import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefiMiningListPage } from './defi-mining-list.page';

describe('DefiMiningListPage', () => {
  let component: DefiMiningListPage;
  let fixture: ComponentFixture<DefiMiningListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiMiningListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefiMiningListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
