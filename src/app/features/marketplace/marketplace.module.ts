import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';



@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }
