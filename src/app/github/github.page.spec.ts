import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GithubPage } from './github.page';

describe('GithubPage', () => {
  let component: GithubPage;
  let fixture: ComponentFixture<GithubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GithubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
