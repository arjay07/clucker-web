import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBarComponent } from './screen-bar.component';

describe('ScreenBarComponent', () => {
  let component: ScreenBarComponent;
  let fixture: ComponentFixture<ScreenBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
