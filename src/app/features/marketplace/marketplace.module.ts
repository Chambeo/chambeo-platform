import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';

@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }
