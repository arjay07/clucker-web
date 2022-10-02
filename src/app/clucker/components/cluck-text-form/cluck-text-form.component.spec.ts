import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CluckTextFormComponent } from './cluck-text-form.component';

describe('CluckTextFormComponent', () => {
  let component: CluckTextFormComponent;
  let fixture: ComponentFixture<CluckTextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CluckTextFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CluckTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
