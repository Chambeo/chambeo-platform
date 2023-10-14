import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './features/marketplace/marketplace.component';
import { MarketplaceContentComponent } from './features/marketplace/components/marketplace-content/marketplace-content.component';
import { ProfileComponent } from './features/profile/profile.component';
import { TaskComponent } from './features/task/task.component';

const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'marketplace/content' },
  // { path: 'marketplace', component:  MarketplaceComponent, children: [
  //   { path: 'content', component: MarketplaceContentComponent },
  //   { path: '', redirectTo: 'content', pathMatch: 'full'}
  // ]},
  { path: 'marketplace/content', component:  MarketplaceContentComponent },
  { path: 'marketplace/task', component:  TaskComponent },
  // , children: [
  //   { path: 'content', component: MarketplaceContentComponent },
  //   { path: '', redirectTo: 'content', pathMatch: 'full'}
  // ]},
  { path: 'profile', component: ProfileComponent },
  { path: '**',  pathMatch: 'full', redirectTo: 'marketplace/content' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
