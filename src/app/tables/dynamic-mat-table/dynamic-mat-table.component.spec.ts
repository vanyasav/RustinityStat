import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicMatTableComponent} from './dynamic-mat-table.component';

describe('DynamicMatTableComponent', () => {
  let component: DynamicMatTableComponent;
  let fixture: ComponentFixture<DynamicMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicMatTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
