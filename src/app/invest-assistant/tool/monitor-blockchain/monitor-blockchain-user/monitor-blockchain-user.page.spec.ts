import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorBlockchainUserPage } from './monitor-blockchain-user.page';

describe('MonitorBlockchainUserPage', () => {
  let component: MonitorBlockchainUserPage;
  let fixture: ComponentFixture<MonitorBlockchainUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorBlockchainUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorBlockchainUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
