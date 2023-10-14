import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './features/marketplace/marketplace.component';
import { ProfileComponent } from './features/profile/profile.component';
import { TaskComponent } from './features/task/task.component';

const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'marketplace' },
  // { path: 'marketplace', component:  MarketplaceComponent, children: [
  //   { path: 'content', component: MarketplaceContentComponent },
  //   { path: '', redirectTo: 'content', pathMatch: 'full'}
  // ]},
  { path: 'marketplace', component:  MarketplaceComponent },
  { path: 'marketplace/task', component:  TaskComponent },
  // , children: [
  //   { path: 'content', component: MarketplaceContentComponent },
  //   { path: '', redirectTo: 'content', pathMatch: 'full'}
  // ]},
  { path: 'profile', component: ProfileComponent },
  { path: '**',  pathMatch: 'full', redirectTo: 'marketplace' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
