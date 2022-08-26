import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeedScreenComponent } from './my-feed-screen.component';

describe('MyFeedScreenComponent', () => {
  let component: MyFeedScreenComponent;
  let fixture: ComponentFixture<MyFeedScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFeedScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFeedScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
