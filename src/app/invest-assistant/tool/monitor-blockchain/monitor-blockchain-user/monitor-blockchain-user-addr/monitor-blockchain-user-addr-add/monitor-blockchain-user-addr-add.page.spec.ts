import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserAddrAddPage } from './monitor-blockchain-user-addr-add.page';

describe('MonitorBlockchainUserAddrAddPage', () => {
  let component: MonitorBlockchainUserAddrAddPage;
  let fixture: ComponentFixture<MonitorBlockchainUserAddrAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBlockchainUserAddrAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorBlockchainUserAddrAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
