import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsAvatarComponent } from './chips-avatar.component';

describe('ChipsAvatarComponent', () => {
  let component: ChipsAvatarComponent;
  let fixture: ComponentFixture<ChipsAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsAvatarComponent]
    });
    fixture = TestBed.createComponent(ChipsAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
