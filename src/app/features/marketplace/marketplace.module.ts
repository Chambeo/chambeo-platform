import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { PostModule } from 'src/app/shared/components/post/post.module';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    PostModule,
    MaterialModule
  ],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }