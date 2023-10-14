import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DropdownModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
