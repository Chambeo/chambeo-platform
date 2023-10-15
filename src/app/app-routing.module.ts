import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './features/marketplace/marketplace.component';
import { ProfileComponent } from './features/profile/profile.component';
import { TaskComponent } from './features/task/task.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { PostComponent } from './shared/components/post/post.component';
import { SettingsComponent } from './features/settings/settings.component';
import { ContractComponent } from './features/contract/contract.component';
import { SavePostComponent } from './features/save-post/save-post.component';

const routes: Routes = [ 
  { path: '', pathMatch: 'full', redirectTo: 'marketplace' },
  { path: 'marketplace', component:  MarketplaceComponent },
  { path: 'marketplace/task', component:  TaskComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'post', component: PostComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'saved-post', component: SavePostComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**',  pathMatch: 'full', redirectTo: 'marketplace' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
