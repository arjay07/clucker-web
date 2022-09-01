import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CluckFormComponent } from './cluck-form.component';

describe('CluckFormComponent', () => {
  let component: CluckFormComponent;
  let fixture: ComponentFixture<CluckFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CluckFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CluckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
