import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { PublicationModule } from './components/publication/publication.module';

@NgModule({
  declarations: [
    MarketplaceComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    PublicationModule
  ],
  exports: [MarketplaceComponent]
})
export class MarketplaceModule { }
