import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlockchainBrowserPage } from './blockchain-browser.page';

describe('BlockchainBrowserPage', () => {
  let component: BlockchainBrowserPage;
  let fixture: ComponentFixture<BlockchainBrowserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainBrowserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockchainBrowserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
