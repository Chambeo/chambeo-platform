import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ChipsAvatarModule } from '../chips-avatar/chips-avatar.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChipsAvatarModule,
    RouterModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
