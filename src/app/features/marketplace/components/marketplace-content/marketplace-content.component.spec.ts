import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceContentComponent } from './marketplace-content.component';

describe('MarketplaceContentComponent', () => {
  let component: MarketplaceContentComponent;
  let fixture: ComponentFixture<MarketplaceContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketplaceContentComponent]
    });
    fixture = TestBed.createComponent(MarketplaceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
