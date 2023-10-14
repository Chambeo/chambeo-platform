import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';



@NgModule({
  declarations: [
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }
