import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { PublicationModule } from 'src/app/shared/components/publication/publication.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    PublicationModule,
    MaterialModule
  ],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }