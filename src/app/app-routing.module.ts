import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './features/marketplace/marketplace.component';

const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'marketplace' },
  { path: 'marketplace', component:  MarketplaceComponent},
  { path: '**',  pathMatch: 'full', redirectTo: 'marketplace' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
