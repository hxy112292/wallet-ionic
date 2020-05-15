import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TxDetailPage } from './tx-detail.page';

describe('TxDetailPage', () => {
  let component: TxDetailPage;
  let fixture: ComponentFixture<TxDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TxDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
