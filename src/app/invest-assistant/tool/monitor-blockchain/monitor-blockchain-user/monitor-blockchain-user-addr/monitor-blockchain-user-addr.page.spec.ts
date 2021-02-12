import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserAddrPage } from './monitor-blockchain-user-addr.page';

describe('MonitorBlockchainUserAddrPage', () => {
  let component: MonitorBlockchainUserAddrPage;
  let fixture: ComponentFixture<MonitorBlockchainUserAddrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBlockchainUserAddrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorBlockchainUserAddrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
