import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { MarketplaceContentComponent } from './components/marketplace-content/marketplace-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MarketplaceComponent,
    MarketplaceContentComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule
  ],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }
