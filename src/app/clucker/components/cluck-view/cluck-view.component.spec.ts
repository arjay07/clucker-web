import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CluckViewComponent } from './cluck-view.component';

describe('CluckViewComponent', () => {
  let component: CluckViewComponent;
  let fixture: ComponentFixture<CluckViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CluckViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CluckViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
