import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GitDevPage } from './git-dev.page';

describe('GitDevPage', () => {
  let component: GitDevPage;
  let fixture: ComponentFixture<GitDevPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitDevPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GitDevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
