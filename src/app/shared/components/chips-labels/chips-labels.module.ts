import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsLabelsComponent } from './chips-labels.component';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [
    ChipsLabelsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ChipsLabelsComponent]
})
export class ChipsLabelsModule { }
