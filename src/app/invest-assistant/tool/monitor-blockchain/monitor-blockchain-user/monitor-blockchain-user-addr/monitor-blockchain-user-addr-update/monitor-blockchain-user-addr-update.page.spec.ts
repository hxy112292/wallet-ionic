import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserAddrUpdatePage } from './monitor-blockchain-user-addr-update.page';

describe('MonitorBlockchainUserAddrUpdatePage', () => {
  let component: MonitorBlockchainUserAddrUpdatePage;
  let fixture: ComponentFixture<MonitorBlockchainUserAddrUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBlockchainUserAddrUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorBlockchainUserAddrUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
