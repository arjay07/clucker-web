import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactCluckViewComponent } from './compact-cluck-view.component';

describe('CompactCluckViewComponent', () => {
  let component: CompactCluckViewComponent;
  let fixture: ComponentFixture<CompactCluckViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactCluckViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompactCluckViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
