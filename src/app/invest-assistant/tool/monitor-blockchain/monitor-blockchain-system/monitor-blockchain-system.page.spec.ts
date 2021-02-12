import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainSystemPage } from './monitor-blockchain-system.page';

describe('MonitorBlockchainSystemPage', () => {
  let component: MonitorBlockchainSystemPage;
  let fixture: ComponentFixture<MonitorBlockchainSystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBlockchainSystemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorBlockchainSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
