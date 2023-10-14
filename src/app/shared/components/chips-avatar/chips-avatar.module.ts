import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ChipsAvatarComponent } from './chips-avatar.component';



@NgModule({
  declarations: [ChipsAvatarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ChipsAvatarComponent]
})
export class ChipsAvatarModule { }
