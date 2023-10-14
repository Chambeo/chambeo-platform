import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsLabelsComponent } from './chips-labels.component';

describe('ChipsLabelsComponent', () => {
  let component: ChipsLabelsComponent;
  let fixture: ComponentFixture<ChipsLabelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsLabelsComponent]
    });
    fixture = TestBed.createComponent(ChipsLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
