import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverScreenComponent } from './discover-screen.component';

describe('DiscoverScreenComponent', () => {
  let component: DiscoverScreenComponent;
  let fixture: ComponentFixture<DiscoverScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
