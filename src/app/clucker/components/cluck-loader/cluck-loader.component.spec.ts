import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CluckLoaderComponent } from './cluck-loader.component';

describe('CluckLoaderComponent', () => {
  let component: CluckLoaderComponent;
  let fixture: ComponentFixture<CluckLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CluckLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CluckLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
