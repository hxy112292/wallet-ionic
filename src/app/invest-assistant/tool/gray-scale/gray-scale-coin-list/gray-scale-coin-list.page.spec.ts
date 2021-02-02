import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrayScaleCoinListPage } from './gray-scale-coin-list.page';

describe('GrayScaleCoinListPage', () => {
  let component: GrayScaleCoinListPage;
  let fixture: ComponentFixture<GrayScaleCoinListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrayScaleCoinListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrayScaleCoinListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
