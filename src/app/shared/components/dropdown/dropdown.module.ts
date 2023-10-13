import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [DropdownComponent]
})
export class DropdownModule { }
